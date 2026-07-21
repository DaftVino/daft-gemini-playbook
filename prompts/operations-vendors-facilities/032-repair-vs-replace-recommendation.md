# 032 — Repair vs. Replace Recommendation

- **Category:** Operations, Vendors & Facilities
- **Surface:** Gemini in Docs
- **Risk:** Yellow
- **Owner:** Facilities lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Vendor Diagnostics, @Quotes, @Maintenance History, @Asset Age, @Downtime Impact, @Budget
- **Core blocks:** Evidence, Finance

## When to use

An asset has failed again and someone has to decide whether to keep spending on it.

## Prompt

```text
Compare four options for [asset] using @Vendor Diagnostics, @Quotes, @Maintenance History, @Asset
Age, @Downtime Impact, and @Budget: repair, replace, temporary mitigation, and defer.

Return:
(1) A recommendation with the three reasons for it
(2) A cost comparison over [N] months: upfront cost, expected further repair cost based on the
    maintenance history, downtime cost, and energy or efficiency difference where evidence exists.
    Show the arithmetic.
(3) The risk of deferral, quantified where the history supports it and described where it does not
(4) Assumptions, listed separately — particularly remaining useful life and whether the diagnosed
    root cause is the actual root cause
(5) Required approvals under the approval matrix
(6) Questions for the vendor that would change the recommendation
(7) A short leadership email

Do not hide uncertainty about useful life or root cause. Where the diagnosis is a symptom rather
than a cause, say so — repeat repairs on a misdiagnosed asset is the most common expensive outcome
here.
```

## Validation before use

- Check whether the maintenance history shows the same failure recurring. If so, treat the current
  diagnosis skeptically regardless of how confident it reads.
- Confirm quotes include installation, disposal, permits, and downtime.
- Check warranty and any service-contract coverage before approving a paid repair.

## Example follow-up

`If we defer 12 months, what is the expected total cost and the probability we are forced into an emergency replacement?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Facilities lead
