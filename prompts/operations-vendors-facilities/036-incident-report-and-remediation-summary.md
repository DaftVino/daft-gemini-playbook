# 036 — Incident Report & Remediation Summary

- **Category:** Operations, Vendors & Facilities
- **Surface:** Gemini in Docs
- **Risk:** Yellow
- **Owner:** Operations lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Incident Notes, @Tickets, @Emails, @Logs, @Vendor Updates
- **Core blocks:** Evidence

## When to use

An incident is resolved or stabilized, and the record needs to be written while the facts are still
recoverable.

## Prompt

```text
Turn @Incident Notes, @Tickets, @Emails, @Logs, and @Vendor Updates into a controlled incident
summary with these sections, in this order:

1. Executive summary — five sentences maximum
2. Timeline — time, event, source. Mark any time that is approximate.
3. Impact — business, customer, safety, and financial, quantified where evidence exists
4. Facts versus unconfirmed reports — two explicit lists, not a blended narrative
5. Root cause — or "Not yet established," which is the correct answer more often than it is given
6. Immediate actions taken
7. Open issues
8. Remediation plan: Action | Owner | Deadline | Verification
9. Lessons learned, stated as process changes rather than observations

Do not assign fault to a person or a vendor without evidence. Do not state a root cause that the
logs and vendor updates do not establish — a plausible cause recorded as fact prevents the real
investigation.
```

## Validation before use

- Check the facts-versus-unconfirmed split carefully. Merging the two is the failure mode of every
  incident report, and it is what makes the document unusable later.
- Confirm the timeline against system logs where they exist; reconstructed timelines drift.
- If the incident has insurance, safety, or legal dimensions, route to prompts 009 or 028 before
  circulating.

## Example follow-up

`Which remediation actions actually prevent recurrence, and which only detect it faster?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Operations lead
