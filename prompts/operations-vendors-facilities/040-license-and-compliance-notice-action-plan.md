# 040 — License / Compliance Notice Action Plan

- **Category:** Operations, Vendors & Facilities
- **Surface:** Gemini in Docs · Gemini in Gmail
- **Risk:** Yellow/Red
- **Owner:** Compliance owner
- **Last reviewed:** 2026-07-21
- **Required sources:** @Government or Agency Notice, @License or Permit, @Site Information, @Prior Correspondence
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

A notice arrives from an agency and the deadline is probably shorter than it looks.

## Prompt

```text
Review @Government or Agency Notice, @License or Permit, @Site Information, and @Prior
Correspondence for [site / entity].

Extract, quoting the notice for each:
(1) What is required — the specific action, not a paraphrase
(2) The deadline, and whether it runs from issue, receipt, or service
(3) Any fee, and how it must be paid
(4) Any posting, display, or response requirement
(5) The named responsible party and the entity addressed — confirm it is our entity
(6) Supporting documents required
(7) The stated consequence of non-compliance

Return an action tracker: Action | Owner | Due date | Evidence to retain | Escalation date (set
before the deadline, not on it)

Then draft a concise instruction email to the site or department containing only what they must do.

Do not interpret the legal effect of the notice, assess whether it is correctly issued, or advise on
contesting it. Flag those for counsel. If the notice is ambiguous about what is required, say so.
```

## Validation before use

- **Escalates to Red where the notice involves an enforcement action, a penalty, a licence
  suspension, or any response that will be relied on by an agency. Authorized reviewer: counsel.**
- Confirm the deadline basis. "Within 15 days of service" and "within 15 days of the date of this
  notice" are different dates, and the difference is where organizations miss deadlines.
- Confirm the entity named is actually ours before responding at all.
- Retain the original notice with its envelope or transmission record.

## Example follow-up

`Work backwards from the deadline and give me the internal dates, with a buffer, and the owner for each.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Compliance owner
