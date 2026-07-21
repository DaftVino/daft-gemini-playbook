# 056 — Food Cost, Waste & Transfer Exception Board

- **Category:** Industry Pack — Multi-Unit
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Field leadership
- **Last reviewed:** 2026-07-21
- **Required sources:** @Food Cost Dashboard, @Inventory, @Waste Log, @Transfers, @Purchases
- **Core blocks:** Evidence, Data quality

## When to use

Weekly, to give a site manager the two or three things worth chasing rather than a full variance
report.

## Prompt

```text
Review @Food Cost Dashboard, @Inventory, @Waste Log, @Transfers, and @Purchases for [site /
period]. Identify the highest-value exceptions requiring follow-up.

Return **no more than five** exceptions:
Item / category | Dollar impact | Evidence | Most likely class of issue | First verification step |
Owner | Due date

The class of issue must be one of: count, price, transfer, waste, yield, invoice, cut-off, or
unknown. **Keep unknowns as unknowns** — a guessed classification sends the manager to the wrong
place and the real cause survives another period.

Then, separately:
(1) Transfers recorded on one side only
(2) Items where waste is recorded but the volume is implausible relative to purchases
(3) Data issues: missing counts, counts outside the expected window, items with no purchase history

Rank by dollar impact, not by percentage. Do not attribute any variance to a person.
```

## Validation before use

- Confirm the count was taken in the normal window. An early or late count generates exceptions in
  every category simultaneously.
- One-sided transfers are usually a recording problem at the receiving site, not a loss. Check both
  sites before escalating.
- Five items. If the output has more, the prompt was not followed and the manager will action none
  of them.

## Example follow-up

`For the top two exceptions, what is the single check the manager can do in ten minutes to confirm the cause?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog; moved to industry pack per ADR 0002 — Field leadership
