# 078 — Accrual, Prepaid & Reserve Review

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Accrual Schedule, @Prepaid Schedule, @Reserve Schedule, @Open Purchase Orders, @Vendor Invoices Received After Cut-off, @Prior Period Schedules
- **Core blocks:** Evidence, Finance

## When to use

At close, to confirm the accruals reflect what actually happened rather than what happened last
month.

## Prompt

```text
Review @Accrual Schedule, @Prepaid Schedule, @Reserve Schedule, @Open Purchase Orders, @Vendor
Invoices Received After Cut-off, and @Prior Period Schedules for [entity / period].

Return:
(1) Accrual review: Item | Basis | Prior balance | Current balance | Change | Supporting evidence |
    Still required? | Owner
(2) **Accruals that have not moved in three or more periods.** A static accrual is either a
    forgotten liability or an unreleased one, and both are findings.
(3) Accruals reversed but not re-established, and accruals released without a matching invoice
(4) Goods and services received where no invoice has arrived — from the open PO list and the
    post-cut-off invoices — and whether each is accrued
(5) Prepaid amortization: expected versus recorded, with the calculation, and any prepaid whose
    underlying period has ended
(6) Reserves: basis, whether the basis still holds, and evidence supporting the current level
(7) Items requiring Controller judgement rather than mechanical calculation

Do not propose an entry without both sides and the evidence. Where an accrual's basis is not
documented, say so rather than reconstructing a plausible one.
```

## Validation before use

- Post-cut-off invoices are the primary test of accrual completeness. Confirm that population is
  genuinely complete before relying on the review.
- Reserve levels require Controller and often CPA judgement — this prompt assembles the evidence,
  it does not set the reserve.
- Recalculate prepaid amortization independently for the largest items.

## Example follow-up

`Which accruals have no documented basis, and what evidence would establish or release each?`

## Change log

- 2026-07-21 — Created — Controller
