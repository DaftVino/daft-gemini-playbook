# 010 — Utility Bill Anomaly Review

- **Category:** Lease, Property & Insurance
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Facilities lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Utility Bills, @Interval or Usage Data (if available), @Prior Year, @Weather and Operating Hours, @Repair Log
- **Core blocks:** Evidence, Finance, Data quality

## When to use

A utility bill jumps and nobody knows whether it is a rate change, a leak, a failing unit, or a
billing error.

## Prompt

```text
Analyze @Utility Bills, @Interval or Usage Data, @Prior Year, @Weather and Operating Hours, and
@Repair Log for [site / period].

Decompose the change in cost into: consumption, rate, demand charges, service or fixed charges,
taxes and surcharges, and billing-period length. Show the arithmetic for each component.

Return:
(1) A variance table: Component | Prior | Current | Change $ | Change % | Confidence
(2) Likely explanations, ranked by the strength of the evidence for each — not by plausibility
(3) Data issues: estimated reads, changed billing-period length, missing months, unit changes.
    Write "Data issue — verify before acting" against any component these affect.
(4) Questions for the utility or the vendor
(5) Recoverable-credit opportunities — estimated reads, misapplied rate class, duplicate charges
(6) The single next action, with owner

Do not attribute a change to equipment failure or to weather unless the repair log or the weather
and hours data supports it.
```

## Validation before use

- Check the billing-period day count first. A 34-day period against a 28-day period explains most
  "anomalies" and is the most common false alarm.
- Confirm whether the read was actual or estimated before investigating anything operational.
- Where the lease passes utilities through, cross-check against prompt 002 before disputing.

## Example follow-up

`Separate what a site manager can act on this week from what needs a vendor or the utility.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Facilities lead
