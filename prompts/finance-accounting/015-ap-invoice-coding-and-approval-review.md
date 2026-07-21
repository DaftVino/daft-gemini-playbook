# 015 — AP Invoice Coding & Approval Review

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets · Gemini in Docs
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Invoice, @PO or Approval, @Vendor Master, @GL Guide, @Lease or Contract (if relevant), @Prior Invoices
- **Core blocks:** Evidence, Finance

## When to use

An invoice needs coding and you want the treatment and the risk flags before it enters the approval
queue.

## Prompt

```text
Review @Invoice, @PO or Approval, @Vendor Master, @GL Guide, @Lease or Contract, and @Prior
Invoices for [invoice / vendor].

Recommend: entity, site or cost centre, GL account, accounting period, capitalize versus expense,
tax treatment, and the required approval path under the approval matrix.

Return:
(1) A coding table with the basis for each field, citing the GL guide or the contract
(2) Risk flags: possible duplicate (state which prior invoice and why), contract or rate mismatch,
    quantity or unit variance against prior invoices, missing PO, due-date or discount-term risk,
    unusual vendor activity, and any charge not supported by the contract
(3) Missing approvals or missing evidence, listed as blockers

Do not authorize payment or posting. Do not resolve a coding question the GL guide does not answer —
state it as an open item for the Controller.
```

## Validation before use

- Duplicate detection here is a prompt for human checking, not a finding. Confirm against the AP
  system before rejecting any invoice.
- Capitalization recommendations require Controller sign-off — see prompt 021.
- Confirm the entity, because a correctly coded invoice charged to the wrong entity is harder to
  find later than an uncoded one.

## Example follow-up

`Draft the vendor email requesting only the missing support, referencing the invoice and PO numbers.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Controller
