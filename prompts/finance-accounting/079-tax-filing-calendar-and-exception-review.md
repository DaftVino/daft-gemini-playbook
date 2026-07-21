# 079 — Tax Filing Calendar & Exception Review

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets · Gemini in Docs
- **Risk:** Yellow/Red
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Tax Calendar, @Filing History, @Entity and Jurisdiction List, @Registration Records, @Notices Received
- **Core blocks:** Evidence, Finance, Legal/People/Risk

## When to use

Quarterly, and whenever an entity opens, closes, or starts operating somewhere new.

## Prompt

```text
Review @Tax Calendar, @Filing History, @Entity and Jurisdiction List, @Registration Records, and
@Notices Received.

Return:
(1) A forward calendar for the next [N] months: Entity | Jurisdiction | Filing type | Period |
    Due date | Preparer | Reviewer | Status | Internal deadline (before the due date)
(2) Filings due within [N] days with no preparer assigned
(3) **Entity and jurisdiction combinations that appear in the entity list but not in the filing
    history** — a possible unregistered or unfiled obligation, which is the highest-consequence gap
    this review can find
(4) Registrations with no recent filing, which may indicate either a dormant registration that
    should be closed or a missed filing
(5) Open notices from @Notices Received and their status
(6) Filings historically late, with the pattern
(7) Questions for the CPA, phrased precisely

Do not determine whether a filing obligation exists, whether nexus has been established, or how a
transaction should be treated. Those are CPA and counsel determinations. Report the gap and frame
the question.
```

## Validation before use

- **Authorized reviewer: Controller, with the CPA. Any potential unfiled obligation or nexus
  question goes to the CPA before any action, including a voluntary filing.**
- Confirm the entity and jurisdiction list is current — a new location creates obligations before
  anyone updates a calendar.
- Do not respond to a notice from this output; use prompt 040 and route to the CPA.

## Example follow-up

`List only the entity-jurisdiction combinations with no filing history, with the question to ask the CPA about each.`

## Change log

- 2026-07-21 — Created — Controller
