# Validator coverage and lifecycle enforcement

- **Status:** Proposed
- **Date:** 2026-07-21
- **Issues:** validator test harness · sanitization scan coverage · retirement lifecycle · security policy

## Context

An external review of the public repository graded it well on governance design and poorly on
*demonstrated* governance. The distinction is fair and worth stating plainly: this repository
documents a great deal that nothing verifies. Four of its recommendations survived checking against
the actual code; the rest were either already satisfied or were generic code-repository hygiene
imported into a repository that ships no code.

What survived, restated as defects:

1. **The sanitization backstop only reads `prompts/`.** `walk(PROMPTS)` at the foot of
   `scripts/validate-prompts.mjs` is the only thing that feeds the leak patterns. `docs/`,
   `examples/`, `templates/`, and the root files are never scanned — including `examples/`, which
   is the one directory whose entire job is holding realistic-looking figures, and which
   `CLAUDE.md` names explicitly in its data-handling constraint. A dry run of the existing patterns
   over non-prompt Markdown returns exactly one hit today, so the gap is currently theoretical. It
   will not stay theoretical: examples are the material most likely to be written by pasting
   something real and editing it down.

2. **Nothing tests the validator.** 324 lines of enforcement logic, zero assertions. There is no
   evidence that `ACTION_VERBS`, `INSUFFICIENCY`, or `LEAK_PATTERNS` fire at all. For a repository
   whose central claim is that its safety rules are mechanically enforced, an unverified enforcer
   is the weakest link in the argument.

3. **`ACTION_VERBS` is narrower than the boundary it claims to enforce.** Seven literal phrases.
   *Email it to the landlord*, *pay the invoice*, and *revoke their access* all pass clean. ADR 0003
   is enforced by three mechanisms and this is the automated one; it should at least cover the
   verbs the ADR itself names.

4. **The retirement lifecycle is documented in four places and enforced in none.**
   `prompt-standard.md` specifies a `Status` line with a supersession pointer, `architecture.md`
   and `CONTRIBUTING.md` restate it, `risk-and-approval.md` sets a cadence that ends in retirement.
   `Status` is not in `REQUIRED_FIELDS`, is never parsed, and never reaches the generated index.
   The `retired` category exists in the validator's `CATEGORIES` map with no folder behind it.

5. **No disclosure path.** The repository is public and asserts that it contains no real data. There
   is no stated way for someone who finds otherwise to report it.

## Goals

Convert documented claims into checked ones, without turning a content repository into a software
project.

## Non-goals

- **A credential scanner in CI.** Gitleaks and TruffleHog hunt secrets. This repository ships no
  code and no credentials; its exposure risk is business *context* — entity names, vendors,
  thresholds. A credential scanner would find nothing and add noise.
  `data-handling-rules.md` already recommends gitleaks as a pre-commit hook, which is the correct
  placement for it, and that guidance stands unchanged.
- **A committed forbidden-term list.** A tracked file listing real entity names, vendors, domains,
  and site identifiers *is* the disclosure, published in plaintext, permanently. If one is ever
  wanted it must be a gitignored local file or a CI secret, never a tracked artifact. Out of scope
  here.
- **A prompt evaluation harness.** Worth doing, wrong shape as proposed. Nothing can drive
  Gemini-in-Workspace from CI, so a prompt "test suite" is a human protocol with a scoring sheet,
  not an automated gate. The right first version extends the existing `examples/` pattern with
  acceptance criteria on two fast-path prompts, run for one real cycle before generalizing.
  Deferred deliberately, not forgotten.
- **A `docs/prompt-lifecycle.md`.** The lifecycle is already specified in `prompt-standard.md`. A
  fifth statement of it is a drift generator. The defect is enforcement, not documentation.
- **Renaming the README.** Cosmetic. The generic title is arguably the better one for a public
  MIT-licensed framework.

## Decisions

### D1 — Split the leak patterns by what they detect, not by where they run

The scan extends to every Markdown file in the repository, but the patterns divide into two classes
with different escape rules:

| Class | Patterns | Exemptible |
|---|---|---|
| **Identity** | email address, phone number, government ID | **Never**, anywhere in the repository |
| **Figure** | dollar amounts of four or more digits, long digit runs | Yes, by explicit per-file attestation |

The split is the whole design. A synthetic dollar figure in a worked example is legitimate and
load-bearing — `examples/README.md` requires plausible fictional data, and an example whose every
number is `$X` does not teach the output format. A real email address is never legitimate in any
file for any reason.

