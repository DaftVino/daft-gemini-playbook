# 039 — Site Opening / Remodel Readiness Checklist

- **Category:** Operations, Vendors & Facilities
- **Surface:** Gemini in Docs · Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Operations lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Project Plan, @Lease and Permits, @Vendor Scope, @IT and Systems Plan, @Staffing and Training Plan, @Operations Requirements
- **Core blocks:** Evidence

## When to use

A new site, a remodel, or a reopening has a date, and the plan needs to become a checklist with
owners.

## Prompt

```text
Build a readiness checklist for [site / project / target date] from @Project Plan, @Lease and
Permits, @Vendor Scope, @IT and Systems Plan, @Staffing and Training Plan, and @Operations
Requirements.

Organize by: facilities and construction, permits and compliance, systems and connectivity,
inventory and supply, staffing and training, finance and banking setup, marketing and signage, and
final sign-off.

For every item return: Item | Owner | Predecessor | Deadline | Proof of completion | Risk if late |
Escalation point

Then:
(1) The critical path — the chain of items where any slip moves the opening date
(2) Long-lead items whose deadline has already passed or is within [N] days
(3) Items with an external dependency (permit, utility, landlord, carrier) — these are where dates
    slip and where we have least control, so list them separately with the last date each can be
    started
(4) Anything in the source plans with no owner

Do not invent a deadline. Where the plan does not give one, derive it from the predecessor chain and
mark it derived.
```

## Validation before use

- Externally dependent items need a real lead time confirmed with the external party, not an
  assumed one. Permits and utility connections are where openings actually slip.
- Confirm the critical path with the project owner; a checklist that misidentifies it is worse than
  no checklist.
- Final sign-off items need a named person, not a role, before opening day.

## Example follow-up

`What is the latest date each external dependency can start without moving the opening, and who owns each?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Operations lead
