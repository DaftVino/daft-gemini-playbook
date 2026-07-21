# 0001 — Version-controlled repository instead of a shared document

- **Status:** Accepted
- **Date:** 2026-07-21

## Context

The library began as a single ~1,000-line Markdown document holding 75 prompts, governance rules,
Gem guidance, and an adoption plan. It was complete and readable, and it had four problems that get
worse with use:

1. **No ownership boundary.** A prompt owned by the Controller and a prompt owned by the Technology
   lead lived in the same file, so any edit touched both owners' material.
2. **No change history.** "Who changed this prompt, when, and why" had no answer, which is fatal for
   Yellow and Red prompts that must be re-reviewed quarterly and after policy changes.
3. **No review gate.** Anyone with edit access could change an approved prompt in place. The word
   "approved" then means nothing.
4. **No addressable unit.** A Gem, a Studio flow, or a training deck needs to reference *one prompt*
   stably. A heading in a long document is not a stable address.

A Google Doc in a Shared Drive solves discovery for non-technical users but none of the above.

## Decision

Keep the library in a Git repository, one Markdown file per prompt, with a permanent numeric ID per
prompt, governance in `docs/`, and changes made through pull requests.

Mirror the content into a Shared Drive as the **reading** surface for people who will not open
GitHub. The repository is the source of truth; the Drive copy is a publication of it.

## Consequences

**Good**

- Every prompt has an owner, a review date, and a traceable change history.
- Approval is enforced by the PR gate rather than by convention.
- Prompt IDs give Gems, flows, and training material a stable reference.
- CI can mechanically enforce the prompt-file contract, risk labels, and sanitization checks —
  `scripts/validate-prompts.mjs`.
- The library is publishable, which forces the discipline that no real business data enters it.

**Bad / accepted costs**

- **Two surfaces to keep in sync.** Mitigated by treating Drive as generated output and updating it
  in the same change; not eliminated. This is the real cost of the decision.
- Contributors need enough Git literacy to open a PR, or need a proxy who does. In practice most
  prompt owners will propose changes through an issue and someone else will land them.
- Markdown in Drive is less pleasant to read than a Doc.

**Neutral**

- The repository holds no executable code beyond the validator, so the usual repo apparatus
  (tests, CI, releases) applies only lightly. Releases are versioned content, not software.

## Alternatives considered

- **Keep the single document.** Rejected: none of the four problems above are addressed, and they
  compound as the catalog grows past a hundred prompts.
- **Google Sheet as the master, one row per prompt.** Good for tracking adoption, bad for prompt
  text — multi-line, fenced content in a cell is unreadable and uneditable. Adopted as a
  *companion* register instead (see `workspace-setup.md`), not as the source.
- **A wiki.** Solves history, not approval. "Approved" and "anyone can edit" are incompatible.
