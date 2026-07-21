# 112 — Recipe Costing & Margin Review

- **Category:** Industry Pack — Multi-Unit
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Operations lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Recipe Specifications, @Current Purchase Prices, @Menu Prices, @Sales Mix, @Prior Costing
- **Core blocks:** Evidence, Finance, Data quality

## When to use

Ingredient costs have moved, or theoretical cost no longer resembles actual and the recipe costing
is the suspect.

## Prompt

```text
Review @Recipe Specifications, @Current Purchase Prices, @Menu Prices, @Sales Mix, and @Prior
Costing.

Return:
(1) Item costing: Item | Recipe cost now | Recipe cost at prior costing | Change $ and % | Menu
    price | Margin $ | Margin % | Mix share | Contribution
(2) **Items whose cost has moved but whose price has not since the last costing**, ranked by mix
    share times margin erosion. This is the list that matters.
(3) Menu engineering quadrants using mix share and margin: high mix / high margin, high mix / low
    margin, low mix / high margin, low mix / low margin — with the action implied by each
(4) Ingredients driving the most total cost change across the menu, since one ingredient usually
    explains most of it and fixing that is a single conversation
(5) Recipes where the specification is incomplete, the yield assumption is missing, or the unit of
    measure is inconsistent with how the ingredient is purchased. **These make the costing wrong in
    ways that look right**, and they are the first thing to check when theoretical and actual
    diverge.
(6) Recipes not updated since the last specification change
(7) Items where waste or yield assumptions materially affect the cost, and how sensitive the cost is
    to them

Show the calculation for the five largest cost changes. Do not use a purchase price whose unit does
not match the recipe unit without converting and stating the conversion.
```

## Validation before use

- Unit-of-measure mismatches between purchasing and recipes are the most common costing error and
  are invisible in the output. Check section 5 first.
- Confirm purchase prices are current and reflect actual delivered cost including freight.
- Yield assumptions should be validated against actual practice, not the specification, before any
  pricing decision rests on them.
- Feed pricing conclusions into prompt 109 rather than acting on them here.

## Example follow-up

`Which single ingredient explains the largest share of total menu cost increase, and which items does it affect?`

## Change log

- 2026-07-21 — Created — Operations lead
