# 066 — Gmail Label & Filter Architecture Designer

- **Category:** Gmail, Drive & Workflows
- **Surface:** Gemini in Gmail · Gemini app
- **Risk:** Yellow
- **Owner:** Technology lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Inbox Samples — a representative set, including the awkward ones
- **Core blocks:** Evidence

## When to use

A mailbox has stopped being usable, or a shared mailbox has no reliable handoff.

## Prompt

```text
Design a minimal Gmail organization system for [role / shared mailbox] using @Inbox Samples.

Goals, in priority order:
1. Urgent work is never hidden
2. Items waiting on someone else are visible
3. Low-value notices are searchable but not distracting
4. Shared workflows have a reliable handoff

Return:
(1) No more than six labels. Use labels as **workflow states** (Action, Waiting, Review, Reference),
    not as subjects — subject labels multiply until nobody uses them.
(2) The exact Gmail search and filter criteria for each
(3) Filter actions for each
(4) What must remain in the Inbox
(5) What may skip the Inbox
(6) Conflicts and false-positive risks — which legitimate mail each filter might catch
(7) A test plan using the sample messages, with expected outcomes
(8) Rollback steps

Never propose auto-archiving compliance, payment, legal, payroll, insurance, security, tax,
government, or executive messages. Never propose auto-delete or auto-forward. Every filter must be
reversible.
```

## Validation before use

- Run every filter as a search first and read what it catches. This is non-optional; a filter that
  archives one important message has cost more than the system saves.
- Apply labels before applying skip-inbox actions, and run label-only for a week.
- Export existing filters before changing anything, so rollback is real.

## Example follow-up

`Show me, for each filter, the sample messages it would catch that I would not want it to catch.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Technology lead
