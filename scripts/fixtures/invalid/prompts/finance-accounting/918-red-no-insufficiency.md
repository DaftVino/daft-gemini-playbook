# 918 — Red Without Insufficiency

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets
- **Risk:** Red
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Source A, @Source B
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

A fixture for scripts/test-validator.mjs. Not a library prompt.

## Prompt

```text
Act as a fixture. Using @Source A and @Source B, produce a table with the columns Item, Value,
Source, Owner. Cap the output at five rows and order them by Value, highest first.
```

## Validation before use

- Nothing. This file exists to exercise the validator.

## Example follow-up

`Re-run against @Source B only.`

## Change log

- 2026-07-21 — created as a validator fixture — Technology lead
