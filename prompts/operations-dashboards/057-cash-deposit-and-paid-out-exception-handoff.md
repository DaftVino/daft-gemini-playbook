# 057 — Cash, Deposit & Paid-Out Exception Handoff

- **Category:** Operations Dashboards
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Cash Summary, @Deposit Log, @Bank Detail, @Safe Count, @Paid-Out Detail
- **Core blocks:** Evidence, Finance, Data quality

## When to use

Weekly cash review, or whenever a deposit does not match what the site recorded.

## Prompt

```text
Review @Cash Summary, @Deposit Log, @Bank Detail, @Safe Count, and @Paid-Out Detail for [site /
date range]. Create an exception handoff for the site manager and the accounting reviewer.

Return:
Date | Expected cash or deposit | Actual | Difference | Age (days) | Supporting record missing |
Required verification | Site owner | Accounting owner | Escalation date

Then separate into:
(1) Timing differences — deposits in transit, weekend and holiday effects
(2) Documentation gaps — a difference that may not be a difference once the record is found
(3) Unexplained differences, ordered by amount and age
(4) Paid-outs without supporting documentation or outside policy
(5) Patterns: the same site, the same day of week, the same shift, or the same amount recurring

Do not propose or post accounting entries. Do not attribute a difference to any individual. Flag
possible loss, duplicate, or timing items for review, and state which they are.
```

## Validation before use

- **Any pattern suggesting loss goes to the Controller directly and immediately — not through the
  site.** Investigation of a cash difference is not a site manager's task.
- Confirm deposits in transit against the bank detail before treating a difference as real; most
  same-week differences are timing.
- This output is a verification list, not a finding about a person. It must not be used in a
  conversation about conduct without HR and the Controller.

## Example follow-up

`Show only unexplained differences over $X or older than 14 days, with the verification step for each.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Controller
