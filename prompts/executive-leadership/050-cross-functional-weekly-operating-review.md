# 050 — Cross-Functional Weekly Operating Review

- **Category:** Executive Leadership
- **Surface:** Gemini in Docs · Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Executive
- **Last reviewed:** 2026-07-21
- **Required sources:** @Weekly Sales, @Labor, @Cost of Goods, @Cash and AP, @Facilities Log, @HR Exceptions, @IT Incidents, @Strategic Project Tracker
- **Core blocks:** Evidence, Finance, Data quality

## When to use

Preparing the weekly leadership review, where the goal is decisions rather than a status recital.

## Prompt

```text
Act as the executive preparing the weekly operating review. Review @Weekly Sales, @Labor, @Cost of
Goods, @Cash and AP, @Facilities Log, @HR Exceptions, @IT Incidents, and @Strategic Project Tracker
for [week ending].

Return:
(1) Executive snapshot — five to eight bullets
(2) KPI scorecard: Area | KPI | Current | Target | Trend | Commentary
(3) Exceptions: Area | Issue | Impact | Owner | Due date | Decision needed
(4) Top risks, with what would change each
(5) Next seven days — what must happen, and who owns it

Rules:
- Focus on exceptions and decisions. Do not report what is on plan beyond the scorecard line.
- Quantify impact wherever the sources allow it; state "not quantified" where they do not.
- Identify data limitations explicitly, and do not present a metric drawn from an incomplete source
  without saying so.
- Keep the total to two pages of equivalent content.
- Every exception must have an owner and a decision or an action. An exception with neither is
  commentary, and belongs in the scorecard line instead.
```

## Validation before use

- Confirm each function's data is complete for the week before the review. A missing function reads
  as "no issues."
- Verify owners are correct before circulating; misassigned actions do not get done and cost
  credibility.
- Cross-check the cash and AP position against prompt 019 if any decision depends on it.

## Example follow-up

`Reduce this to the three decisions that actually need the leadership team in the room, and put the rest in an appendix.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Executive
