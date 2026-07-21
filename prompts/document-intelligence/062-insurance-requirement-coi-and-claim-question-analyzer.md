# 062 — Insurance Requirement, COI & Claim Question Analyzer

- **Category:** Document Intelligence
- **Surface:** NotebookLM · Gemini app · Gemini in Docs
- **Risk:** Red
- **Owner:** Risk / Insurance lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Policy and Endorsements, @Lease or Contract, @COI, @Broker or Carrier Correspondence, @Incident Evidence
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

A specific insurance question needs an answer and the temptation is to guess from the certificate.

## Prompt

```text
Answer this question about [policy / claim / COI requirement]: [question]. Review only @Policy and
Endorsements, @Lease or Contract, @COI, @Broker or Carrier Correspondence, and @Incident Evidence.

Return:
(1) Verified facts, with their source
(2) The relevant policy and contract language, quoted with form number, section, and page
(3) What the evidence does establish, and — separately and explicitly — what it does not
(4) Missing evidence, and who holds it
(5) Decision deadlines: notice periods, proof-of-loss timing, suit limitations, renewal dates
(6) **The exact question to send to the broker, carrier, or counsel** — this is the primary output

Do not state that a loss is covered, excluded, denied, or that a requirement is satisfied, unless
the source expressly and unambiguously establishes it. A certificate is evidence of issuance, not
of terms. An endorsement referenced but not attached is not evidence of anything.

If evidence is insufficient, state "Insufficient evidence to conclude."
```

## Validation before use

- **Authorized reviewer: Risk / Insurance lead. No coverage position is communicated to anyone —
  landlord, vendor, employee, or carrier — without broker or carrier confirmation.**
- Verify that quoted policy language comes from the policy form, not from the certificate or the
  summary.
- Confirm the policy period covers the incident date. It is the first thing to check and the
  easiest to assume.

## Example follow-up

`Draft the single email to the broker containing the question and only the facts they need to answer it.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Risk / Insurance lead