### D2 — The figure exemption is a human attestation, not a path allowlist

A file may carry, near its top:

```markdown
<!-- synthetic-data: reviewed 2026-07-21 -->
```

This suppresses **figure** findings in that file and nothing else. It is deliberately a dated,
diffable line that a reviewer sees in the PR, rather than a directory rule that is invisible once
written. Exempting `examples/**` wholesale would mean the next author never encounters the question;
this way, adding the marker is a small act of attention, and the date shows when the attention
happened. A marker on a file with no figure findings warns as stale.

Rejected: rewriting the one existing hit to `$X`. It is arbitrary in place — the same file carries
`-$310` and `34.1%`, which are equally specific and simply do not match the regex. Special-casing
the figure that happens to have a comma in it makes the rule look like superstition.

### D3 — Test the validator through an exported function, against fixture files

`validate-prompts.mjs` gains an exported `runValidation({ root, now })` returning
`{ errors, warnings, prompts }`; the CLI becomes a thin wrapper that runs only when the file is the
entry module. Errors gain stable string codes so tests assert on `E_RISK_INVALID` rather than on
prose that will be reworded.

Fixtures live in `scripts/fixtures/` — one directory per case, each containing a prompt file that
violates exactly one rule, plus a `valid/` case that must come back clean. The suite uses `node:test`
and runs as `node scripts/test-validator.mjs`, with no `package.json` and no dependencies. This
repository states that it contains no runtime code; a test file for the one script it does have is
the smallest thing that keeps that true in spirit.

### D4 — Widen `ACTION_VERBS` empirically, and drop anything that fires falsely

New patterns are validated against all 112 existing prompts before landing. Any pattern producing a
false positive is dropped rather than worked around with an exception. Two candidates are already
known to be unsafe in this corpus and are excluded: `cancel the` and `terminate the` both appear
legitimately in lease analysis, describing a counterparty's rights rather than instructing Gemini.

The check stays line-based with the existing negation guard, and stays a backstop. It cannot
recognize a paraphrase, and widening it does not make it a gate — review is the gate.

### D5 — Enforce the lifecycle that already exists, including the supersession pointer

- `Status` is optional on active prompts; when present it must parse.
- Any file under `prompts/retired/` **must** carry `Status: Retired YYYY-MM-DD — <reason>`.
- When the reason is `superseded by NNN`, that ID must resolve to a prompt that exists. A tombstone
  pointing at nothing is worse than no tombstone, because it reads as a redirect.
- Retired prompts are excluded from the active category counts in the generated index and listed
  separately with their status.
- Review cadence from `risk-and-approval.md` becomes a **warning**: Yellow/Yellow-Red/Red stale
  after two quarters, Green after two years. A warning, not an error — a stale review date is a
  prompt to act, not a reason to block an unrelated PR. All 112 prompts were reviewed 2026-07-21,
  so this fires zero times today and starts speaking in 2027.

While here: `prompt-standard.md` lists four risk labels but the validator and five existing prompts
use `Green/Yellow`. The documentation is wrong, not the prompts. Fixed as part of this work.

### D6 — `SECURITY.md` scoped to data exposure, not vulnerabilities

This repository ships no executable code, so a conventional vulnerability policy would be
misleading. The disclosure path that matters is: *this library asserts it contains no real data,
and you found some.* The file says that, gives a private reporting route, and points at the existing
remediation procedure in `data-handling-rules.md` rather than duplicating it.

## Verification

- `node scripts/test-validator.mjs` — fixture suite, every rule proven to fire.
- `node scripts/validate-prompts.mjs` — clean across all 112 prompts, no new errors, no
  regressions in warnings.
- `node scripts/validate-prompts.mjs --write-index` — `prompts/index.md` unchanged except where
  retirement handling deliberately changes it.
- CI runs both.

## Consequences

**Good** — every safety rule the repository advertises is now either checked or explicitly labelled
as unchecked. The claim "the validator backstops this" becomes verifiable by reading the fixtures.

**Accepted cost** — `validate-prompts.mjs` roughly doubles in size and gains a test file, in a
repository that deliberately contains almost no code. Justified narrowly: this is the only
mechanical enforcement the library has, and an unverified enforcer is worse than an honest manual
process, because it invites trust it has not earned.

**Deferred** — prompt-level evaluation remains the real gap, and this work does not close it. It
makes the structural claims checkable; it says nothing about whether a given prompt reliably
extracts the right facts. That is the next piece of work and it needs human cycles, not code.
