# 082 — Card Program & Expense Report Exception Review

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets
- **Risk:** Yellow/Red
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Card Transaction Detail, @Expense Reports, @Expense Policy, @Receipt Log, @Cardholder List
- **Core blocks:** Evidence, Finance, Legal/People/Risk

## When to use

Monthly card review, or before an audit of expense controls.

## Prompt

```text
Review @Card Transaction Detail, @Expense Reports, @Expense Policy, @Receipt Log, and @Cardholder
List for [period].

Identify exceptions against the policy:
- Transactions with no receipt above the policy threshold
- Transactions with no business purpose recorded
- Categories restricted or prohibited by policy
- Amounts just below an approval threshold, particularly when repeated
- Split transactions that together exceed a threshold
- Duplicate submissions across a card feed and an expense report
- Transactions on a card belonging to a cardholder no longer on the cardholder list
- Personal-expense indicators, stated as indicators requiring verification
- Approvals by someone who is not the cardholder's approver, or self-approval

Return: Cardholder ID | Date | Amount | Merchant category | Exception type | Policy reference |
Evidence missing | Required verification | Owner

Then summarize by exception type and by frequency per cardholder.

Do not conclude that a transaction was improper. These are exceptions requiring verification, not
findings. Do not include merchant names that reveal sensitive personal information — medical,
legal, or similar. Do not recommend discipline.
```

## Validation before use

- **Escalates to Red where a pattern suggests intentional misuse. Authorized reviewers: Controller
  and HR lead, together, before any individual is contacted.**
- Most exceptions are missing paperwork, not misuse. Verify before any conversation, and frame the
  first conversation as a documentation request.
- Self-approval and terminated-cardholder findings are control failures — fix the control, not just
  the instance.

## Example follow-up

`Group by cardholder and show only those with three or more exceptions of the same type this period.`

## Change log

- 2026-07-21 — Created — Controller
