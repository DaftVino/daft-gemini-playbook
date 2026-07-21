# 0003 — Prompts prepare, people decide

- **Status:** Accepted
- **Date:** 2026-07-21

## Context

Every prompt in this library operates on material where a wrong answer has a cost: payment files,
payroll registers, lease clauses, insurance evidence, access rosters, government notices. The
library will be used by people who are not experts in the subject matter of the prompt they are
running — that is precisely why it exists.

Large language models fail in a specific and dangerous shape here. They do not fail loudly. They
produce a fluent, correctly formatted, plausibly cited answer that is wrong in one clause, one
denominator, or one date. The failure is invisible at exactly the moment a non-expert reads it.

A prompt library therefore has to choose what its worst case is:

- If prompts can direct action, the worst case is **an executed mistake** — a payment released to a
  changed bank detail, an archived compliance notice, an access grant, a coverage claim made to a
  landlord.
- If prompts can only prepare, the worst case is **wasted review time**.

The second is recoverable. The first sometimes is not.

## Decision

**No prompt, Gem, or Studio flow built from this library may send, delete, archive, move, pay,
post, approve, grant access, or communicate externally.** They may prepare any of those — draft the
message, assemble the entry, list the access to remove, organize the claim evidence — and hand it
to a named human.

This applies to every risk label, including Green, and it is not waivable per-prompt. Changing it
requires a superseding ADR.

Three mechanisms enforce it:

1. **Authoring.** The prompt standard forbids action verbs in prompt bodies; Red prompts must
   explicitly forbid the conclusion only a human may draw, and must name the authorized reviewer by
   role. The validator checks the label-to-block mapping.
2. **Output shape.** Every action-producing output format carries Owner, Due Date, and Evidence
   columns, so an unowned recommendation is visibly incomplete rather than quietly actionable.
3. **Automation ceiling.** First production Studio releases are limited to reversible outcomes —
   label, draft, task, notification, controlled copy. See `workspace-studio-guide.md`.

A further rule follows from this and is worth stating separately: for Red work, **the prompt
produces the question, not the answer.** The model is genuinely excellent at assembling a precise,
complete question for counsel, a broker, a carrier, or the Controller — and unreliable at knowing
whether it is authorized to answer it. Pointing it at the question is both safer and better.

## Consequences

**Good**

- The library can be distributed widely without a per-user competence assessment, because the
  failure mode is bounded.
- Accountability stays where it legally and practically belongs. No reviewer can say the system
  did it.
- It sets a clear ceiling on automation ambition, which prevents the common failure of an unowned
  flow silently doing consequential things for months.
- It makes the prompts better. Forcing "produce the question and the evidence" instead of "produce
  the answer" yields output a reviewer can actually use.

**Bad / accepted costs**

- **The library will feel less impressive than what the technology can visibly do.** Someone will
  reasonably ask why it cannot just send the vendor email. The answer is that the day it can, the
  library needs a different governance model than this one.
- Human review is the throughput bottleneck by design. Efficiency gains come from eliminating
  preparation work, not approval work.
- Some genuinely safe automations are excluded by a rule stated absolutely rather than
  case-by-case. Accepted: a rule with exceptions is a rule nobody can apply under time pressure,
  and time pressure is when it matters.

**Neutral**

- Nothing prevents a *separate* system, with its own governance, from executing actions. The
  constraint is on this library, not on the organization.

## Alternatives considered

- **Allow action for Green prompts.** Rejected. The label describes the analysis, not the blast
  radius, and a Green prompt drafting an internal note can still be pointed at an external
  recipient. A boundary that depends on correct labelling is a boundary that fails on the first
  mislabel.
- **Case-by-case approval for specific automations.** Rejected as the default. It is the right model
  eventually, but it requires a review board, an audit trail, and a rollback capability that do not
  exist yet. Revisit when they do — via a superseding ADR.
- **Rely on training rather than the artifact.** Rejected. Training decays, staff turn over, and the
  prompt outlives the session where its caveats were explained.
