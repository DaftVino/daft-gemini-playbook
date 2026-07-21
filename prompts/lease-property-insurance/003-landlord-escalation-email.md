# 003 — Landlord / Property Manager Escalation Email

- **Category:** Lease, Property & Insurance
- **Surface:** Gemini in Gmail · Gemini in Docs
- **Risk:** Yellow
- **Owner:** Property lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Diagnostics, @Work Order History, @Lease Clause, plus the facts you supply
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

An unresolved property issue needs to move, and the friendly follow-up has stopped working.

## Prompt

```text
Draft a concise, firm, collaborative email to [landlord / property manager] about [issue] at
[site]. Use only @Diagnostics, @Work Order History, @Lease Clause, and these facts: [facts].

The email must:
- State the operational impact in specific, factual terms
- Set out the history as dates and events, not characterization
- Request a named owner and a decision timeline
- Preserve our rights without stating a legal conclusion
- Request written authorization before any tenant-side work, where that applies

Return a subject line, the email body under 200 words, and a list of internal follow-up dates with
owners.

Do not assert breach, default, offset, or liability. Do not include any fact not supported by the
attached sources.
```

## Validation before use

- Every date and event in the draft must be traceable to a work order or an email. Reconstructed
  timelines are the usual failure mode here.
- Property lead reviews before sending. This is external correspondence about a contractual dispute.
- If the draft implies a remedy — offset, self-help, termination — remove it and route to counsel.

## Example follow-up

`Rewrite this so the tone assumes good faith and cooperation, keeping every fact and every request unchanged.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Property lead
