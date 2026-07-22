# 901 — Negated Actions Fixture

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Source A
- **Core blocks:** Evidence

## When to use

Proves the negation guard. Every action verb below appears in a forbidding sentence, which is how
the ADR 0003 boundary is actually written into prompts. If the action check could not tell these
apart from instructions, no prompt in the library could state its own safety rule.

## Prompt

```text
Act as a fixture. Using @Source A, draft a notice for the property manager and produce a table
with the columns Item, Value, Source, Owner. Do not send it. Never email it to the vendor.
Do not pay the invoice, do not approve the payment, and do not grant access to the folder.
Do not delete the working copy. Where a value is unsupported, write "Insufficient evidence to
conclude".
```

## Validation before use

- Nothing. This file exists to exercise the validator.

## Example follow-up

`List the sources you used for each row.`

## Change log

- 2026-07-21 — created as a validator fixture — Technology lead
