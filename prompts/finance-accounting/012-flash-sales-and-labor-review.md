# 012 — Flash Sales & Labor Review

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Flash Report, @Sales by Time Segment, @Labor Detail, @Schedule, @Site Notes
- **Core blocks:** Evidence, Finance, Data quality

## When to use

The weekly flash is out and field leadership needs the exceptions before the operating call.

## Prompt

```text
Review @Flash Report, @Sales by Time Segment, @Labor Detail, @Schedule, and @Site Notes for
[period]. Identify exceptions in sales, labor dollars, labor percentage, transaction count,
productivity, and forecast accuracy.

Return:
(1) The five strongest positive outliers and the five strongest negative outliers, with the figure
    and the source for each
(2) A table: Site | Issue | Likely driver | Evidence | Required action | Owner
(3) A ten-bullet summary written for field leadership, in plain language
(4) A separate data-quality exception list — missing submissions, sites with no labor detail,
    periods that do not align

Rank by dollar impact, not by percentage. A large percentage swing on a small base is usually noise
and should be excluded unless the dollar impact is material. Do not attribute a driver to a site
without evidence from the notes or the detail.
```

## Validation before use

- Check for missing site submissions before reading any ranking — an absent site looks like a
  favourable variance.
- Confirm the labor period and the sales period cover the same days. Off-by-one week alignment is
  the most common cause of a spurious labor spike.
- Nothing here supports a conversation about an individual's performance.

## Example follow-up

`Which three of these are most likely to be data problems rather than business problems, and how would I confirm?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Controller
