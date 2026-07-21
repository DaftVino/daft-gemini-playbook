# 046 — Apps Script / Automation Requirements Builder

- **Category:** Technology, Data & Security
- **Surface:** Gemini in Docs · Gemini app
- **Risk:** Yellow
- **Owner:** Technology lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Current Process, @Sample Inputs, @Desired Output, @Data Dictionary, plus constraints you supply
- **Core blocks:** Evidence

## When to use

Someone wants something automated, and the request is currently a sentence rather than a
specification.

## Prompt

```text
Turn @Current Process, @Sample Inputs, @Desired Output, @Data Dictionary, and these constraints
[constraints] into an automation requirements document.

Return:
1. Current state — what happens today, including the manual judgement steps, which are the ones
   that usually cannot be automated and the ones usually omitted from the request
2. Proposed workflow, step by step
3. Source of truth for each data element
4. Data model — entities, fields, types, keys
5. Triggers and schedule
6. Permissions and the identity the automation runs as
7. Error handling: what happens on failure, who is notified, whether it retries, and what state it
   is left in
8. Audit logging — what is recorded, where, and for how long
9. Edge cases: empty input, duplicate input, partial failure, out-of-order arrival, the source
   changing shape
10. Acceptance criteria, stated as testable conditions
11. Phasing: manual pilot, then validation, then production
12. Open questions

Do not write production code. Identify every step where a human decision is currently made and
state explicitly whether it is being automated, kept manual, or being made by a rule — and what the
rule is.
```

## Validation before use

- The manual judgement steps in section 1 are the crux. If they are missing, the requirements are
  incomplete and the automation will fail in production rather than in testing.
- Confirm the run-as identity and its permissions with the Technology lead — automations that run
  as an individual break when that person leaves.
- Requirements need sign-off before any code is written.

## Example follow-up

`What is the smallest version of this that delivers value, and what does it deliberately not do?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Technology lead
