# 058 — Early-Warning Site Watchlist

- **Category:** Operations Dashboards
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Field leadership
- **Last reviewed:** 2026-07-21
- **Required sources:** @Last 12 Weeks Site Data
- **Core blocks:** Evidence, Data quality

## When to use

Monthly, to find the sites that are heading somewhere bad before any single metric becomes critical.

## Prompt

```text
Using @Last 12 Weeks Site Data, identify sites showing a deteriorating pattern before a single
metric becomes critical.

Evaluate three things together, not separately:
- **Direction** — is the metric moving consistently one way?
- **Persistence** — for how many consecutive periods?
- **Combination** — how many independent signals are moving together? A site declining on sales,
  labor, service, and staffing at once is a different problem from one declining on sales alone.

Signals to consider: sales trend, labor productivity, cost of goods, service measures, customer
feedback, staffing stability and vacancy, cash exceptions, and maintenance or repair frequency.

Return:
Tier (Watch / Intervention / Stable) | Site | Signals moving | Weeks persisting | Evidence |
What would confirm the concern | What would disprove it | Recommended next check | Owner

Do not place a site on the list for a single week's fluctuation unless it is severe. Do not treat a
missing week as a decline. State explicitly which sites you considered and cleared, so the absence
of a site from the list means something.
```

## Validation before use

- Check for data gaps across the 12 weeks first; a site with missing weeks generates false signals
  in both directions.
- The "what would disprove it" column is the useful one. If it is empty or vague, the pattern is
  probably noise.
- Watchlist placement is not a performance judgement about a manager, and should not be shared as
  one.

## Example follow-up

`For each Intervention-tier site, what is the single check that would most quickly confirm or clear it?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Field leadership
