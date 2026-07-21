# 024 — PTO, Leave & Attendance Exception Summary

- **Category:** Payroll, HR & Compliance
- **Surface:** Gemini in Sheets · Gemini in Docs
- **Risk:** Yellow/Red
- **Owner:** HR lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Attendance, @PTO or Leave Report, @Policy, @Manager Notes
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

Periodic review of leave and attendance records against policy, before anything is escalated.

## Prompt

```text
Using @Attendance, @PTO or Leave Report, @Policy, and @Manager Notes, produce an exception summary
for [period].

Distinguish clearly between facts established by the attendance and leave records, and statements
reported by a manager that are not independently documented.

Return:
Employee ID / role | Exception type | Policy reference (section) | Dates | Documentation status |
Operational impact | Required next step | Owner

Then list separately:
(1) Exceptions where the record is incomplete or ambiguous
(2) Exceptions that a policy provision may excuse or that may implicate a protected leave category

Do not recommend discipline. Do not reach a conclusion about whether a leave is protected, whether
an accommodation is required, or whether a policy was violated. Do not include medical information,
diagnoses, or the reason for a leave. Route every substantive question to HR.
```

## Validation before use

- **Escalates to Red the moment any individual is identifiable and the subject is protected leave,
  medical, or conduct. Authorized reviewer: HR lead.**
- Verify that no medical detail or leave reason has reached the output — models include it helpfully
  even when told not to. Check before circulating.
- Manager-reported facts are not established facts. Confirm before any action.
- Distribution is HR only, unless HR approves otherwise.

## Example follow-up

`Show only the exceptions where the documentation is incomplete, and what document would close each.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — HR lead
