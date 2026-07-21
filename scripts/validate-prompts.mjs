#!/usr/bin/env node
/**
 * Validates every file under prompts/ against docs/prompt-standard.md.
 *
 *   node scripts/validate-prompts.mjs                 # validate
 *   node scripts/validate-prompts.mjs --write-index   # validate, then regenerate prompts/index.md
 *
 * Exit 0 = clean, 1 = errors found. Warnings never fail the build.
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PROMPTS = join(ROOT, 'prompts');
const WRITE_INDEX = process.argv.includes('--write-index');

/** Folder name -> the exact Category value its files must declare. */
const CATEGORIES = {
  'lease-property-insurance': 'Lease, Property & Insurance',
  'finance-accounting': 'Finance & Accounting',
  'payroll-hr-compliance': 'Payroll, HR & Compliance',
  'operations-vendors-facilities': 'Operations, Vendors & Facilities',
  'operations-dashboards': 'Operations Dashboards',
  'document-intelligence': 'Document Intelligence',
  'gmail-drive-workflows': 'Gmail, Drive & Workflows',
  'technology-security': 'Technology, Data & Security',
  'executive-leadership': 'Executive Leadership',
  'meetings-collaboration': 'Meetings & Collaboration',
  'frontline-enablement': 'Frontline Enablement',
  'industry-multi-unit': 'Industry Pack — Multi-Unit',
  retired: 'Retired',
};

/** Display order for the generated index. */
const ORDER = Object.keys(CATEGORIES);

const RISKS = ['Green', 'Green/Yellow', 'Yellow', 'Yellow/Red', 'Red'];
const REQUIRED_FIELDS = [
  'Category',
  'Surface',
  'Risk',
  'Owner',
  'Last reviewed',
  'Required sources',
  'Core blocks',
];
const REQUIRED_SECTIONS = [
  'When to use',
  'Prompt',
  'Validation before use',
  'Example follow-up',
  'Change log',
];

/**
 * Verbs a prompt body must never instruct. Keyed to ADR 0003.
 * Negated forms are fine and in fact required — "Do not send it" is the boundary being
 * enforced, so the pattern only matches when no negation precedes it on the same line.
 */
const ACTION_VERBS = [
  /\bsend the email\b/i,
  /\bsend it\b/i,
  /\bdelete the\b/i,
  /\barchive the\b/i,
  /\bapprove the payment\b/i,
  /\bpost the entry\b/i,
  /\bgrant access\b/i,
];
const NEGATION = /\b(do not|don't|never|must not|may not|without|rather than|instead of)\b/i;

/**
 * A Yellow/Red prompt must tell Gemini what to do when the evidence runs out. There is no single
 * required wording — these are the forms that actually constitute an insufficiency instruction.
 */
const INSUFFICIENCY = [
  /insufficient\s+evidence/i,
  /data\s+issue\s*—\s*verify/i,
  /\bnot addressed\b/i,
  /\bunclear\b/i,
  /\bsay so\b/i,
  /\bstate (that )?(it is|they are|you cannot|the|this)\b/i,
  /\bdo not infer\b/i,
  /\bdo not (assume|guess|invent|supply|fill)\b/i,
  /\bmark (it |them |as )?(unconfirmed|derived|tbd|estimated)\b/i,
  /\bunknowns? as unknowns?\b/i,
  /\bnot (yet )?established\b/i,
  /\bwhere (the )?(source|documents?|data|evidence) (does|do) not\b/i,
  /\blist (it|them|these) as (an? )?(open|gap|question|unresolved)/i,
  /\bno evidence recorded\b/i,
  /\bcannot (be )?(safely )?(parsed|determined|isolated|separate)/i,
];

/** Heuristic sanitization checks. High false-negative rate by design — a backstop, not a gate. */
const LEAK_PATTERNS = [
  { re: /[\w.+-]+@[\w-]+\.[\w.]{2,}/g, what: 'email address' },
  { re: /\b\d{3}[-.\s]\d{3}[-.\s]\d{4}\b/g, what: 'phone number' },
  { re: /\b\d{3}-\d{2}-\d{4}\b/g, what: 'government ID pattern' },
  { re: /\$\s?\d{1,3}(,\d{3})+(\.\d+)?/g, what: 'specific dollar amount' },
  { re: /\b\d{9,}\b/g, what: 'long digit run (account number?)' },
];
/** Placeholder forms that look like leaks but are not. */
const LEAK_ALLOW = [/\$\[/, /\$X/, /support\.google\.com/, /workspace\.google\.com/];

const errors = [];
const warnings = [];
const prompts = [];
const seenIds = new Map();

function err(file, msg) {
  errors.push(`${file}: ${msg}`);
}
function warn(file, msg) {
  warnings.push(`${file}: ${msg}`);
}

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (entry.endsWith('.md') && entry !== 'index.md') out.push(full);
  }
  return out;
}

