#!/usr/bin/env node
/**
 * Proves scripts/validate-prompts.mjs actually enforces what it claims.
 *
 *   node scripts/test-validator.mjs
 *
 * The library's central claim is that its safety rules are mechanically checked. An enforcer
 * nobody has watched fail does not support that claim, so every rule gets a fixture that trips it.
 *
 * Fixtures live in scripts/fixtures/. See that directory's README for the conventions.
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { runValidation, ERROR_CODES, WARNING_CODES, LEAK_PATTERNS } from './validate-prompts.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const fixtureRoot = (name) => resolve(HERE, 'fixtures', name);

/** file -> the exact set of error codes that file must produce, sorted. */
const EXPECTED_ERRORS = {
  'prompts/finance-accounting/Bad-Slug.md': ['E_FILENAME'],
  'prompts/finance-accounting/904-no-heading.md': ['E_HEADING'],
  'prompts/finance-accounting/905-id-mismatch.md': ['E_ID_MISMATCH'],
  'prompts/lease-property-insurance/906-duplicate.md': ['E_ID_DUPLICATE'],
  'prompts/finance-accounting/907-category-mismatch.md': ['E_CATEGORY_MISMATCH'],
  'prompts/finance-accounting/908-risk-invalid.md': ['E_RISK_INVALID'],
  'prompts/finance-accounting/909-reviewed-format.md': ['E_REVIEWED_FORMAT'],
  // Red without either required block: one error per missing block.
  'prompts/finance-accounting/910-red-missing-blocks.md': ['E_BLOCK_MISSING', 'E_BLOCK_MISSING'],
  'prompts/finance-accounting/912-missing-meta.md': ['E_META_MISSING'],
  'prompts/finance-accounting/913-missing-section.md': ['E_SECTION_MISSING'],
  'prompts/finance-accounting/914-no-fence.md': ['E_FENCE_MISSING'],
  'prompts/finance-accounting/915-short-prompt.md': ['E_PROMPT_SHORT'],
  'prompts/finance-accounting/916-action-verb.md': ['E_ACTION_VERB'],
  'prompts/finance-accounting/917-action-verb-widened.md': ['E_ACTION_VERB'],
  'prompts/finance-accounting/918-red-no-insufficiency.md': ['E_INSUFFICIENCY_MISSING'],
  // One finding per sanitization pattern — see that fixture's header for why it is the exception
  // to one-violation-per-file. Three identity patterns, two figure patterns.
  'prompts/finance-accounting/919-leak.md': [
    'E_LEAK',
    'E_LEAK',
    'E_LEAK',
    'E_LEAK_FIGURE',
    'E_LEAK_FIGURE',
  ],
  // The waiver stops at prompts/ — a prompt has no legitimate use for a specific figure.
  'prompts/finance-accounting/922-marker-ignored-in-prompts.md': ['E_LEAK_FIGURE'],
  'docs/malformed-marker.md': ['E_MARKER_MALFORMED'],
  'docs/marker-does-not-waive-identity.md': ['E_LEAK'],
  'prompts/finance-accounting/920-broken-link.md': ['E_LINK_BROKEN'],
  'prompts/not-a-category/921-unknown-category.md': ['E_CATEGORY_UNKNOWN'],
};

/** file -> the exact set of warning codes that file must produce, sorted. */
const EXPECTED_WARNINGS = {
  'prompts/finance-accounting/911-owner-person.md': ['W_OWNER_PERSON'],
  'docs/stale-marker.md': ['W_MARKER_STALE'],
};

const groupCodes = (findings) => {
  const byFile = {};
  for (const f of findings) (byFile[f.file] ??= []).push(f.code);
  for (const codes of Object.values(byFile)) codes.sort();
  return byFile;
};

test('valid fixtures produce no errors and no warnings', () => {
  const { errors, warnings, prompts } = runValidation({ root: fixtureRoot('valid') });

  assert.deepEqual(errors, [], `unexpected errors: ${JSON.stringify(errors, null, 2)}`);
  assert.deepEqual(warnings, [], `unexpected warnings: ${JSON.stringify(warnings, null, 2)}`);
  assert.equal(prompts.length, 3);
});

test('a forbidden action verb is permitted when it is being forbidden', () => {
  // 901 says "Do not send it", "Never email it to the vendor", "do not grant access". These are
  // the exact sentences ADR 0003 requires prompts to contain, so the action check has to read
  // them as compliance rather than as instructions.
  const { errors } = runValidation({ root: fixtureRoot('valid') });
  const actionErrors = errors.filter((e) => e.code === 'E_ACTION_VERB');
  assert.deepEqual(actionErrors, []);
});

test('each invalid fixture produces exactly its intended error codes', () => {
  const { errors } = runValidation({ root: fixtureRoot('invalid') });
  assert.deepEqual(groupCodes(errors), EXPECTED_ERRORS);
});

test('each invalid fixture produces exactly its intended warning codes', () => {
  const { warnings } = runValidation({ root: fixtureRoot('invalid') });
  assert.deepEqual(groupCodes(warnings), EXPECTED_WARNINGS);
});

test('every declared code has a fixture that trips it', () => {
  const covered = new Set(Object.values(EXPECTED_ERRORS).flat());
  const uncovered = ERROR_CODES.filter((c) => !covered.has(c));
  assert.deepEqual(uncovered, [], `error codes with no fixture: ${uncovered.join(', ')}`);

  const coveredWarnings = new Set(Object.values(EXPECTED_WARNINGS).flat());
  const uncoveredWarnings = WARNING_CODES.filter((c) => !coveredWarnings.has(c));
  assert.deepEqual(uncoveredWarnings, [], `warning codes with no fixture: ${uncoveredWarnings.join(', ')}`);
});

test('every sanitization pattern is tripped by a fixture', () => {
  // E_LEAK covers five separate patterns. Coverage of the code is not coverage of the patterns:
  // deleting the government-ID regex left this suite green until this test existed.
  const { errors } = runValidation({ root: fixtureRoot('invalid') });
  const leakCodes = new Set(['E_LEAK', 'E_LEAK_FIGURE']);
  const tripped = new Set(errors.filter((e) => leakCodes.has(e.code)).map((e) => e.detail));
  const untripped = LEAK_PATTERNS.map((p) => p.what).filter((w) => !tripped.has(w));
  assert.deepEqual(untripped, [], `sanitization patterns with no fixture: ${untripped.join(', ')}`);
});

test('every code the fixtures produce is declared', () => {
  const declared = new Set([...ERROR_CODES, ...WARNING_CODES]);
  const produced = new Set([
    ...Object.values(EXPECTED_ERRORS).flat(),
    ...Object.values(EXPECTED_WARNINGS).flat(),
  ]);
  const undeclared = [...produced].filter((c) => !declared.has(c));
  assert.deepEqual(undeclared, [], `codes not in ERROR_CODES/WARNING_CODES: ${undeclared.join(', ')}`);
});
