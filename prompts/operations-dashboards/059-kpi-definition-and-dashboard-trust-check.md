# 059 — KPI Definition and Dashboard Trust Check

- **Category:** Operations Dashboards
- **Surface:** Gemini in Sheets
- **Risk:** Green/Yellow
- **Owner:** Technology lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Dashboard, @Data Dictionary, @Source Exports
- **Core blocks:** Evidence, Data quality

## When to use

Before a dashboard is relied on for a decision, or when two reports disagree and nobody knows which
is right.

## Prompt

```text
Review @Dashboard, @Data Dictionary, and @Source Exports.

For every KPI listed by the user, state: its definition as implemented (from the formula, not from
the label), its source tab or report, its calculation logic including the denominator, its refresh
timing, and its known limitations.

Then identify:
(1) The same KPI defined differently in two places — the most common and most damaging defect,
    because both numbers are "right"
(2) Broken formulas, or formulas whose range does not cover the data
(3) Denominators that changed between periods, making a trend meaningless
(4) Sites or entities missing from a metric
(5) Stale periods — data that has not refreshed
(6) Metrics that should not be compared to each other or across periods, and why

Return: KPI | Definition as implemented | Source | Status | Problem | Owner | Fix before use

Do not change any formula or data. Where the implemented definition differs from the data
dictionary, report both and say which the dashboard is actually using.
```

## Validation before use

- Where the implementation and the documentation disagree, the implementation is what people have
  been acting on. Establish which is correct before changing either.
- Confirm refresh timing against the source directly; a dashboard can display a stale figure without
  any visible indication.
- Fixes are made by the dashboard owner, tested on a copy.

## Example follow-up

`Which of these problems would change a decision someone made in the last month, and how?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Technology lead
