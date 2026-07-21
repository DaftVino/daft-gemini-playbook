# 055 — Labor Productivity and Schedule Correction Plan

- **Category:** Operations Dashboards
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Field leadership
- **Last reviewed:** 2026-07-21
- **Required sources:** @Sales Forecast, @Scheduled Labor, @Actual Labor, @Time-Segment Sales, @Staffing Notes
- **Core blocks:** Evidence, Data quality

## When to use

Building next week's schedule, using what last week actually showed.

## Prompt

```text
Review @Sales Forecast, @Scheduled Labor, @Actual Labor, @Time-Segment Sales, and @Staffing Notes
for [site / week]. Identify overstaffed and understaffed periods against the existing productivity
targets.

Return:
Day / Time segment | Status | Sales or transactions | Scheduled hours | Actual hours | Target hours
| Variance | Recommendation for the next schedule | Operational risk of the change

Set Status from the existing productivity targets: **Red** where the variance is past the
escalation threshold in either direction, **Amber** where it is off target but inside it, **Green**
where it is on target, **Grey** where the forecast or timecard data for that period is missing or
unapproved. Understaffed periods are flagged with the same severity as overstaffed ones — under
tends to be reported less and costs more.

Then, separately:
(1) Periods where scheduled and actual hours diverge materially — which is a schedule-adherence
    issue, not a scheduling issue, and needs a different conversation
(2) Forecast accuracy: where the forecast was wrong, and by how much. A schedule built on a bad
    forecast is not a scheduling failure.
(3) Timecard issues: missing punches, unapproved edits, shifts with no matching schedule

Recommend only changes the data supports. State the operational risk of every reduction — minimum
staffing, service capability, safety, single-cover periods. A recommendation to cut hours without
naming what it puts at risk is incomplete.
```

## Validation before use

- Check forecast accuracy before acting on any variance. Most apparent overstaffing is a forecast
  miss.
- Confirm no recommendation breaches minimum staffing, break coverage, or safety requirements.
- Understaffed periods matter more than overstaffed ones and are systematically under-reported;
  read those first.

## Example follow-up

`Which recommended reductions carry a service or safety risk, and what would need to be true to make them safe?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Field leadership
- 2026-07-21 — Added RAG Status band sourced from existing targets; data issues take Grey, never a colour — Field leadership
