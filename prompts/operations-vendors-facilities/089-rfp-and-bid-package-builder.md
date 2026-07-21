# 089 — RFP / Bid Package Builder

- **Category:** Operations, Vendors & Facilities
- **Surface:** Gemini in Docs
- **Risk:** Yellow
- **Owner:** Operations lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Current-State Process, @Current Contract, @Spend History, @Service Requirements, @Site List
- **Core blocks:** Evidence, Finance

## When to use

Going to market for a service, where the quality of the answers depends entirely on the quality of
the question.

## Prompt

```text
Using @Current-State Process, @Current Contract, @Spend History, @Service Requirements, and @Site
List, build an RFP package for [service].

Return:
1. Background and scope — what we do today, at what volume, across how many sites
2. Requirements, split into **must-have** and **preferred**, each stated as something a bidder can
   confirm or decline rather than as an aspiration
3. Volume and service-level data bidders need to price accurately. Withholding this produces
   defensive pricing and change orders later; it does not produce a better deal.
4. A pricing response template that forces comparable answers: unit basis, minimums, escalation
   mechanism, overage rates, implementation cost, exit cost, and what is excluded
5. Service-level requirements with the measurement method defined — an SLA without a stated
   measurement method is unenforceable
6. Required documentation: insurance, security, financial standing, references, subcontractor
   disclosure
7. Contractual terms that are non-negotiable, stated up front
8. Evaluation criteria with weights, published to bidders
9. Timeline: questions deadline, response deadline, evaluation, decision, transition
10. The questions we should expect and our prepared answers

Do not include our current pricing, our incumbent's name, or our internal budget. Do not commit to
awarding, or to any timeline we cannot keep.
```

## Validation before use

- Publish the evaluation criteria and weights. Bidders who know how they are scored answer the
  question you actually asked.
- Confirm the volume data is accurate. Understated volume produces a low bid and a dispute.
- Legal reviews the non-negotiable terms before publication.

## Example follow-up

`Rewrite the pricing template so three structurally different proposals would produce directly comparable totals.`

## Change log

- 2026-07-21 — Created — Operations lead
