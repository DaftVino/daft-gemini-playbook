# 060 — Spreadsheet Intake, Parsing & Data Map

- **Category:** Operations Dashboards
- **Surface:** Gemini in Sheets · Gemini app
- **Risk:** Yellow
- **Owner:** Technology lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Source Spreadsheet, or the pasted export
- **Core blocks:** Evidence, Data quality

## When to use

An export or a spreadsheet arrives from somewhere else and you need to know whether it can be
trusted before you build anything on it.

## Prompt

```text
Inspect @Source Spreadsheet, or the pasted export, for [purpose]. **Do not alter it.**

Identify: each tab or file, the header row, the grain of the data (what one row represents — state
this explicitly, it is the most common misunderstanding), date fields and their formats, entity and
site identifiers, amount and unit fields, duplicate rows and duplicate keys, blank and null fields,
embedded totals or subtotal rows, merged cells, and fields needing normalization.

Return:
(1) A source-data map: Tab | Grain | Key fields | Row count | Date range | Issues
(2) A clean target schema: field name, type, required, source field, transformation
(3) Transformation rules, including how to handle each identified issue
(4) Validation checks to run after import — row counts, control totals, referential checks
(5) Records that cannot be safely parsed, and why
(6) The minimum human decisions needed before this can be imported or used — ambiguities only a
    person can resolve

Preserve original source values for auditability: the target schema keeps the raw value alongside
the normalized one. Do not silently drop a row you cannot parse; list it.
```

## Validation before use

- Confirm the grain. Everything downstream depends on it, and a mis-stated grain double-counts
  silently.
- Embedded subtotal rows are the classic import defect — verify they are identified and excluded.
- Run the section 4 validation checks after import, not before. Control totals catch what
  inspection misses.

## Example follow-up

`What would break if the source adds a column, renames a tab, or changes its date format next month?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Technology lead