function parseMeta(body) {
  const meta = {};
  for (const line of body.split('\n')) {
    const m = line.match(/^-\s+\*\*(.+?):\*\*\s*(.*)$/);
    if (m) meta[m[1].trim()] = m[2].trim();
    else if (line.startsWith('## ')) break;
  }
  return meta;
}

function validate(file) {
  const rel = relative(ROOT, file).split(sep).join('/');
  const folder = relative(PROMPTS, dirname(file)).split(sep)[0];
  const base = file.split(sep).pop();
  const raw = readFileSync(file, 'utf8');

  if (!(folder in CATEGORIES)) {
    err(rel, `unknown category folder "${folder}" — add it to CATEGORIES in this script or move the file`);
    return;
  }

  // --- filename and heading -------------------------------------------------
  const fnMatch = base.match(/^(\d{3})-([a-z0-9-]+)\.md$/);
  if (!fnMatch) {
    err(rel, 'filename must be NNN-lowercase-kebab-slug.md');
    return;
  }
  const fileId = fnMatch[1];

  const h1 = raw.match(/^#\s+(\d{3})\s+—\s+(.+)$/m);
  if (!h1) {
    err(rel, 'first heading must be "# NNN — Prompt Name" (em dash)');
    return;
  }
  const [, headingId, title] = h1;
  if (headingId !== fileId) err(rel, `ID mismatch: filename ${fileId}, heading ${headingId}`);

  if (seenIds.has(fileId)) {
    err(rel, `duplicate prompt ID ${fileId} — also used by ${seenIds.get(fileId)}. IDs are permanent and unique.`);
  } else {
    seenIds.set(fileId, rel);
  }

  // --- metadata -------------------------------------------------------------
  const meta = parseMeta(raw);
  for (const field of REQUIRED_FIELDS) {
    if (!meta[field]) err(rel, `missing required metadata field "${field}"`);
  }

  if (meta.Category && meta.Category !== CATEGORIES[folder]) {
    err(rel, `Category "${meta.Category}" does not match folder ${folder} ("${CATEGORIES[folder]}")`);
  }

  const risk = meta.Risk;
  if (risk && !RISKS.includes(risk)) {
    err(rel, `Risk "${risk}" is not one of: ${RISKS.join(', ')}`);
  }

  if (meta['Last reviewed'] && !/^\d{4}-\d{2}-\d{2}$/.test(meta['Last reviewed'])) {
    err(rel, `Last reviewed must be YYYY-MM-DD, got "${meta['Last reviewed']}"`);
  }

  const blocks = meta['Core blocks'] || '';
  if (risk === 'Red') {
    if (!/Evidence/.test(blocks)) err(rel, 'Red prompts must carry the Evidence core block');
    if (!/Legal\/People\/Risk/.test(blocks))
      err(rel, 'Red prompts must carry the Legal/People/Risk core block');
  } else if (risk === 'Yellow' || risk === 'Yellow/Red') {
    if (!/Evidence/.test(blocks)) err(rel, `${risk} prompts must carry the Evidence core block`);
  }

  if (meta.Owner && /\b[A-Z][a-z]+\s+[A-Z]\.?\s*[A-Z][a-z]+\b/.test(meta.Owner)) {
    warn(rel, `Owner "${meta.Owner}" looks like a person's name — owners must be roles`);
  }

  // --- sections -------------------------------------------------------------
  const headings = [...raw.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1].trim());
  for (const section of REQUIRED_SECTIONS) {
    if (!headings.includes(section)) err(rel, `missing required section "## ${section}"`);
  }

  // --- prompt fence ---------------------------------------------------------
  const promptSection = raw.split(/^##\s+Prompt\s*$/m)[1] || '';
  const fence = promptSection.match(/```text\n([\s\S]*?)\n```/);
  if (!fence) {
    err(rel, 'the Prompt section must contain a single ```text fenced block');
  } else {
    const promptBody = fence[1];
    if (promptBody.trim().length < 120) err(rel, 'prompt body is suspiciously short (<120 chars)');
    for (const re of ACTION_VERBS) {
      for (const line of promptBody.split('\n')) {
        if (re.test(line) && !NEGATION.test(line)) {
          err(rel, `prompt body instructs an action (${re}) — see ADR 0003, prompts prepare, people decide`);
        }
      }
    }
    // Red prompts must be self-contained on insufficiency: they are the ones where a user who
    // forgets to append the Evidence core block does real damage. Yellow relies on the block.
    if (risk === 'Red' && !INSUFFICIENCY.some((re) => re.test(promptBody))) {
      err(rel, 'Red prompt must instruct Gemini what to do when evidence is insufficient, in the prompt body itself');
    }
  }

  // --- sanitization backstop ------------------------------------------------
  for (const { re, what } of LEAK_PATTERNS) {
    for (const hit of raw.match(re) || []) {
      if (LEAK_ALLOW.some((a) => a.test(hit))) continue;
      err(rel, `possible unsanitized ${what}: "${hit}" — see docs/data-handling-rules.md`);
    }
  }

  // --- relative links -------------------------------------------------------
  for (const m of raw.matchAll(/\]\((?!https?:|#)([^)]+)\)/g)) {
    const target = m[1].split('#')[0];
    if (!target) continue;
    if (!existsSync(resolve(dirname(file), target))) {
      err(rel, `broken relative link: ${target}`);
    }
  }

  prompts.push({
    id: fileId,
    title,
    folder,
    category: CATEGORIES[folder],
    path: rel,
    surface: meta.Surface || '',
    risk: risk || '',
    owner: meta.Owner || '',
    reviewed: meta['Last reviewed'] || '',
  });
}

function writeIndex() {
  const byCategory = new Map(ORDER.map((f) => [f, []]));
  for (const p of prompts) {
    if (!byCategory.has(p.folder)) byCategory.set(p.folder, []);
    byCategory.get(p.folder).push(p);
  }

  const lines = [
    '# Prompt Index',
    '',
    '<!-- GENERATED by scripts/validate-prompts.mjs --write-index. Do not hand-edit. -->',
    '',
    `${prompts.length} prompts across ${[...byCategory].filter(([, v]) => v.length).length} categories.`,
    'Risk labels and what each obliges: [docs/risk-and-approval.md](../docs/risk-and-approval.md).',
    '',
  ];

  const counts = ORDER.filter((f) => (byCategory.get(f) || []).length).map(
    (f) => `| [${CATEGORIES[f]}](#${slug(CATEGORIES[f])}) | ${byCategory.get(f).length} |`
  );
  lines.push('| Category | Prompts |', '|---|---:|', ...counts, '');

  for (const folder of ORDER) {
    const rows = (byCategory.get(folder) || []).sort((a, b) => a.id.localeCompare(b.id));
    if (!rows.length) continue;
    lines.push(`## ${CATEGORIES[folder]}`, '');
    lines.push('| ID | Prompt | Surface | Risk | Owner | Reviewed |', '|---|---|---|---|---|---|');
    for (const r of rows) {
      lines.push(
        `| ${r.id} | [${r.title}](${r.path.replace('prompts/', '')}) | ${r.surface} | ${r.risk} | ${r.owner} | ${r.reviewed} |`
      );
    }
    lines.push('');
  }

  writeFileSync(join(PROMPTS, 'index.md'), lines.join('\n'), 'utf8');
  console.log(`Wrote prompts/index.md (${prompts.length} prompts)`);
}

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

// --- run ---------------------------------------------------------------------
for (const file of walk(PROMPTS).sort()) validate(file);

if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`  ! ${w}`);
}

if (errors.length) {
  console.error(`\n${errors.length} error(s):`);
  for (const e of errors) console.error(`  x ${e}`);
  console.error(`\nFAILED — ${prompts.length} prompt(s) checked.`);
  process.exit(1);
}

console.log(`\nOK — ${prompts.length} prompt(s) checked, ${seenIds.size} unique IDs.`);
if (WRITE_INDEX) writeIndex();
