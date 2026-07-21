# Changelog

All notable changes to this prompt library are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versioning is [SemVer](https://semver.org/) applied to library content:

- **MAJOR** — a breaking change to prompt IDs, the risk model, or the governance rules.
- **MINOR** — new prompts, new categories, or new guidance documents.
- **PATCH** — wording, corrections, and clarifications that do not change a prompt's behaviour.

## [Unreleased]

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

[Unreleased]: https://github.com/DaftVino/gemini-prompt-library/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/DaftVino/gemini-prompt-library/releases/tag/v0.1.0
