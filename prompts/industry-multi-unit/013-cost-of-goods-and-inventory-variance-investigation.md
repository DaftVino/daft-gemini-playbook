# 013 — Theoretical vs. Actual Food Cost Variance Investigation

- **Category:** Industry Pack — Multi-Unit
- **Surface:** Gemini in Sheets · Gemini in Docs
- **Risk:** Yellow
- **Owner:** Operations lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Theoretical vs Actual Food Cost, @Inventory Counts, @Purchases, @Transfers, @Waste Log, @Sales Mix, @Prior Period
- **Core blocks:** Evidence, Finance, Data quality

## When to use

Food cost missed and the variance needs to be decomposed before anyone is asked to explain it.

## Prompt

```text
Analyze @Theoretical vs Actual Food Cost, @Inventory Counts, @Purchases, @Transfers, @Waste Log,
@Sales Mix, and @Prior Period for [site / period].

Quantify the total variance in dollars and as a percentage of sales, then test each of these
drivers in turn and quantify what each explains:
- Count accuracy — miscounts, missed locations, unit-of-measure errors
- Price — purchase price versus the price in the recipe costing
- Recipe and portioning — actual versus specified
- Yield — trim, cook loss, waste in preparation
- Waste and spoilage recorded
- Transfers in and out, and whether both sides were recorded
- Invoice timing and cut-off relative to the count date
- Sales mix shift, which changes theoretical cost without anything being wrong

Return:
(1) A driver table with the dollar amount each explains and the residual left unexplained
(2) A prioritized investigation plan, highest-value first
(3) The specific questions to ask the site manager and the person who counted
(4) Corrective actions for the next count
(5) Accounting or coding corrections required

Do not attribute variance to theft or to a person. Count and cut-off errors explain most first-pass
variance, and starting anywhere else wastes the investigation.
```

## Validation before use

- Verify the count date against the invoice cut-off before anything else. Timing explains more
  variance than every other driver combined.
- Check unit-of-measure consistency between purchases, recipes, and counts.
- This analysis never supports a conclusion about an individual. Loss investigations go to the
  Controller.

## Example follow-up

`Rank the drivers by dollar impact and tell me which two are worth a full investigation this period.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog; moved to industry pack per ADR 0002 — Operations lead
