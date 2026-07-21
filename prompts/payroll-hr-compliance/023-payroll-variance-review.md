# 023 — Payroll Variance Review

- **Category:** Payroll, HR & Compliance
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Payroll administrator
- **Last reviewed:** 2026-07-21
- **Required sources:** @Current Payroll Register, @Prior Payroll, @Timekeeping, @Scheduling, @Rate Changes, @Bonus or Commission Detail, @Payroll Calendar
- **Core blocks:** Evidence, Finance, Data quality

## When to use

Before payroll is submitted, in the window where an error can still be corrected cheaply.

## Prompt

```text
Review @Current Payroll Register, @Prior Payroll, @Timekeeping, @Scheduling, @Rate Changes, @Bonus
or Commission Detail, and @Payroll Calendar.

Identify material variance by entity, site, department, and employee category — not by named
individual. Use a threshold of [$] or [%].

Return:
(1) A variance bridge from prior payroll to current payroll: headcount, rate, hours, overtime,
    bonus and commission, benefit and deduction changes, and calendar effects. Show the arithmetic
    and state the unexplained residual explicitly.
(2) Exceptions requiring validation **before submission**: Category | Site | Variance | Likely cause
    | Evidence | Verification step | Owner
(3) Funding impact — total cash required versus the prior period, and the date required
(4) Data issues: unapproved timecards, missing punches, roster mismatches, rate changes with no
    effective date

Do not make or recommend pay changes. Do not identify individual employees except where an
exception cannot be described without it, and then use employee ID rather than name.
```

## Validation before use

- The bridge must reconcile before anything else is trusted.
- Check the pay-period calendar first — a three-pay-period month explains most large variances and
  is the most common false alarm.
- **Any exception affecting an individual's pay goes to the Payroll administrator, not to a
  manager.** Do not circulate this output beyond payroll and finance.

## Example follow-up

`List only the exceptions that must be resolved before submission, with the deadline for each.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Payroll administrator
