# 076 — AR Aging & Collections Action Plan

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @AR Aging, @Customer Invoices, @Payment History, @Credit Terms, @Collection Correspondence
- **Core blocks:** Evidence, Finance

## When to use

The aging report has grown and "we'll chase them" is not a plan.

## Prompt

```text
Review @AR Aging, @Customer Invoices, @Payment History, @Credit Terms, and @Collection
Correspondence for [entity / period].

Return:
(1) An aging summary by bucket, with the concentration: what share of the balance sits with the top
    five accounts, and what share is over 90 days
(2) An action table: Account | Balance | Oldest invoice | Days past terms | Payment pattern |
    Likely reason | Recommended action | Owner | Next contact date
(3) Accounts whose payment pattern has changed — previously reliable, now slow. This is the
    early-warning signal and it is invisible in a bucket total.
(4) Disputed or short-paid items, separated from genuinely late items. These need a resolution, not
    a reminder, and chasing them as late payments wastes the contact.
(5) Balances with no supporting invoice, credits not applied, and unapplied cash
(6) Accounts to escalate, with the criteria met
(7) A draft collection message for each of the top five, appropriate to the relationship and stage

Do not recommend suspending service, referring an account, or writing anything off. Do not assume a
balance is collectible because it is recent.
```

## Validation before use

- Confirm disputed items are genuinely disputed before sending a reminder; chasing a dispute as a
  late payment damages the relationship and delays resolution.
- Verify unapplied cash before contacting anyone — the most embarrassing collection call is to a
  customer who paid.
- Write-offs, service suspension, and referral to a collection agent are Controller decisions.

## Example follow-up

`Which accounts are worth a call this week ranked by balance times probability of a change in outcome?`

## Change log

- 2026-07-21 — Created — Controller
