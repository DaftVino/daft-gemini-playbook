# 020 — Capital Expenditure Business Case

- **Category:** Finance & Accounting
- **Surface:** Gemini in Docs · Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Vendor Quotes, @Repair History, @P&L or Sales Data, @Asset Details, @Budget
- **Core blocks:** Evidence, Finance

## When to use

A capital request needs a defensible recommendation rather than an opinion.

## Prompt

```text
Evaluate [capex proposal] using @Vendor Quotes, @Repair History, @P&L or Sales Data, @Asset
Details, and @Budget.

Return:
(1) A recommendation: Approve / Defer / Reject / Need More Data
(2) Payback period and return calculation, with every input and the arithmetic shown
(3) Sensitivity analysis on the two assumptions the result is most dependent on
(4) The operational or compliance rationale, separate from the financial case — some capital is
    justified by risk, not return, and that argument should be made explicitly rather than smuggled
    into optimistic savings
(5) The cost and risk of deferring one year, quantified where the repair history supports it
(6) Approval requirements under the approval matrix
(7) A one-page decision memo

Separate known costs (quoted) from estimates (derived). Do not include a benefit that no source
supports. If the payback depends on an assumed sales lift, state that plainly and show the result
without it.
```

## Validation before use

- Check whether the quotes are complete — freight, installation, permits, disposal, and downtime
  are routinely outside the quoted price and routinely change the answer.
- Recalculate payback independently.
- Confirm the capitalization treatment with prompt 021 before the request is submitted.

## Example follow-up

`Show the case again with zero assumed revenue benefit. Does the recommendation still hold?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Controller
