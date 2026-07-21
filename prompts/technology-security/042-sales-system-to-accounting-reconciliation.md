# 042 — Sales System to Accounting Reconciliation Exception Review

- **Category:** Technology, Data & Security
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Technology lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Point-of-Sale Sales Detail, @Accounting System Import, @Delivery or Marketplace Settlement, @Payment and Deposit Data, @Exception Logs
- **Core blocks:** Evidence, Finance, Data quality

## When to use

Sales in the operating system do not agree with sales in the accounting system, and close is
waiting.

## Prompt

```text
Reconcile @Point-of-Sale Sales Detail, @Accounting System Import, @Delivery or Marketplace
Settlement, @Payment and Deposit Data, and @Exception Logs for [period / sites].

Return:
Site | Source A | Source B | Difference | Exception type | Likely cause | Evidence | Owner |
Resolution

Classify each difference as: timing (business day versus calendar day, or cut-off), mapping (a
tender type, item, or site mapped incorrectly), export or integration failure, refund or void
handling, tender or settlement difference, tax treatment, or unknown.

Then separate:
(1) Differences that affect reported revenue
(2) Differences that affect cash
(3) Differences that are presentation-only
(4) Sites with no data in one source — which is an integration failure, not a zero

Show the reconciliation total: source A total, sum of explained differences, source B total. If it
does not tie, say so rather than adding a plug. Do not classify a difference as timing without the
specific cut-off that explains it.
```

## Validation before use

- The reconciliation must tie. An unexplained residual is the finding, not an inconvenience.
- Check for sites missing entirely from one source before analyzing differences — a missing site is
  the most common and most easily overlooked cause.
- Anything affecting reported revenue goes to the Controller before close.

## Example follow-up

`Which of these exception types recur every period, and what integration change would eliminate them?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Technology lead
