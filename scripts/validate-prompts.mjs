#!/usr/bin/env node
/**
 * Validates every file under prompts/ against docs/prompt-standard.md.
 *
 *   node scripts/validate-prompts.mjs                 # validate
 *   node scripts/validate-prompts.mjs --write-index   # validate, then regenerate prompts/index.md
 *
 * Exit 0 = clean, 1 = errors found. Warnings never fail the build.
 *
 * The rules here are exercised by scripts/test-validator.mjs against scripts/fixtures/. Every
 * error carries a stable code so those tests assert on the rule rather than on its wording.
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve, relative, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

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

/**
 * Every code this script can emit. Declared rather than derived so that
 * scripts/test-validator.mjs can assert each one has a fixture proving it fires — a rule nobody
 * has watched fail is a rule nobody knows works.
 */
export const ERROR_CODES = [
  'E_CATEGORY_UNKNOWN',
  'E_FILENAME',
  'E_HEADING',
  'E_ID_MISMATCH',
  'E_ID_DUPLICATE',
  'E_META_MISSING',
  'E_CATEGORY_MISMATCH',
  'E_RISK_INVALID',
  'E_REVIEWED_FORMAT',
  'E_BLOCK_MISSING',
  'E_SECTION_MISSING',
  'E_FENCE_MISSING',
  'E_PROMPT_SHORT',
  'E_ACTION_VERB',
  'E_INSUFFICIENCY_MISSING',
  'E_LEAK',
  'E_LINK_BROKEN',
];

export const WARNING_CODES = ['W_OWNER_PERSON'];

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
 *
 * Negated forms are fine and in fact required — "Do not send it" is the boundary being
 * enforced, so the pattern only matches when no negation precedes it on the same line.
 *
 * This is a backstop, not a gate: it cannot recognize a paraphrase. It is tuned against the
 * existing corpus, and every pattern here produces zero false positives across the library.
 * Patterns that could not clear that bar were dropped rather than special-cased — "cancel the"
 * and "terminate the" both read as instructions but occur legitimately in lease analysis, where
 * they describe a counterparty's rights.
 */
