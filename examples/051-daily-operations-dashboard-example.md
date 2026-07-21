# Example — 051 Daily Operations Dashboard

- **Prompt:** [051](../prompts/operations-dashboards/051-daily-operations-dashboard.md)
- **Surface:** Gemini in Sheets
- **Scenario:** Monday morning review of an eight-site regional dashboard.
- **Data:** Synthetic

## What was attached

| Source | What it contained |
|---|---|
| Active dashboard, tab `Daily`, range `A1:N60` | 8 sites × 7 days, one row per site-day. Columns: sales, transactions, labor hours, labor %, service time, open repair tickets, cash variance. |
| `@KPI Definitions` | One row per metric: definition, target, source, refresh timing. |

Two things made this run non-obvious. The `Daily` tab has a merged two-row header, so the range had
to start at the real header row rather than at `A1`. And Site F had submitted no labor data since
Thursday — which is why the first attempt reported it as the best-performing site in the region.

## The prompt as run

```text
Review the active dashboard for week ending 14 March and identify only the five items that need
management attention today. Use the definitions and targets in @KPI Definitions.

Return a table:
Priority | Site/Area | Metric | Actual | Target | What changed | Likely explanation supported by the
data | Owner | Action due today

Rules:
- Five items maximum. If there are fewer than five real exceptions, return fewer.
- Separate business exceptions from data-quality issues into two sections.
- If a metric cannot be trusted — missing, stale, inconsistent, or not comparable — write
  "Data issue — verify before acting" and state the row or tab that needs review. Do not include it
  as a performance exception.
- Do not invent a site-level cause. Where the data supports a range of explanations, give the
  question to ask rather than the answer.
- If there is no material exception, say so plainly and list the three most relevant stable metrics.
```

## The output

```text
BUSINESS EXCEPTIONS

1 | Site C | Labor % | 34.1% | 29.0% | Up 4.2 pts from prior week; hours up 11% while sales flat
    | Hours rose Thu–Sat while transactions did not. The data does not show why.
    | Site manager | Confirm whether the added hours were scheduled or unplanned coverage

2 | Site A | Cash variance | -$310 cumulative | $0 | Four consecutive days with a shortfall, all on
    the same shift | Pattern is consistent across days; cause not established from this data
    | Accounting reviewer | Do not discuss with staff. Route to Controller per prompt 057.

3 | Site D | Service time | 6:42 | 5:00 | Up 1:10 vs prior week, concentrated in the 11:00–13:00
    window | Two open repair tickets on line equipment opened Wednesday
    | Field leadership | Confirm the equipment tickets are the constraint before scheduling changes

4 | Site B | Sales | -8.1% vs prior week | -2.0% | Decline is entirely Saturday
    | Single-day effect. Prior weeks show no trend. Insufficient evidence to conclude a cause.
    | Site manager | Ask what happened Saturday before treating this as a trend

Only four business exceptions met the materiality threshold.

DATA ISSUES

- Site F — Data issue — verify before acting. No labor hours recorded Thu–Sun (rows 41–44, tab
  Daily). Labor % for Site F is therefore not comparable and has been excluded from the ranking
  above. Site F should not be read as high-performing this week.
- Tab Daily has a merged header across rows 1–2. Sales and transactions for row 12 do not tie to
  the weekly total on tab Summary (difference $1,240). Verify before using either figure.
```

## Why this is a good output

- It excluded Site F rather than ranking it first. A missing submission looks exactly like a
  favourable result, and this is the single most common way a dashboard review misleads.
- Item 4 declines to name a cause it cannot support, and gives the question instead.
- Item 2 identifies a pattern and explicitly routes it away from the site rather than toward it.
- Four exceptions, not five. The prompt asked for a maximum, not a quota.

## What the reviewer still had to do

- Confirmed the Site A cash pattern against deposit records and escalated to the Controller. Nothing
  in this output supports a conversation with the shift team, and the output says so.
- Recalculated the Site C labor percentage. The dashboard denominator was net sales; the KPI
  definition specifies gross. The variance was real but smaller — 3.1 points, not 4.2.
- Chased Site F's missing labor submission.

## What went wrong the first time

The first run was given the range `A1:N60` and reported Site F as the region's top performer on
labor, with no data-issue section at all. The merged header meant row 3 was read as data, and the
absent labor rows were read as zero hours rather than as missing.

Two fixes: start the range at the real header row, and add `@KPI Definitions` so the prompt had a
refresh-timing column to check against. The second fix is what produced the data-issues section —
without a definition of when each metric should refresh, the model has no basis to call anything
stale.
