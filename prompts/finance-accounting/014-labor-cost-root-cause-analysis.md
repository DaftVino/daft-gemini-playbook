# 014 — Labor Cost Root-Cause Analysis

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Labor Detail, @Timecards, @Schedules, @Sales, @Overtime Report, @Staffing Roster, @Prior Period
- **Core blocks:** Evidence, Finance, Data quality

## When to use

Labor cost missed and "we were busy" is not a sufficient explanation.

## Prompt

```text
Review @Labor Detail, @Timecards, @Schedules, @Sales, @Overtime Report, @Staffing Roster, and
@Prior Period for [site / region / period].

Build a bridge from expected labor cost to actual labor cost, separating these effects and showing
the calculation for each: average rate, hours worked, productivity against sales, overtime premium,
training and onboarding hours, and data-timing differences between the pay period and the sales
period.

Return:
(1) The bridge, with each effect quantified in dollars and the residual unexplained amount stated
    explicitly
(2) Ranked root causes with confidence and the evidence for each
(3) Manager actions completable within seven days, with owner and expected effect
(4) Data issues — unapproved timecards, missing punches, roster mismatches

Do not let the residual disappear into a rounding line. If the unexplained amount exceeds [$],
say so and list what data would close it. Do not draw conclusions about individual employees.
```

## Validation before use

- The bridge must reconcile. If the components do not sum to the total variance, the analysis is
  wrong regardless of how reasonable the narrative sounds — check this first, every time.
- Confirm pay-period and sales-period boundaries align before accepting any productivity figure.
- Route anything touching individual pay, classification, or overtime eligibility to Payroll before
  acting.

## Example follow-up

`Recheck the bridge arithmetic and show the working. Flag any component you cannot tie to a source.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Controller
