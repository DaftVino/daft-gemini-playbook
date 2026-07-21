# 073 — Form / Site Submission Completeness Checker

- **Category:** Gmail, Drive & Workflows
- **Surface:** Gemini in Sheets · Gemini app
- **Risk:** Green/Yellow
- **Owner:** Process owner
- **Last reviewed:** 2026-07-21
- **Required sources:** @Form Responses or @Site Submission Tracker
- **Core blocks:** Evidence, Data quality

## When to use

A recurring submission is due from multiple sites and chasing it consumes more time than reviewing
it.

## Prompt

```text
Review @Form Responses or @Site Submission Tracker for [process] and [period].

Identify submissions that are: late, missing entirely, incomplete, internally inconsistent, missing
required evidence, or containing a value outside an allowed range.

Return:
Site / submitter | Required item | Issue | Source row | Needed correction | Due date | Escalation
owner

Then:
(1) Sites that have not submitted at all — listed first and separately, because a missing submission
    is invisible in a completeness percentage
(2) Recurring offenders across the last [N] periods, which is a process problem rather than a
    reminder problem
(3) Fields that are frequently wrong across many submitters — usually a form-design problem, not a
    compliance problem

Then produce a concise, respectful reminder for the selected recipients, listing only what each one
specifically needs to fix. Do not send it.
```

## Validation before use

- Confirm the expected-submitter list is current before treating an absence as a failure. A site
  that closed or a manager who left produces false positives that damage credibility.
- Check section 3 before sending reminders. If everyone gets a field wrong, fix the form.
- The reminder is sent by a person.

## Example follow-up

`Draft one short message per site containing only that site's outstanding items.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Process owner
