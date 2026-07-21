# 054 — Sales, Transactions & Average Value Trend Explainer

- **Category:** Operations Dashboards
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Field leadership
- **Last reviewed:** 2026-07-21
- **Required sources:** @Sales Detail by site, day, and time segment
- **Core blocks:** Evidence, Finance, Data quality

## When to use

Sales moved and nobody can say whether it was traffic, pricing, mix, or hours.

## Prompt

```text
Analyze @Sales Detail by site, day, and time segment for [period].

Decompose the change in sales into: transaction count, average transaction value, product or
service mix, price change, and operating-hours change — but only where the data supports that
separation. Where it does not, say which components you cannot isolate and what data would allow it.

Return:
(1) A trend table with each component quantified and the arithmetic shown
(2) The three largest favourable and three largest unfavourable changes
(3) The specific dates and time segments to investigate, not a general period
(4) The questions a manager should be able to answer about each
(5) Missing data preventing a reliable decomposition

Cite the tab, date, and rows or range for every figure. Do not attribute a change to a cause —
weather, staffing, a competitor, a promotion — unless an attached source establishes it. Naming a
plausible cause without evidence stops the investigation that would have found the real one.
```

## Validation before use

- Confirm the decomposition components sum to the total change. If they do not, the analysis is
  wrong however plausible it reads.
- Check for closed days, partial days, or hour changes in the period before interpreting anything.
- Price changes must be confirmed against an actual price change record, not inferred from average
  value.

## Example follow-up

`Show only the site-day-segment combinations that account for 80% of the unfavourable variance.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Field leadership
