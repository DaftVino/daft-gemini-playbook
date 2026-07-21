# 081 — GL Coding Consistency & Chart-of-Accounts Audit

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @GL Detail, @Chart of Accounts, @GL Coding Guide, @Vendor Master, @Prior Period GL
- **Core blocks:** Evidence, Finance, Data quality

## When to use

Before a budget build, after a coding-guide change, or when the same expense appears in three
accounts.

## Prompt

```text
Review @GL Detail, @Chart of Accounts, @GL Coding Guide, @Vendor Master, and @Prior Period GL for
[entity / period].

Identify:
(1) **Vendors coded to more than one account**, with the split and the amounts. This is the most
    common and most damaging inconsistency, because it makes every trend analysis wrong without
    making anything look broken.
(2) Accounts whose activity is inconsistent with their description or the coding guide
(3) Transactions coded to an account materially different from the same vendor's prior-period
    treatment
(4) Accounts with very low activity that duplicate another account's purpose
(5) Accounts in the chart with no activity in [N] periods
(6) Site or cost-centre coding gaps — transactions with no site where the account requires one
(7) Entity coding that appears inconsistent with the vendor or the nature of the expense

Return: Finding | Account(s) | Vendor or transaction | Amount | Prior treatment | Recommended
treatment | Basis in the coding guide | Owner

Where the coding guide does not address a case, say so and list it as a guide gap rather than
inventing the rule. Do not reclassify anything.
```

## Validation before use

- Reclassification changes prior-period comparability. Controller decides whether to restate,
  correct prospectively, or leave it.
- Confirm apparent inconsistencies are not legitimate — the same vendor can supply two genuinely
  different things.
- Guide gaps are the durable output. Fixing the guide prevents recurrence; recoding does not.

## Example follow-up

`Which coding inconsistencies would materially change a line in the P&L trend, and by how much?`

## Change log

- 2026-07-21 — Created — Controller
