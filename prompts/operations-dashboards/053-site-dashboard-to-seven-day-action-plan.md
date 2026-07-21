# 053 — Site Dashboard to Seven-Day Action Plan

- **Category:** Operations Dashboards
- **Surface:** Gemini in Sheets · Gemini in Docs
- **Risk:** Yellow
- **Owner:** Field leadership
- **Last reviewed:** 2026-07-21
- **Required sources:** @Site Dashboard, @Prior Action Plan, @Site Notes
- **Core blocks:** Evidence, Data quality

## When to use

After a scorecard review, turning "this site has problems" into something a manager can actually do
this week.

## Prompt

```text
Using @Site Dashboard, @Prior Action Plan, and @Site Notes for [site / week], create a seven-day
action plan.

Focus on the **three** performance gaps with the largest operational or financial impact. Three,
not five, and not everything that is off target — a seven-day plan with ten items is a list nobody
finishes.

Return:
Issue | Evidence | Root-cause question to answer | Specific action | Owner | Due date | Proof of
completion | Expected metric impact

Then:
(1) A plain-language version a site manager can use in the next shift meeting
(2) Open items from @Prior Action Plan, with how long each has been open
(3) Anything you could not turn into a specific action, and what would be needed to

Note that the root-cause question comes before the action: where the cause is not established, the
first action is finding out, not fixing. Do not present an estimated impact as a fact.
```

## Validation before use

- Confirm the three gaps chosen are the ones that matter operationally, not just the largest
  percentages.
- Check that each action is genuinely completable in seven days by the named owner with the
  resources they have.
- Open prior-plan items usually explain the current numbers. Read section 2 before section 1.

## Example follow-up

`For each action, what would tell us by Wednesday that it is not working?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Field leadership
