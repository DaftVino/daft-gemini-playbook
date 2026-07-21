# 092 — Project Punch List & Closeout Review

- **Category:** Operations, Vendors & Facilities
- **Surface:** Gemini in Docs · Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Facilities lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Scope of Work, @Contract, @Change Orders, @Punch List, @Inspection Reports, @Invoices, @Warranty Documents
- **Core blocks:** Evidence, Finance

## When to use

A construction, remodel, or installation project is finishing and final payment is about to be
requested.

## Prompt

```text
Review @Scope of Work, @Contract, @Change Orders, @Punch List, @Inspection Reports, @Invoices, and
@Warranty Documents for [project / site].

Return:
(1) Scope completion: Scope item (with source) | Complete | Evidence | Outstanding | Owner
(2) **Scope items in the contract or a change order with no corresponding completion evidence** —
    the highest-value finding at closeout, because unfinished scope becomes invisible the moment
    final payment is released
(3) Open punch-list items by severity, with who owns each and the target date
(4) Change orders: authorized versus performed versus invoiced, with any difference
(5) Financial reconciliation: contract value, change orders, total invoiced, retention held,
    remaining to pay. Show the arithmetic.
(6) Closeout documentation still outstanding: permits and sign-offs, inspection certificates,
    as-built drawings, operating and maintenance manuals, warranties with start dates and terms,
    lien waivers, training records
(7) Warranty summary: item, term, start date, what triggers a claim, who to contact
(8) A pre-final-payment checklist

Do not recommend releasing retention or final payment. Do not accept an invoice as evidence that
work was performed.
```

## Validation before use

- Nothing here substitutes for a physical walkthrough by someone who will use the space.
- Confirm warranty start dates. A warranty running from substantial completion rather than
  acceptance quietly loses months.
- Retention release and final payment are Controller decisions, after the Facilities lead confirms
  completion.
- Lien waivers, where applicable, are obtained before final payment, not after.

## Example follow-up

`List every contract or change-order scope item with no completion evidence, with its value.`

## Change log

- 2026-07-21 — Created — Facilities lead