const ACTION_VERBS = [
  /\bsend the email\b/i,
  /\bsend it\b/i,
  /\bsend (them|the \w+) to\b/i,
  /\bemail (it|them|the \w+) to\b/i,
  /\bdelete the\b/i,
  /\barchive the\b/i,
  /\bpay (the|this) (invoice|bill|vendor|amount)\b/i,
  /\bapprove the payment\b/i,
  /\bapprove it\b/i,
  /\bpost the entry\b/i,
  /\bpost it to\b/i,
  /\bsubmit (the|it|this) (form|filing|return|claim|report)\b/i,
  /\bgrant access\b/i,
  /\bgrant [^.]{0,40}\baccess\b/i,
  /\brevoke [^.]{0,40}\baccess\b/i,
  /\btransfer (the )?funds\b/i,
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

/**
 * Heuristic sanitization checks. High false-negative rate by design — a backstop, not a gate.
 *
 * Exported because the test suite asserts that *every* pattern here is tripped by a fixture.
 * One shared E_LEAK code across five patterns would otherwise let four of them be deleted without
 * a test noticing, which is how a sanitization check quietly stops sanitizing.
 */
export const LEAK_PATTERNS = [
  { re: /[\w.+-]+@[\w-]+\.[\w.]{2,}/g, what: 'email address' },
  { re: /\b\d{3}[-.\s]\d{3}[-.\s]\d{4}\b/g, what: 'phone number' },
  { re: /\b\d{3}-\d{2}-\d{4}\b/g, what: 'government ID pattern' },
  { re: /\$\s?\d{1,3}(,\d{3})+(\.\d+)?/g, what: 'specific dollar amount' },
  { re: /\b\d{9,}\b/g, what: 'long digit run (account number?)' },
];
/** Placeholder forms that look like leaks but are not. */
const LEAK_ALLOW = [/\$\[/, /\$X/, /support\.google\.com/, /workspace\.google\.com/];

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

function validate(file, state) {
  const rel = relative(state.root, file).split(sep).join('/');
  const folder = relative(state.promptsDir, dirname(file)).split(sep)[0];
  const base = file.split(sep).pop();
  const raw = readFileSync(file, 'utf8');

  // `detail` names the specific pattern or field behind a code, so tests can assert coverage of
  // each one rather than of the code as a whole.
  const err = (code, msg, detail) => state.errors.push({ file: rel, code, message: msg, detail });
  const warn = (code, msg, detail) =>
    state.warnings.push({ file: rel, code, message: msg, detail });

  if (!(folder in CATEGORIES)) {
    err(
      'E_CATEGORY_UNKNOWN',
      `unknown category folder "${folder}" — add it to CATEGORIES in this script or move the file`
    );
    return;
  }

  // --- filename and heading -------------------------------------------------
  const fnMatch = base.match(/^(\d{3})-([a-z0-9-]+)\.md$/);
  if (!fnMatch) {
    err('E_FILENAME', 'filename must be NNN-lowercase-kebab-slug.md');
    return;
  }
  const fileId = fnMatch[1];

  const h1 = raw.match(/^#\s+(\d{3})\s+—\s+(.+)$/m);
  if (!h1) {
    err('E_HEADING', 'first heading must be "# NNN — Prompt Name" (em dash)');
    return;
  }
  const [, headingId, title] = h1;
  if (headingId !== fileId) {
    err('E_ID_MISMATCH', `ID mismatch: filename ${fileId}, heading ${headingId}`);
  }

  if (state.seenIds.has(fileId)) {
    err(
      'E_ID_DUPLICATE',
      `duplicate prompt ID ${fileId} — also used by ${state.seenIds.get(fileId)}. IDs are permanent and unique.`
    );
  } else {
    state.seenIds.set(fileId, rel);
  }

  // --- metadata -------------------------------------------------------------
  const meta = parseMeta(raw);
  for (const field of REQUIRED_FIELDS) {
    if (!meta[field]) err('E_META_MISSING', `missing required metadata field "${field}"`);
  }

  if (meta.Category && meta.Category !== CATEGORIES[folder]) {
    err(
      'E_CATEGORY_MISMATCH',
      `Category "${meta.Category}" does not match folder ${folder} ("${CATEGORIES[folder]}")`
    );
  }

  const risk = meta.Risk;
  if (risk && !RISKS.includes(risk)) {
    err('E_RISK_INVALID', `Risk "${risk}" is not one of: ${RISKS.join(', ')}`);
  }

  if (meta['Last reviewed'] && !/^\d{4}-\d{2}-\d{2}$/.test(meta['Last reviewed'])) {
    err('E_REVIEWED_FORMAT', `Last reviewed must be YYYY-MM-DD, got "${meta['Last reviewed']}"`);
  }

  const blocks = meta['Core blocks'] || '';
  if (risk === 'Red') {
    if (!/Evidence/.test(blocks)) {
      err('E_BLOCK_MISSING', 'Red prompts must carry the Evidence core block');
    }
    if (!/Legal\/People\/Risk/.test(blocks)) {
      err('E_BLOCK_MISSING', 'Red prompts must carry the Legal/People/Risk core block');
    }
  } else if (risk === 'Yellow' || risk === 'Yellow/Red') {
    if (!/Evidence/.test(blocks)) {
      err('E_BLOCK_MISSING', `${risk} prompts must carry the Evidence core block`);
    }
  }

  if (meta.Owner && /\b[A-Z][a-z]+\s+[A-Z]\.?\s*[A-Z][a-z]+\b/.test(meta.Owner)) {
    warn(
      'W_OWNER_PERSON',
      `Owner "${meta.Owner}" looks like a person's name — owners must be roles`
    );
  }

  // --- sections -------------------------------------------------------------
  const headings = [...raw.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1].trim());
  for (const section of REQUIRED_SECTIONS) {
    if (!headings.includes(section)) {
      err('E_SECTION_MISSING', `missing required section "## ${section}"`);
    }
  }

  // --- prompt fence ---------------------------------------------------------
  const promptSection = raw.split(/^##\s+Prompt\s*$/m)[1] || '';
  const fence = promptSection.match(/```text\n([\s\S]*?)\n```/);
  if (!fence) {
    err('E_FENCE_MISSING', 'the Prompt section must contain a single ```text fenced block');
  } else {
    const promptBody = fence[1];
    if (promptBody.trim().length < 120) {
      err('E_PROMPT_SHORT', 'prompt body is suspiciously short (<120 chars)');
    }
    for (const re of ACTION_VERBS) {
      for (const line of promptBody.split('\n')) {
        if (re.test(line) && !NEGATION.test(line)) {
          err(
            'E_ACTION_VERB',
            `prompt body instructs an action (${re}) — see ADR 0003, prompts prepare, people decide`
          );
        }
      }
    }
    // Red prompts must be self-contained on insufficiency: they are the ones where a user who
    // forgets to append the Evidence core block does real damage. Yellow relies on the block.
    if (risk === 'Red' && !INSUFFICIENCY.some((re) => re.test(promptBody))) {
      err(
        'E_INSUFFICIENCY_MISSING',
        'Red prompt must instruct Gemini what to do when evidence is insufficient, in the prompt body itself'
      );
    }
  }

  // --- sanitization backstop ------------------------------------------------
  for (const { re, what } of LEAK_PATTERNS) {
    for (const hit of raw.match(re) || []) {
      if (LEAK_ALLOW.some((a) => a.test(hit))) continue;
      err('E_LEAK', `possible unsanitized ${what}: "${hit}" — see docs/data-handling-rules.md`, what);
    }
  }

  // --- relative links -------------------------------------------------------
  for (const m of raw.matchAll(/\]\((?!https?:|#)([^)]+)\)/g)) {
    const target = m[1].split('#')[0];
    if (!target) continue;
    if (!existsSync(resolve(dirname(file), target))) {
      err('E_LINK_BROKEN', `broken relative link: ${target}`);
    }
  }

  state.prompts.push({
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

/**
 * Validate every prompt file under `<root>/prompts`.
 *
 * @param {object} [options]
 * @param {string} [options.root]  repository root to validate; defaults to this repository
 * @returns {{errors: Array, warnings: Array, prompts: Array, seenIds: Map}}
 */
export function runValidation({ root = ROOT } = {}) {
  const state = {
    root,
    promptsDir: join(root, 'prompts'),
    errors: [],
    warnings: [],
    prompts: [],
    seenIds: new Map(),
  };
  for (const file of walk(state.promptsDir).sort()) validate(file, state);
  return state;
}

// Mirrors github-slugger: strip invalid chars, then map EACH space to a hyphen without
// collapsing — "Finance & Accounting" anchors as #finance--accounting, not #finance-accounting.
const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/ /g, '-');

/** Render prompts/index.md from validated prompt records. */
export function buildIndex(prompts) {
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

  return lines.join('\n');
}

// --- CLI ---------------------------------------------------------------------
const isEntry = process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url;

if (isEntry) {
  const writeIndex = process.argv.includes('--write-index');
  const { errors, warnings, prompts, seenIds } = runValidation();

  if (warnings.length) {
    console.log(`\n${warnings.length} warning(s):`);
    for (const w of warnings) console.log(`  ! ${w.file}: ${w.message}`);
  }

  if (errors.length) {
    console.error(`\n${errors.length} error(s):`);
    for (const e of errors) console.error(`  x ${e.file}: ${e.message}`);
    console.error(`\nFAILED — ${prompts.length} prompt(s) checked.`);
    process.exit(1);
  }

  console.log(`\nOK — ${prompts.length} prompt(s) checked, ${seenIds.size} unique IDs.`);

  if (writeIndex) {
    writeFileSync(join(ROOT, 'prompts', 'index.md'), buildIndex(prompts), 'utf8');
    console.log(`Wrote prompts/index.md (${prompts.length} prompts)`);
  }
}
