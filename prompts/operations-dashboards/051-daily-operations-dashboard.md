# 051 — Daily Operations Dashboard: What Needs Attention Today

- **Category:** Operations Dashboards
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Field leadership
- **Last reviewed:** 2026-07-21
- **Required sources:** The active dashboard (tab and range), @KPI Definitions
- **Core blocks:** Evidence, Data quality

## When to use

Every morning. This is the highest-frequency prompt in the library and the best first thing to
pilot.

## Prompt

```text
Review the active dashboard for [date / period] and identify only the five items that need
management attention today. Use the definitions and targets in [tab / range or @KPI Definitions].

Return a table:
Priority | Status | Site/Area | Metric | Actual | Target | What changed | Likely explanation
supported by the data | Owner | Action due today

Set Status from the thresholds in @KPI Definitions, never from your own judgement of what looks bad:
- **Red** — at or past the escalation threshold, or any safety, compliance, or cash-loss item
- **Amber** — off target but inside the threshold, or on target while deteriorating for two or more
  consecutive periods
- **Green** — on or better than target
- **Grey** — cannot be assessed because the data is missing, stale, or not comparable

Rules:
- Five items maximum. If there are fewer than five real exceptions, return fewer.
- A metric with a data issue is **Grey**, never Red or Green. Colour implies the number is
  trustworthy, and assigning one to an unverified figure is how a data problem gets actioned as a
  performance problem.
- If @KPI Definitions does not set a threshold for a metric, leave Status blank and say so rather
  than inventing a band.
- Separate business exceptions from data-quality issues into two sections.
- If a metric cannot be trusted — missing, stale, inconsistent, or not comparable — write
  "Data issue — verify before acting" and state the row or tab that needs review. Do not include it
  as a performance exception.
- Do not invent a site-level cause. Where the data supports a range of explanations, give the
  question to ask rather than the answer.
- If there is no material exception, say so plainly and list the three most relevant stable metrics.
```

## Validation before use

- Check the dashboard refreshed before running this. A stale dashboard produces a confident,
  perfectly formatted report about yesterday.
- Confirm @KPI Definitions actually carries escalation thresholds. Without them the Status column
  is the model's opinion wearing a traffic light, which is worse than no column at all. If that file
  does not exist yet, build it from
  [`templates/kpi-definitions-template.md`](../../templates/kpi-definitions-template.md).
- Confirm the data-issue section is empty for a reason, not because the prompt did not look.
- Nothing here supports a conversation about an individual's performance.

## Example follow-up

`Rewrite the top three as a plain-language list for the shift meeting, with what "done" looks like for each.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Field leadership
- 2026-07-21 — Added RAG Status band sourced from existing targets; data issues take Grey, never a colour — Field leadership
