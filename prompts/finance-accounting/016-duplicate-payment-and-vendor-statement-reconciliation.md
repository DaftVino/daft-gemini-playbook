# 016 — Duplicate Payment / Vendor Statement Reconciliation

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Vendor Statement, @AP Detail, @Payment Register, @Bank or ACH Detail, @Credit Memos
- **Core blocks:** Evidence, Finance

## When to use

A vendor statement disagrees with your books, or you suspect an invoice was paid twice.

## Prompt

```text
Reconcile @Vendor Statement, @AP Detail, @Payment Register, @Bank or ACH Detail, and @Credit Memos
for [vendor / period].

Match invoices, credits, payments, and unapplied amounts. Show the reconciliation, not just the
conclusion.

Return:
(1) A table: Item | Vendor balance | Our books | Difference | Likely cause | Evidence | Action
(2) A summary reconciliation: statement balance, plus and minus reconciling items, our balance
(3) Possible duplicate payments — same amount, same or near date, same or similar reference — each
    with the two specific records that make it a candidate
(4) Unapplied credits we are owed
(5) A vendor email requesting only the specific support needed

Classify every difference as timing, missing entry, duplicate, credit not applied, coding, or
unknown. Do not net differences together. Do not conclude a duplicate payment occurred — identify
candidates for verification against the bank record.
```

## Validation before use

- Confirm every duplicate candidate against the bank or ACH detail before contacting the vendor.
  Claiming a duplicate that was not paid twice costs credibility.
- Check the statement period against your AP period — most first-pass differences are cut-off.
- Recovery of a duplicate payment is a Controller action, not an AP clerk action.

## Example follow-up

`Show only the items over $X that are more than 60 days old, with the specific document needed to close each.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Controller
