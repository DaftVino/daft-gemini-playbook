# 006 — Property Issue Escalation Matrix

- **Category:** Lease, Property & Insurance
- **Surface:** Gemini in Sheets · Gemini in Docs
- **Risk:** Yellow
- **Owner:** Property lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Issue History, @Vendor Reports, @Lease, @Photos
- **Core blocks:** Evidence

## When to use

A site has accumulated several open property issues and you need to know which one is actually
urgent.

## Prompt

```text
Review @Issue History, @Vendor Reports, @Lease, and @Photos for [site / asset]. Classify each open
issue by safety, sanitation, business-interruption, customer, structural, landlord-responsibility,
and insurance risk.

Return a table:
Issue | Status | Risk classification | Responsible party (with clause) | Immediate containment |
Owner | Deadline | Evidence still needed

Order the table by risk, not by age. Then write a three-sentence executive escalation summary
naming the single issue that most needs a decision this week and why.

Where responsibility is unclear from the lease, say so rather than assigning it. Do not classify a
risk level that the vendor reports and photos do not support.
```

## Validation before use

- Safety and sanitation classifications must be confirmed by someone who has seen the site. Photos
  under-represent both.
- Confirm containment steps do not create a responsibility argument — performing landlord work can
  weaken the position under 001.
- Check that no issue with an insurance dimension has been left as a maintenance item.

## Example follow-up

`Which of these become materially more expensive if we defer them one quarter, and by roughly how much?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Property lead
