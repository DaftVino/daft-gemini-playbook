# 019 — Cash Forecast & Liquidity Outlook

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets · Gemini in Docs
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Bank Balances, @AP Register, @Payroll Calendar, @Rent Schedule, @Debt Schedule, @Sales Forecast, @Tax Calendar, @Known Commitments
- **Core blocks:** Evidence, Finance, Data quality

## When to use

Weekly cash planning, or any week where the disbursement schedule and the receipts are close
together.

## Prompt

```text
Build a [13-week / 4-week] cash outlook using @Bank Balances, @AP Register, @Payroll Calendar,
@Rent Schedule, @Debt Schedule, @Sales Forecast, @Tax Calendar, and @Known Commitments.

Return, by week:
Opening cash | Receipts by source | Disbursements by category | Net | Ending cash | Restricted or
unavailable cash | Available cash

Then:
(1) Assumptions, listed separately from facts, each with its source
(2) Weeks where available cash falls below [$] or below the minimum operating threshold
(3) Covenant or threshold concerns, with the specific requirement cited
(4) Sensitivity to the three largest variables — show the outlook at plus and minus [X]% on each
(5) Decisions required **this week**, with owner and deadline
(6) Data issues: commitments with no date, invoices with no due date, forecast periods that do not
    align

Do not smooth a shortfall by assuming a receipt that no source supports. State the timing risk on
every receipt that is not contractually fixed.
```

## Validation before use

- Confirm payroll dates and amounts against the payroll calendar directly. A missed payroll date in
  a forecast is the error that matters most.
- Restricted cash must be excluded from available cash, not merely noted.
- Controller reviews before this informs any payment-timing decision.

## Example follow-up

`What is the earliest week we have a problem if receipts run 10% below forecast, and what are the three levers?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Controller
