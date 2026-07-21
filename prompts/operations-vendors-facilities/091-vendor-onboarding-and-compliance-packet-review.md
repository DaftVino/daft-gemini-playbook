# 091 — Vendor Onboarding & Compliance Packet Review

- **Category:** Operations, Vendors & Facilities
- **Surface:** Gemini in Docs · Gemini in Sheets
- **Risk:** Red
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Vendor Onboarding Packet, @Vendor COI, @W-9 or Tax Form, @Contract, @Onboarding Requirements Checklist
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

Before a new vendor is added to the vendor master and before the first payment is released.

## Prompt

```text
Review @Vendor Onboarding Packet, @Vendor COI, @W-9 or Tax Form, @Contract, and @Onboarding
Requirements Checklist for [vendor].

Return a completeness and consistency table:
Requirement | Document provided | Present | Consistent with other documents | Gap | Blocker for
payment? | Owner

Check specifically:
(1) **Name consistency** — the legal name on the tax form, the contract, the insurance certificate,
    the invoice, and the requested payment instructions must all agree. A mismatch is the most
    common indicator of both administrative error and fraud.
(2) Tax form completeness and classification
(3) Insurance: coverage types and limits against our requirement, additional insured status where
    required, policy period covering the engagement, and named insured matching the contracting
    entity
(4) Licences or certifications required for the service, and their validity dates
(5) Payment instructions and how they were received — see prompt 080
(6) Contract executed by both parties, with the scope matching what was procured
(7) Any subcontracting disclosed

List blockers for payment separately from items that can be resolved after onboarding.

Do not approve the vendor, add them to the vendor master, or clear any payment. Do not conclude that
insurance is adequate — see prompt 007. Where a document is missing or a field cannot be verified
against another document, state "Insufficient evidence to conclude" for that requirement rather
than marking it satisfied.
```

## Validation before use

- **Authorized reviewer: Controller. Payment instructions are verified by voice callback per prompt
  080 regardless of how complete the packet appears.**
- Name mismatches are resolved before onboarding, not after. They become extremely difficult to
  unwind once payments and tax reporting have started.
- Insurance adequacy is confirmed by the Risk lead or broker, not from the certificate.

## Example follow-up

`List only the blockers for payment, with the specific document needed to clear each.`

## Change log

- 2026-07-21 — Created — Controller
