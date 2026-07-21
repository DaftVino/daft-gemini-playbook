# 011 — Monthly P&L Variance Commentary

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets · Gemini in Docs
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Current P&L, @Budget, @Prior Year P&L, @KPI Dashboard
- **Core blocks:** Evidence, Finance, Data quality

## When to use

Month-end close is done and the variance commentary is due.

## Prompt

```text
Act as a multi-site finance analyst. Review @Current P&L, @Budget, @Prior Year P&L, and @KPI
Dashboard for [entity / region / site]. Apply materiality thresholds of [$] and [%] — report
nothing below both.

Return:
(1) A table: Metric | Actual | Budget | Variance $ | Variance % | Prior Year | Driver | Confidence |
    Follow-up question
(2) An executive narrative of no more than 250 words
(3) Operational validation questions — what to ask the site or function owner to confirm each driver
(4) Accounting corrections to consider: accrual timing, coding, cut-off, allocation

Do not call a variance operational without evidence from the KPI dashboard or an attached source.
Where a variance could be either an accounting timing difference or a business result, say so and
state what would distinguish them. Separate data-quality issues from business results.
```

## Validation before use

- Confirm the P&L scope and period match the budget scope and period. Comparing a 4-week period to
  a calendar month produces variances that are entirely artificial.
- Recalculate the three largest variances by hand before circulating.
- Any driver attributed without a supporting source is a hypothesis. Label it as one.

## Example follow-up

`Which of these variances will recur next month if nothing changes, and which were one-time?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Controller
