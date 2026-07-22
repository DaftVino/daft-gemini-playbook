# Changelog

All notable changes to this prompt library are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versioning is [SemVer](https://semver.org/) applied to library content:

- **MAJOR** — a breaking change to prompt IDs, the risk model, or the governance rules.
- **MINOR** — new prompts, new categories, or new guidance documents.
- **PATCH** — wording, corrections, and clarifications that do not change a prompt's behaviour.

## [Unreleased]

## [0.3.0] - 2026-07-22

Governance that was written down but not checked is now checked. No prompt changed — all 112
validate identically and `prompts/index.md` regenerates byte-for-byte — so this release is almost
entirely about whether the repository's own claims about itself hold up.

The exception is the 057 example, which starts on the question none of the rest touches: not whether
a prompt is well-formed, but whether it is right.

### Added

- `examples/057-cash-deposit-and-paid-out-exception-handoff-example.md` — the first example carrying
  **acceptance criteria**: the facts a correct run must extract, the facts it must mark unknown, the
  conditions it must escalate, and the arithmetic with its answer. Its most useful line names the
  specific plausible *wrong* answer, because a total that is seven times too large but correctly
  formatted is the failure a reviewer in a hurry actually misses.

  Not standardized. `templates/few-shot-example-template.md` and `docs/prompt-standard.md` are
  unchanged, and the run record is empty because it has not been run against live sources. Nothing
  here executes automatically — there is no way to drive Gemini-in-Workspace from CI, so this is a
  human protocol with a scoring sheet, run by the owning role.

- `templates/kpi-definitions-template.md` — the reference file the dashboard RAG bands read their
  thresholds from. Covers definition-as-implemented, denominators, refresh timing, target versus
  escalation threshold, peer grouping, and excluded sites.
- `templates/approval-matrix-template.md` — resolves the "authorized reviewer" role named by all 20
  Red-tier prompts to a person with a stated limit. Covers financial, people, legal, and access
  authority, plus delegation and absence.
- `docs/workspace-setup.md` Stage 2 now states which reference files unblock the pilot and which
  gate the Red tier, so the two tracks can proceed independently.
- `SECURITY.md` — a private disclosure route for anyone who finds real business data in a
  repository that publicly asserts it holds none, plus for a prompt that instructs an action rather
  than preparing one. Scoped to data exposure rather than vulnerabilities: the library ships no
  executable code, so a CVE-shaped policy would misdescribe what is at risk.
- `scripts/test-validator.mjs` and `scripts/fixtures/` — the validator now has a test suite. Every
  error code has a fixture that trips it, every sanitization pattern is individually covered, and
  the suite fails if a new rule arrives without one. The valid fixtures pin the cases that must
  *pass*, including a prompt that says "Do not send it".
- Retirement enforcement: a file in `prompts/retired/` must carry a well-formed `Status` line whose
  named replacement actually exists, and `prompts/index.md` lists retired prompts separately from
  the live catalog.
- A review-cadence warning at two cadence periods past `Last reviewed`, per
  `docs/risk-and-approval.md`.

### Changed

- The sanitization backstop now scans **every** Markdown file rather than `prompts/` alone, which
  had left `examples/` — the directory whose whole job is holding realistic-looking figures —
  unchecked. Identity patterns (email, phone, government ID) are errors anywhere and cannot be
  waived; figure patterns are waivable per file, outside `prompts/`, by a dated
  `synthetic-data` attestation.
- The ADR 0003 action check widened from seven phrases to sixteen. *Email it to the landlord*,
  *pay the invoice*, and *revoke their access* previously passed clean.

### Fixed

- `docs/prompt-standard.md` documented four risk labels while the validator and five prompts use
  `Green/Yellow`.

## [0.2.0] - 2026-07-21

### Added

- `templates/severity-matrix-template.md` — the reference file 041 now depends on. Structure and
  decision rules are specified; thresholds, response times, and escalation roles are placeholders
  for the Technology lead to set. The filled-in copy belongs in the Shared Drive, not here.

### Changed

- Dashboard prompts 051, 052, 055, 057 gain a RAG Status band. Thresholds come from the existing
  KPI definitions or cash policy — never from a figure the model supplies. A metric with a data
  issue takes Grey rather than a colour, so an unverified number cannot be actioned as a result.
- Frontline prompts 074, 075, 104, 106 gain an explicit reading-level constraint: sentences under
  15 words, everyday words, one verb-first action per step. Exact equipment, system, and error-code
  names are preserved so the reader can match the text to what is in front of them.
- 041 now assigns incident severity from `@Severity Matrix` only, and declares insufficiency rather
  than falling back on a general-practice scale. `@Severity Matrix` added to its required sources
  and to the reference-file set in `docs/workspace-setup.md`.
- 098 agenda times must now sum exactly to the meeting duration, and state what was cut if they do
  not.

## [0.1.0] - 2026-07-21

### Added

- Initial public release: 112 approved prompts across 12 categories, one file per prompt.
- Governance set: `docs/prompt-standard.md`, `docs/review-rubric.md`, `docs/data-handling-rules.md`.
- Operating guidance: `docs/gemini-operating-guide.md`, `docs/risk-and-approval.md`.
- Google Workspace onboarding runbooks: `docs/workspace-setup.md`, `docs/gems-guide.md`, `docs/workspace-studio-guide.md`.
- `docs/notebooklm-study-guide.md` — using the library as a self-paced course in NotebookLM.
- Reusable templates for prompts, Gem instructions, Workspace Studio flow specs, and few-shot examples.
- `scripts/validate-prompts.mjs` plus CI to enforce prompt-file structure and ID uniqueness.
- ADRs 0001–0003 recording the repository, industry-neutrality, and human-approval-boundary decisions.

### Notes

- The core categories use industry-neutral vocabulary. Industry-specific prompts (multi-unit food
  service) are isolated in `prompts/industry-multi-unit/` so the core stays applicable to any
  multi-entity, multi-site organization. See ADR 0002.

[Unreleased]: https://github.com/DaftVino/daft-gemini-playbook/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/DaftVino/daft-gemini-playbook/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/DaftVino/daft-gemini-playbook/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/DaftVino/daft-gemini-playbook/releases/tag/v0.1.0
