# 919 — Leak Patterns

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Source A, @Source B
- **Core blocks:** Evidence

## When to use

A fixture for scripts/test-validator.mjs. Not a library prompt.

Carries one instance of every sanitization pattern rather than one violation — the single
deliberate exception to this suite's one-rule-per-file convention. All five patterns share the
`E_LEAK` code, so asserting the code alone would let four of the five be deleted without a test
noticing. The suite asserts the set of pattern names instead. Every value below is invented.

## Prompt

```text
Act as a fixture. Using @Source A and @Source B, produce a table with the columns Item, Value,
Source, Owner. Cap the output at five rows. Where a value is not supported by the attached
sources, write "Insufficient evidence to conclude" rather than estimating it.
```

## Validation before use

- Route questions to someone@example.com or 555-018-2900 before acting.
- Cross-check identifier 000-00-0000 and account 123456789 against the register.
- Confirm the $12,345 adjustment before it is used.

## Example follow-up

`Re-run against @Source B only.`

## Change log

- 2026-07-21 — created as a validator fixture — Technology lead
