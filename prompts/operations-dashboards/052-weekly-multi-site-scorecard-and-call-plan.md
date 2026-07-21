# 052 — Weekly Multi-Site Scorecard and Director Call Plan

- **Category:** Operations Dashboards
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Field leadership
- **Last reviewed:** 2026-07-21
- **Required sources:** @Weekly Site Scorecard
- **Core blocks:** Evidence, Data quality

## When to use

Monday morning, deciding which sites get a call this week and what the call is about.

## Prompt

```text
Review @Weekly Site Scorecard for week ending [date]. Rank sites using the established targets for
sales, labor, cost of goods, service, customer feedback, cash, and repair or compliance issues.

Compare each site to **its own recent trend and its peer group**, not only to the company average.
A site that is below average and improving is a different conversation from one that is above
average and deteriorating.

Return:
(1) A status line per site: Site | Status | Metrics driving the status | Trend vs. its own prior
    four weeks. Set Status from the established targets, not from your own sense of what looks bad:
    **Red** at or past the escalation threshold, **Amber** off target but inside it or on target
    while deteriorating for two or more weeks, **Green** on or better than target, **Grey** where
    the submission is missing or incomplete. A Grey site is never ranked — it is a data issue.
(2) The [N] sites that need a Director call, each with the exact evidence — metric, value, target,
    trend, source row
(3) A three-question call plan for each, phrased to find out what is happening rather than to
    confirm a conclusion
(4) A one-week measurable commitment to ask for at each site
(5) A separate list of scorecard data errors and missing submissions

Do not attribute a result to a manager where the data does not support it. A site with a missing
submission is a data issue, not a performance issue — never rank it as if it scored zero.
```

## Validation before use

- Check missing submissions first. Ranking a site that did not report is the most damaging error
  this prompt can make.
- Confirm the peer grouping is sensible — comparing a new site to mature ones produces intervention
  recommendations that are simply wrong.
- The call plan is preparation. Nothing here supports a performance conversation about an
  individual.

## Example follow-up

`Which of these sites is deteriorating rather than simply low, and what distinguishes the two groups?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Field leadership
- 2026-07-21 — Added RAG Status band sourced from existing targets; data issues take Grey, never a colour — Field leadership
