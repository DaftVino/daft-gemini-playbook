# 027 — Policy-to-Manager Checklist Converter

- **Category:** Payroll, HR & Compliance
- **Surface:** Gemini in Docs
- **Risk:** Yellow
- **Owner:** HR lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Policy
- **Core blocks:** Evidence

## When to use

A policy exists, managers are accountable for it, and nobody reads eleven pages.

## Prompt

```text
Convert @Policy into a manager-ready checklist. Preserve every required action, deadline, approval,
record, exception, and escalation point in the source. Losing one is a failure, not a
simplification.

Return a table:
When this applies | Manager action | Evidence to retain | Deadline | Escalate to

Then add:
(1) A short section: "What this policy does not authorize a manager to do"
(2) The policy sections each checklist row comes from
(3) Any point where the policy is ambiguous about who acts or by when — listed as an open question
    for HR, not resolved by you

Use the words a manager would use. Do not add a requirement the policy does not contain, and do not
soften one it does.
```

## Validation before use

- Read the source policy against the checklist and confirm nothing was dropped. Compression is the
  failure mode here, and it is invisible in the output.
- HR confirms the "does not authorize" section — it is usually the most useful part and the part
  most likely to be inferred rather than sourced.
- The checklist supplements the policy; it does not replace it. Say so on the published version.

## Example follow-up

`Which rows would a new manager most likely get wrong, and how would I know if they had?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — HR lead
