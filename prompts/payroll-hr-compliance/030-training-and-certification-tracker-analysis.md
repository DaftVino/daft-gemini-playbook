# 030 — Training Completion & Certification Tracker Analysis

- **Category:** Payroll, HR & Compliance
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** HR lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Training Tracker, @Certification Expirations, @Employee Roster, @Site Assignments, @Policy
- **Core blocks:** Evidence, Data quality

## When to use

Monthly compliance check, or when a site is about to be short of a required certification.

## Prompt

```text
Review @Training Tracker, @Certification Expirations, @Employee Roster, @Site Assignments, and
@Policy.

Identify: overdue training, certifications expiring within [N] days, missing enrolments, duplicate
records, employees on the roster with no training record, records with no matching roster entry,
and sites falling below a required coverage level.

Return a tracker prioritized by risk, not by date:
Risk | Site | Employee ID / role | Course or certification | Status | Expiry | Owner | Deadline

Then:
(1) Sites where coverage of a required certification would fall below the minimum, and the date it
    happens
(2) Data issues: roster and tracker mismatches, records with no expiry, duplicates
(3) A manager communication draft listing only what that manager's site must complete

Do not treat a missing tracker record as a missing certification — flag it as a records gap and say
what would confirm it.
```

## Validation before use

- Coverage shortfalls are the output that matters. Confirm those against the roster directly before
  escalating.
- Distinguish records gaps from compliance gaps before any manager is contacted; the two require
  entirely different conversations.
- The manager communication is a draft. It is sent by a person, after review.

## Example follow-up

`Show only the sites that drop below required coverage in the next 60 days, earliest first.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — HR lead
