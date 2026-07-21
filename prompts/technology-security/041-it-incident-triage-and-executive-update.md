# 041 — IT Incident Triage & Executive Update

- **Category:** Technology, Data & Security
- **Surface:** Gemini in Docs · Gemini in Gmail
- **Risk:** Yellow/Red
- **Owner:** Technology lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Severity Matrix, @Tickets, @Monitoring or Logs, @User Reports, @Vendor Updates, @Affected-Site List
- **Core blocks:** Evidence

## When to use

An incident is live or just contained, and leadership needs an accurate picture rather than a
reassuring one.

## Prompt

```text
Review @Tickets, @Monitoring or Logs, @User Reports, @Vendor Updates, and @Affected-Site List for
[incident].

Return:
(1) Severity, assigned **using @Severity Matrix only** — quote the specific criteria met and the
    level they map to. Do not apply a severity scale from general practice; ours defines the
    escalation path, the update cadence, and who gets woken up. If @Severity Matrix is not attached
    or does not cover this incident type, state "Insufficient evidence to conclude" for severity,
    describe the impact in plain terms, and escalate to the Technology lead to set it.
(2) Business impact: sites affected, functions degraded, customer impact, financial exposure —
    quantified where evidence exists, stated as unknown where it does not
(3) Two explicit lists: confirmed facts, and unconfirmed reports
(4) Timeline: detection, escalation, containment, current state. Note the gap between when it
    started and when it was detected — that gap is usually the most important number in the report.
(5) Containment and recovery actions, taken and planned
(6) Communications required, by audience, with owner
(7) Decisions and escalations needed now
(8) Evidence to preserve — logs, images, tickets, vendor correspondence — and the retention window

Then draft a concise executive update under 200 words.

Do not state a root cause until it is verified. "Under investigation" is an acceptable and often
correct answer. Do not report a system as recovered on the basis of a vendor's assertion alone.
```

## Validation before use

- **Escalates to Red if there is any indication of unauthorized access, data exposure, or a
  payment-system impact. Authorized reviewer: Technology lead, and counsel where data is involved.
  Preserve evidence before remediating.**
- Verify affected-site counts against monitoring, not user reports — user reports systematically
  understate scope.
- Confirm @Severity Matrix was attached. A severity assigned from general practice rather than from
  ours will look reasonable and route the incident to the wrong people at the wrong hour.
- Do not send the executive update until the facts/unconfirmed split has been checked by a second
  person.

## Example follow-up

`What would we need to see to declare this fully resolved, and what are we currently assuming?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Technology lead
- 2026-07-21 — Severity now assigned from @Severity Matrix only, not from general practice — Technology lead
