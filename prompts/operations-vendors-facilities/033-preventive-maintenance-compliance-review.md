# 033 — Preventive Maintenance Compliance Review

- **Category:** Operations, Vendors & Facilities
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Facilities lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @PM Schedule, @Completed Work Orders, @Vendor Invoices, @Asset List, @Compliance Requirements
- **Core blocks:** Evidence, Data quality

## When to use

Periodic PM audit, or after a failure that a completed PM should have prevented.

## Prompt

```text
Review @PM Schedule, @Completed Work Orders, @Vendor Invoices, @Asset List, and @Compliance
Requirements for [period].

Identify: missed PMs, late PMs, PMs marked complete without documentation, duplicated PMs billed
more than once, assets on the asset list with no PM schedule, and assets with recurring failures
despite completed PMs.

Return:
Asset | Site | Requirement (source) | Status | Evidence | Risk | Owner | Due date | Escalation

Then:
(1) Compliance-mandated PMs that are overdue — listed first and separately, since these carry
    consequences beyond equipment risk
(2) Assets where PMs are recorded as complete but failures recur — which usually means the PM is not
    being performed as specified, and is the most valuable finding here
(3) Billed but undocumented PMs
(4) A seven-day recovery plan for the highest-risk items

Do not treat an invoice as evidence that the work was performed. Note where the only evidence is a
vendor invoice.
```

## Validation before use

- Compliance-mandated PMs go to the Facilities lead the same day. Do not batch them into a weekly
  report.
- "Billed but undocumented" is a finding that needs the vendor conversation before any accusation.
- Confirm the asset list is current before treating a missing schedule as a gap.

## Example follow-up

`Show only compliance-mandated items that are overdue, with the consequence of each remaining open.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Facilities lead
