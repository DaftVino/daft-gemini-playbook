# 045 — Spreadsheet Formula & Data-Quality Debugger

- **Category:** Technology, Data & Security
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Technology lead
- **Last reviewed:** 2026-07-21
- **Required sources:** The sheet, tab, and range in question; sample rows and the formulas involved
- **Core blocks:** Evidence, Data quality

## When to use

A formula returns the wrong answer, breaks on new rows, or works until someone adds data.

## Prompt

```text
Act as a Google Sheets analyst. Diagnose [problem] in [sheet / tab / range] using these sample rows
and formulas: [paste or reference].

Return:
(1) The root cause, stated specifically — not "there may be an issue with the range"
(2) The corrected formula
(3) How the correction behaves with: blank cells, error values, text where numbers are expected,
    new rows appended below, duplicate keys, and mixed data types. Address each explicitly; this is
    where spreadsheet fixes actually fail.
(4) Test cases: input, expected output, and what it proves
(5) A more scalable alternative if the current approach will not hold as the data grows, with the
    trade-off stated
(6) Any data-quality problem you found that is not the reported problem

Do not modify any data. Show the formula for me to apply. If the sample is not sufficient to
diagnose the cause, say so and state exactly which rows or which additional formula you need.
```

## Validation before use

- Test on a copy first. Always.
- Run the test cases from section 4 before trusting the fix on live data.
- Check the corrected formula against a row you can verify by hand — a formula that is right in
  form and wrong in reference looks identical in the cell.
- Watch for volatile or whole-column references introduced by the correction; they work and then
  slow the sheet to a halt at scale.

## Example follow-up

`Rewrite this to handle 50,000 rows without recalculating the whole column, and explain the trade-off.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Technology lead
