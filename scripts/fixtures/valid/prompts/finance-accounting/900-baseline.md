# 900 — Baseline Fixture

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Source A, @Source B
- **Core blocks:** Evidence, Finance

## When to use

The clean case every other fixture is derived from. It must validate with no errors and no warnings.

## Prompt

```text
Act as a fixture. Using @Source A and @Source B, produce a table with the columns Item, Value,
Source, Owner. Cap the output at five rows. Where a value is not supported by the attached
sources, write "Insufficient evidence to conclude" rather than estimating it.
```

## Validation before use

- Nothing. This file exists to exercise the validator.

## Example follow-up

`Re-run against @Source B only.`

## Change log

- 2026-07-21 — created as a validator fixture — Technology lead
