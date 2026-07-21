# 034 — New Vendor Evaluation Scorecard

- **Category:** Operations, Vendors & Facilities
- **Surface:** Gemini in Docs · Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Operations lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Vendor Proposals, @References, @Contract Terms, @Insurance and Security Information, @Current-State Costs
- **Core blocks:** Evidence, Finance

## When to use

Two or more proposals are in hand and the comparison needs to be defensible rather than intuitive.

## Prompt

```text
Compare @Vendor Proposals, @References, @Contract Terms, @Insurance and Security Information, and
@Current-State Costs for [service].

Score each proposal on: scope coverage against our requirement, total cost over the full term
(not the headline rate), service levels and remedies, implementation effort and risk, insurance
and indemnity, financial stability, data and security posture, termination and exit terms, and
reference quality.

Return:
(1) A weighted comparison table with the weights stated up front and the evidence for each score
(2) A normalized total-cost comparison — restate every proposal on the same basis, including
    implementation, minimums, escalators, overage, and exit costs. Proposals are usually structured
    to be hard to compare, and normalizing them is the most valuable thing here.
(3) Scope gaps — what each proposal does not include that our requirement does
(4) Risks by vendor
(5) Negotiation points, ranked by value
(6) A recommended next step

Do not score a criterion where the proposal is silent — mark it "Not addressed" and list it as a
question. A silent proposal is a gap, not a pass.
```

## Validation before use

- Verify the normalized cost comparison by hand. Different contract structures are exactly where
  this analysis is most useful and most error-prone.
- Insurance and security review requires the actual documentation, not the proposal's claims — see
  prompts 044 and 091.
- References should be called by a person, not summarized from a document.

## Example follow-up

`Restate every proposal as total cost over the full term on identical assumptions, and show what I changed.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Operations lead
