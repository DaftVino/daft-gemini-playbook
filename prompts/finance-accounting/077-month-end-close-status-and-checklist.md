# 077 — Month-End Close Status & Checklist

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets · Gemini in Docs
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Close Checklist, @Trial Balance, @Reconciliation Status, @Prior Close, @Open Items List
- **Core blocks:** Evidence, Finance, Data quality

## When to use

Day three of close, when the question is what is actually blocking and what merely looks incomplete.

## Prompt

```text
Review @Close Checklist, @Trial Balance, @Reconciliation Status, @Prior Close, and @Open Items List
for [entity / period].

Return:
(1) Status by close area: Area | Owner | Status | Blocking? | Evidence | Days versus the prior close
(2) The critical path to close — the specific chain of items that determines the close date, as
    distinct from the long list of incomplete items that do not
(3) Accounts with an unreconciled balance, ordered by amount, with the age of the difference
(4) Balance-sheet accounts with no reconciliation performed at all, which is a different and worse
    problem than an unreconciled difference
(5) Unusual items in the trial balance: accounts with a sign opposite to expectation, balances
    materially different from prior period, dormant accounts with new activity, suspense and
    clearing accounts with any balance
(6) Recurring entries not yet posted, based on the prior close
(7) Items deferred from prior closes, with how many periods they have been deferred

Do not post entries. Do not mark anything complete. Where the checklist and the trial balance
disagree about whether something is done, report both.
```

## Validation before use

- Suspense and clearing account balances are the highest-value finding here — investigate before
  close, not after.
- Confirm the checklist status against the underlying reconciliation rather than the tick.
- Items deferred across three or more periods are a control finding, not a scheduling problem.

## Example follow-up

`What is genuinely on the critical path, and what is on the list but does not affect the close date?`

## Change log

- 2026-07-21 — Created — Controller
