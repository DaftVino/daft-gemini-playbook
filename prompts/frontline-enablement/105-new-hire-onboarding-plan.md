# 105 — New-Hire 30-Day Onboarding Plan

- **Category:** Frontline Enablement
- **Surface:** Gemini in Docs · Gemini in Sheets
- **Risk:** Yellow
- **Owner:** HR lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Job Description, @Training Requirements, @Required Certifications, @Systems Access Requirements, @Site Schedule
- **Core blocks:** Evidence

## When to use

Someone starts soon, and "shadow whoever is on" is the current plan.

## Prompt

```text
Build a 30-day onboarding plan for [role] at [site] using @Job Description, @Training Requirements,
@Required Certifications, @Systems Access Requirements, and @Site Schedule.

Return a plan organized by day one, week one, week two, and weeks three to four. For each item:
Activity | Owner | Prerequisite | Time required | How completion is confirmed

Cover:
1. Before day one — access and provisioning (see prompt 093), equipment, paperwork, schedule
2. Day one — safety, essential orientation, and one useful thing they can actually do
3. Compliance and certification requirements, with deadlines, marked as blocking or non-blocking
4. Role-specific capability, sequenced so each skill has its prerequisite
5. Who they meet, and why — named by role
6. Check-in points at day 3, day 7, day 14, and day 30, each with the specific questions to ask
7. What "ready to work unsupervised" means for this role, stated as observable criteria

Then:
(8) Items with a hard deadline — certifications, mandatory training — listed separately with the
    consequence of missing each
(9) Anything that requires a specific person, and the fallback if they are unavailable
(10) Prerequisites that are commonly late, particularly systems access

Do not schedule training that depends on access that will not exist yet — this is the most common
onboarding failure, and it wastes the first week.
```

## Validation before use

- Confirm systems access is requested before the start date. Section 10 exists because it usually
  is not.
- Compliance deadlines must be checked against the actual requirement, not the plan's assumption.
- The site manager confirms the schedule is realistic against actual coverage.

## Example follow-up

`What must be complete before day one, and who owns each item?`

## Change log

- 2026-07-21 — Created — HR lead
