# 111 — Third-Party Delivery Marketplace Reconciliation & Refund Review

- **Category:** Industry Pack — Multi-Unit
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Marketplace Settlement Reports, @Point-of-Sale Order Detail, @Bank Deposits, @Marketplace Agreement, @Refund and Adjustment Detail
- **Core blocks:** Evidence, Finance, Data quality

## When to use

Marketplace deposits do not tie to orders, or refunds and adjustments have grown without anyone
quantifying them.

## Prompt

```text
Reconcile @Marketplace Settlement Reports, @Point-of-Sale Order Detail, @Bank Deposits, and @Refund
and Adjustment Detail against @Marketplace Agreement for [period / sites], by marketplace.

Return:
(1) A reconciliation per marketplace per site: gross orders per the operating system, gross per the
    settlement report, commission, promotional and marketing deductions, refunds and adjustments,
    other fees, net expected, net deposited, and the difference. Show every line.
(2) **Commission and fee rates as charged versus as contracted**, per the agreement, with the
    difference in dollars. Rates drift, promotional fee tiers expire, and nobody checks.
(3) Orders present in one source and not the other, both directions
(4) Refunds and adjustments: volume, dollar value, reason where given, and trend. Separate those we
    could have prevented from those charged without a stated reason.
(5) Adjustments charged with no supporting order detail — these are disputable and usually go
    unchallenged
(6) Dispute candidates ranked by dollar value, with the evidence needed for each and the dispute
    deadline from the agreement
(7) Data issues: settlement periods that do not align with our periods, sites missing entirely,
    duplicate settlements

Show the reconciliation totals. If it does not tie, say so rather than adding a plug. Do not accept
a settlement report as accurate because it is internally consistent.
```

## Validation before use

- Check the fee rates against the executed agreement, not against last month's settlement. This is
  usually where the money is.
- Dispute windows are short and are stated in the agreement. Confirm them before building a case.
- Confirm every site is present in every settlement before analyzing differences.
- Refund trends by site or by reason often indicate an operational problem, not a marketplace one.

## Example follow-up

`Rank the dispute candidates by dollar value against the effort to evidence each, and show the deadline for each.`

## Change log

- 2026-07-21 — Created — Controller
