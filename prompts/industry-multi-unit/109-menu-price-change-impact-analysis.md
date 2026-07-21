# 109 — Menu Price Change Impact Analysis

- **Category:** Industry Pack — Multi-Unit
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Operations lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Current Menu and Prices, @Item Costs, @Sales Mix, @Prior Price Change Results, @Competitive Notes
- **Core blocks:** Evidence, Finance

## When to use

Cost pressure means prices are moving, and the question is which items and by how much.

## Prompt

```text
Analyze a proposed price change for [items / category / all] using @Current Menu and Prices, @Item
Costs, @Sales Mix, @Prior Price Change Results, and @Competitive Notes.

Return:
(1) Item table: Item | Current price | Cost | Current margin $ and % | Mix share | Proposed price |
    New margin | Contribution change at current volume
(2) Blended impact: total revenue and total margin effect at current mix, with the arithmetic
(3) **Break-even volume loss** — for each item and in total, the percentage of units that could be
    lost before the increase stops being worth it. This is the number the decision actually turns
    on and it is almost never calculated.
(4) High-mix, low-margin items where a small increase does the most work, and low-mix items where
    an increase is not worth the menu change
(5) Items at or near a psychological price threshold
(6) What @Prior Price Change Results actually showed about volume response — not assumed elasticity
(7) Items where cost has moved but price has not, since the last change
(8) Operational consequences: menu boards, printed material, system updates, staff briefing, third-
    party channel updates and their own timing

Separate calculated effects from assumed behavioural response. Do not assume volume is unaffected.
Where no prior data exists on volume response, say so and present the analysis at several assumed
loss levels rather than picking one.
```

## Validation before use

- Confirm item costs are current. A price decision on stale costs is worse than no decision.
- Break-even volume loss should be sanity-checked by someone who knows the guest base.
- Third-party channel pricing often has separate mechanics and lead times. Confirm before the
  effective date.

## Example follow-up

`Show the blended margin impact if we lose 3%, 5%, and 8% of units, and where each leaves us versus today.`

## Change log

- 2026-07-21 — Created — Operations lead
