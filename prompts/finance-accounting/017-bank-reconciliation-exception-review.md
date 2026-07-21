# 017 — Bank Reconciliation Exception Review

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Bank Statement, @GL Detail, @Reconciliation, @Deposit Detail, @Outstanding Items
- **Core blocks:** Evidence, Finance

## When to use

The reconciliation will not clear, or the outstanding-items list has stopped shrinking.

## Prompt

```text
Analyze @Bank Statement, @GL Detail, @Reconciliation, @Deposit Detail, and @Outstanding Items for
[account / month].

Classify every exception as: timing, missing entry, duplicate, coding error, bank fee, deposit
variance, transfer, possible fraud indicator, or unknown.

Return a controlled exception tracker:
Item | Date | Amount | Age (days) | Classification | Evidence | Recommended entry or follow-up |
Owner | Blocks close? (Y/N)

Then list separately:
(1) Items that must be reviewed before anything is posted
(2) Stale items — outstanding beyond [N] days — and what should happen to each
(3) Any pattern that recurs across months, which usually indicates a process defect rather than an
    error

Do not post or propose to post an entry without stating both sides. Flag any unexplained debit,
any deposit variance, and any transfer without a matching side as requiring immediate review
rather than classification.
```

## Validation before use

- Every possible fraud indicator goes to the Controller immediately and directly — not into the
  tracker for weekly review.
- Proposed entries are drafts. The Controller posts.
- Confirm the reconciliation opening balance ties to last month's closing balance before trusting
  anything downstream of it.

## Example follow-up

`Group the recurring exceptions by root cause and tell me which process change removes the most items.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Controller
