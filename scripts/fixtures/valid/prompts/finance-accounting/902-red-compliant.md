# 902 — Red Compliant Fixture

- **Category:** Finance & Accounting
- **Surface:** Gemini in Docs
- **Risk:** Red
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Source A, @Source B
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

Proves a correctly formed Red prompt passes: both required core blocks present, and an
insufficiency instruction in the prompt body itself rather than only in the appended block.

## Prompt

```text
Act as a fixture. Using @Source A and @Source B, list the questions an authorized reviewer must
answer before this can proceed, with the columns Question, Source, Owner, Due Date. Cap the output
at five rows. Where the sources do not settle a question, write "Insufficient evidence to conclude"
and state which document would settle it.
```

## Validation before use

- Nothing. This file exists to exercise the validator.

## Example follow-up

`Which of these questions is blocking the others?`

## Change log

- 2026-07-21 — created as a validator fixture — Technology lead
