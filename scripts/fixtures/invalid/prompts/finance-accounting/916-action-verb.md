# 916 — Action Verb

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Source A, @Source B
- **Core blocks:** Evidence

## When to use

A fixture for scripts/test-validator.mjs. Not a library prompt.

## Prompt

```text
Act as a fixture. Using @Source A and @Source B, draft a notice for the property manager with the
columns Item, Value, Source, Owner. Send it once the table is complete, capping the output at five
rows and marking anything unsupported as "Insufficient evidence to conclude".
```

## Validation before use

- Nothing. This file exists to exercise the validator.

## Example follow-up

`Re-run against @Source B only.`

## Change log

- 2026-07-21 — created as a validator fixture — Technology lead
