# 083 — Debt, Covenant & Financing Compliance Check

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets · Gemini in Docs
- **Risk:** Red
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Loan Agreements, @Debt Schedule, @Financial Statements, @Covenant Calculation History, @Lender Correspondence
- **Core blocks:** Evidence, Finance, Legal/People/Risk

## When to use

Ahead of a covenant certificate, a reporting deadline, or any transaction that might affect
compliance.

## Prompt

```text
Review @Loan Agreements, @Debt Schedule, @Financial Statements, @Covenant Calculation History, and
@Lender Correspondence for [entity / period].

Return:
(1) Each financial covenant: the definition **as written in the agreement**, quoted with section
    and page, the calculation as the agreement defines it, our current result, the required
    threshold, and the headroom. Covenant definitions routinely differ from the ordinary meaning of
    the same term — use the agreement's definition, never the standard one.
(2) The calculation shown in full, with each input and its source
(3) Headroom expressed as how much the driving metric could move before breach
(4) Reporting and certificate obligations: what is due, when, to whom, in what form
(5) Non-financial covenants and affirmative obligations — insurance, notices, restrictions on
    liens, additional indebtedness, distributions, asset disposals
(6) Anything planned or in progress that could affect compliance
(7) Questions for the Controller, CPA, or counsel

Do not certify compliance. Do not conclude that a covenant is met — present the calculation and the
threshold and let the reviewer conclude. If any input is estimated or preliminary, say so and show
the result both ways.
```

## Validation before use

- **Authorized reviewer: Controller, with the CPA for the calculation basis and counsel for any
  potential breach. No covenant certificate is signed on the basis of this output.**
- Verify each covenant definition against the executed agreement personally. This is where the
  analysis fails, and the failure is invisible.
- A potential breach is disclosed and managed with counsel before the reporting date, never after.

## Example follow-up

`Show how much each covenant's driving metric could deteriorate before breach, and what would cause that.`

## Change log

- 2026-07-21 — Created — Controller
