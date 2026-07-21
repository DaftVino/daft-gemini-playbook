# 008 — Rent Invoice Validation

- **Category:** Lease, Property & Insurance
- **Surface:** Gemini in Sheets · Gemini in Docs
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Rent Statement, @Lease Abstract, @Lease, @Amendments, @Prior Month Billing
- **Core blocks:** Evidence, Finance

## When to use

A rent statement does not match what you expected, or it is the month an escalation takes effect.

## Prompt

```text
Validate @Rent Statement against @Lease Abstract, @Lease, @Amendments, and @Prior Month Billing for
[location / month].

Check: base rent, scheduled escalation and its effective date, CAM / tax / insurance charges,
credits and abatements, percentage rent, late fees and interest, the billed entity and suite, and
the billing period.

Return:
(1) A recommendation: Approve / Approve with Adjustment / Hold for Support / Dispute
(2) A line-by-line table: Charge | Billed | Expected | Difference | Basis (clause + page) | Status
(3) Total expected versus total billed, with the calculation shown
(4) The specific support required for any item you cannot verify
(5) A draft correction email, if one is warranted

Do not approve a charge whose basis you cannot locate in the lease or an amendment. If evidence is
insufficient, state "Insufficient evidence to conclude" for that line.
```

## Validation before use

- Recalculate the escalation independently. Percentage-based escalations compounding off the wrong
  base year is the most common error and the least visible.
- Confirm the billed entity matches the entity that signed. Landlords bill the wrong affiliate
  routinely, and paying it creates a reconciliation problem later.
- Do not release payment on the basis of this output alone — it feeds the AP approval path, it does
  not replace it.

## Example follow-up

`Show only the lines where the difference exceeds $X, and give me the clause citation for each.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Controller
