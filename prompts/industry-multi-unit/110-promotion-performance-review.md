# 110 — Promotion / Limited-Time Offer Performance Review

- **Category:** Industry Pack — Multi-Unit
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Operations lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Promotion Details and Costs, @Sales by Item and Period, @Sales Mix, @Baseline Period, @Labor and Operational Notes
- **Core blocks:** Evidence, Finance, Data quality

## When to use

A promotion has ended and the honest question is whether it made money.

## Prompt

```text
Evaluate [promotion] using @Promotion Details and Costs, @Sales by Item and Period, @Sales Mix,
@Baseline Period, and @Labor and Operational Notes.

Return:
(1) Headline results: promoted item units, revenue, and margin, versus the baseline
(2) **Incrementality analysis** — separate, as far as the data allows:
    - Genuinely incremental transactions
    - Cannibalization of other items, particularly higher-margin ones
    - Trade-down by guests who would have bought at full price
    Cannibalization is what turns an apparently successful promotion into a loss, and it does not
    appear in the promoted item's numbers at all.
(3) Total margin effect including discount cost, incremental food and labor cost, and marketing
    spend. Show the arithmetic.
(4) Attach-rate effect: did promoted transactions include other items at a different rate?
(5) Site variation — where it worked, where it did not, and any evidence why
(6) Operational impact from the notes: ticket times, complexity, waste, staffing strain
(7) Data limitations preventing a reliable incrementality conclusion, stated plainly
(8) Recommendation: repeat, repeat with changes, or do not repeat — with what would need to change

Do not attribute the entire sales change to the promotion. Account for seasonality, weather, day
mix, and anything else running at the same time, or state that you cannot separate them.
```

## Validation before use

- Confirm the baseline period is genuinely comparable — same day mix, no other promotion, no
  seasonal distortion. A bad baseline invalidates everything downstream.
- Cannibalization is systematically underestimated. Treat any analysis showing none with suspicion.
- Include the operational cost. A promotion that damages service is expensive in ways the margin
  calculation misses entirely.

## Example follow-up

`What would have to be true for this to have been margin-positive, and does the data support it?`

## Change log

- 2026-07-21 — Created — Operations lead
