# 018 — Intercompany Reconciliation

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Entity A GL, @Entity B GL, @Intercompany Schedule, @Bank Transfer Detail, @Supporting Invoices
- **Core blocks:** Evidence, Finance

## When to use

Intercompany accounts do not agree and close is waiting on it.

## Prompt

```text
Reconcile @Entity A GL, @Entity B GL, @Intercompany Schedule, @Bank Transfer Detail, and
@Supporting Invoices for [period].

Return:
(1) The net balance by entity and by direction, with the calculation shown
(2) Matched items
(3) Unreconciled items: Item | Entity A side | Entity B side | Difference | Likely cause | Evidence
(4) Proposed correcting entries — **both sides of every entry, always**, with entity, account, and
    amount
(5) Items requiring confirmation from the other entity's owner before anything is proposed
(6) Recurring root causes across periods, and the process change each implies

Do not propose a one-sided entry. Do not net unrelated balances to make the schedule agree — an
agreed schedule built from netting hides the problem it appears to solve.
```

## Validation before use

- Confirm both sides of every proposed entry independently. A one-sided intercompany entry creates
  a difference somewhere else that surfaces months later.
- Check that transfers near period end are recorded in the same period on both sides.
- Entries are posted by the Controller, after both entity owners have agreed.

## Example follow-up

`Which of these differences have persisted for more than two periods, and what is the common cause?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Controller
