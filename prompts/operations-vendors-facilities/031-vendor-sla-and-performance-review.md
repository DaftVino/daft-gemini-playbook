# 031 — Vendor SLA & Performance Review

- **Category:** Operations, Vendors & Facilities
- **Surface:** Gemini in Docs · Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Operations lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Contract or SLA, @Invoices, @Service Tickets, @Site Feedback, @KPIs, @Email History
- **Core blocks:** Evidence, Finance

## When to use

Before a vendor review meeting, a renewal decision, or a conversation about credits.

## Prompt

```text
Evaluate [vendor] using @Contract or SLA, @Invoices, @Service Tickets, @Site Feedback, @KPIs, and
@Email History for [period].

Return:
(1) A commitment table: Commitment (clause) | Measured performance | Evidence | Met? | Gap
(2) Financial and service impact of each gap, quantified where the data supports it
(3) Root cause, distinguishing vendor performance from our own inputs — late access, incomplete
    tickets, unclear scope. Be honest about this; a review that blames the vendor for our process
    failures does not survive the meeting.
(4) Remedy or credit rights to confirm, cited by clause, stated as "confirm this applies"
(5) A recommendation: continue / corrective action / renegotiate / re-tender / terminate, with the
    evidence for it
(6) A factual performance-review agenda, with the three questions that matter most

Do not assert a service-level breach without the measurement that establishes it and the clause
that defines it.
```

## Validation before use

- Confirm the measurement basis matches the contract's definition. Measuring response time from a
  different start point than the SLA specifies invalidates the whole analysis.
- Credit and remedy rights require confirmation against the executed contract before being raised.
- Termination or non-renewal decisions follow the notice provisions — check prompt 035 first.

## Example follow-up

`Separate the failures caused by the vendor from those caused by our own process, with evidence for each.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Operations lead
