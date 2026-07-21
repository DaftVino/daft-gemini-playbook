# 038 — Site Visit Notes to Action Plan

- **Category:** Operations, Vendors & Facilities
- **Surface:** Gemini in Docs
- **Risk:** Green
- **Owner:** Field leadership
- **Last reviewed:** 2026-07-21
- **Required sources:** @Site Visit Notes, @Photos, @KPI Report, @Prior Action Plan
- **Core blocks:** Evidence

## When to use

Immediately after a site visit, while the notes still make sense to the person who wrote them.

## Prompt

```text
Convert @Site Visit Notes, @Photos, @KPI Report, and @Prior Action Plan for [site / date] into an
action plan.

Return a table:
Priority | Observation | Required action | Owner | Due date | Evidence of completion | Escalation
trigger

Separate into two sections:
(1) Immediate issues — safety, people, equipment, customer, and financial. These get dates measured
    in days.
(2) Improvement opportunities. These get dates measured in weeks.

Then:
(3) Items from @Prior Action Plan that are still open, with how long they have been open. A visit
    that generates new actions while old ones stay open is producing a list, not a plan.
(4) Observations that need verification before they become actions

Do not invent an owner or a due date. Mark them TBD and list them for assignment. Do not convert an
observation about a person into an action about a person.
```

## Validation before use

- Assign every TBD before the plan is issued. An action with no owner is not an action.
- Safety items go to the Operations lead the same day, regardless of where they sort in the table.
- Confirm prior-plan items are genuinely closed rather than dropped.

## Example follow-up

`Rewrite the immediate section as a plain-language list the site manager can use in tomorrow's shift meeting.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Field leadership
