# 002 — CAM Audit & Reconciliation Deep Dive

- **Category:** Lease, Property & Insurance
- **Surface:** Gemini in Docs · Gemini in Sheets
- **Risk:** Yellow
- **Owner:** Property lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @CAM Reconciliation, @Lease, @Supporting Invoices, @Budget, @Prior Year CAM
- **Core blocks:** Evidence, Finance

## When to use

The annual CAM reconciliation arrives and you have a limited audit window to question it.

## Prompt

```text
Act as a commercial lease auditor. Analyze @CAM Reconciliation, @Lease, @Supporting Invoices,
@Budget, and @Prior Year CAM for [location / year]. Test lease eligibility, calculation accuracy,
pro-rata share, caps, exclusions, gross-up, allocation method, timing, and duplicate recovery.

Return a table:
Line Item | Billed | Lease Treatment | Source (clause / invoice) | Risk | Potential Dispute | Action

Then state: total billed, total questioned, and the specific support required for each questioned
item. Finally, draft a precise information-request letter that asks only for what is missing.

Flag with particular attention: capital expenditures, management and administrative fees,
related-party charges, vacant-space allocation, depreciation or amortization, costs outside the
reconciliation period, and any item whose eligibility depends on a clause you cannot locate.

Show your pro-rata calculation. If evidence is insufficient for a line item, state "Insufficient
evidence to conclude" for that line rather than accepting it.
```

## Validation before use

- Recalculate the pro-rata share and the cap application by hand. This is where the money is and
  where model arithmetic across a wide reconciliation is least reliable.
- Confirm the denominator — total occupied area versus total leasable area changes the answer
  materially and is frequently mis-stated in the reconciliation itself.
- Check the audit-rights clause for the deadline and notice requirements before acting.
- Have the Controller confirm the accrual position before any dispute is raised.

## Example follow-up

`Rank the questioned items by dollar impact divided by effort to substantiate, and tell me which three to pursue.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Property lead
