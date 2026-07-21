# Changelog

All notable changes to this prompt library are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versioning is [SemVer](https://semver.org/) applied to library content:

- **MAJOR** — a breaking change to prompt IDs, the risk model, or the governance rules.
- **MINOR** — new prompts, new categories, or new guidance documents.
- **PATCH** — wording, corrections, and clarifications that do not change a prompt's behaviour.

## [Unreleased]

## [0.1.0] - 2026-07-21

### Added

- Initial public release: 112 approved prompts across 12 categories, one file per prompt.
- Governance set: `docs/prompt-standard.md`, `docs/review-rubric.md`, `docs/data-handling-rules.md`.
- Operating guidance: `docs/gemini-operating-guide.md`, `docs/risk-and-approval.md`.
- Google Workspace onboarding runbooks: `docs/workspace-setup.md`, `docs/gems-guide.md`, `docs/workspace-studio-guide.md`.
- Reusable templates for prompts, Gem instructions, Workspace Studio flow specs, and few-shot examples.
- `scripts/validate-prompts.mjs` plus CI to enforce prompt-file structure and ID uniqueness.
- ADRs 0001–0003 recording the repository, industry-neutrality, and human-approval-boundary decisions.

### Notes

- Prompts 01–75 were ported from the original single-document catalog and rewritten to be
  industry-neutral. Prompts 76–112 are new.
- Industry-specific prompts (multi-unit food service) are isolated in `prompts/industry-multi-unit/`
  so the core library stays applicable to any multi-entity, multi-site organization.

[Unreleased]: https://github.com/OWNER/gemini-prompt-library/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/OWNER/gemini-prompt-library/releases/tag/v0.1.0
