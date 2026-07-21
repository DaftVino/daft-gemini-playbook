# 063 — Document-to-Obligation Tracker

- **Category:** Document Intelligence
- **Surface:** NotebookLM · Gemini app · Gemini in Docs
- **Risk:** Yellow/Red
- **Owner:** Compliance owner
- **Last reviewed:** 2026-07-21
- **Required sources:** @Documents — the complete executed set for the matter
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

An agreement is signed and its obligations need to become calendar entries before everyone forgets
them.

## Prompt

```text
Review @Documents for [project / location / vendor]. Extract **only** obligations that have a date,
an amount, a deliverable, a notice requirement, an approval requirement, a renewal, a reporting
requirement, or a stated consequence for non-performance.

Return a tracker:
Obligation | Source document, clause, page | Trigger or date | Whose obligation | Owner (ours) |
Evidence of completion | Status | Next action | Escalation date

Then:
(1) Obligations with a hard deadline, listed chronologically, with the escalation date set before
    the deadline
(2) Ambiguous language — where the obligation exists but the trigger, the deadline, or the
    responsible party is unclear. List these; do not resolve them.
(3) Conflicting provisions across documents, quoted side by side
(4) Obligations that are ours versus the counterparty's, kept clearly separate

Do not infer an obligation that is not written. Do not supply a customary deadline where the
document is silent — say it is silent.
```

## Validation before use

- **Escalates to Red where obligations involve payment, notice, indemnity, or regulatory reporting.
  Authorized reviewer: counsel for ambiguous or conflicting provisions.**
- Verify each extracted date against the document. Notice-period calculations are where this
  analysis is most useful and most likely to be wrong.
- Confirm the document set is complete and includes all amendments before relying on the tracker.

## Example follow-up

`Give me the next 12 months chronologically, with the last safe date to act on each and its owner.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Compliance owner
