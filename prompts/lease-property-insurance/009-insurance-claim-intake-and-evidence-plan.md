# 009 — Insurance Claim Intake & Evidence Plan

- **Category:** Lease, Property & Insurance
- **Surface:** Gemini in Docs · Gemini in Gmail
- **Risk:** Red
- **Owner:** Risk / Insurance lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Policy, @Vendor Diagnosis, @Photos, @Outage or Incident Records, @Maintenance Records, @Loss Details
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

Something has happened that might be a claim, and the evidence is about to start disappearing.

## Prompt

```text
Organize a potential claim for [event / asset / site] using @Policy, @Vendor Diagnosis, @Photos,
@Outage or Incident Records, @Maintenance Records, and @Loss Details.

Return:
(1) A dated fact timeline — what happened, when, from which source
(2) Possible covered-event framings, stated as questions for the carrier, with the policy language
    each would turn on. Do not state that any of them applies.
(3) An evidence-preservation checklist: what must be kept, photographed, or not repaired yet, and
    who is responsible for each
(4) Missing facts, and who can supply them
(5) Decision deadlines — notice periods, proof-of-loss deadlines, repair timing
(6) A factual notice-of-loss draft containing only what the sources establish
(7) The specific points that require broker, carrier, or legal review

Do not state that a loss is covered, excluded, or denied. Do not estimate the claim value unless a
source establishes it. If evidence is insufficient, state "Insufficient evidence to conclude."
```

## Validation before use

- **Authorized reviewer: Risk / Insurance lead, before any notice goes to a carrier.** A notice is
  a communication with coverage consequences.
- Evidence preservation is time-critical and usually the highest-value output here. Act on section
  3 immediately, even before the rest is reviewed.
- Do not repair or dispose of the damaged asset until the carrier has released it.
- Do not characterize cause. Cause determines coverage, and it is the adjuster's finding.

## Example follow-up

`Which items on the preservation checklist are at risk of being lost in the next 48 hours, and who owns each?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Risk / Insurance lead
