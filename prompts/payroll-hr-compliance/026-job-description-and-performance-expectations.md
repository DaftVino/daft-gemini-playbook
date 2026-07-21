# 026 — Job Description & Performance Expectations Drafter

- **Category:** Payroll, HR & Compliance
- **Surface:** Gemini in Docs
- **Risk:** Yellow
- **Owner:** HR lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Existing Description, @Org Chart, @Performance Standards, plus the role facts you supply
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

A role is being opened, restructured, or has drifted far enough from its description that the
description is misleading.

## Prompt

```text
Create or update a job description for [role] using @Existing Description, @Org Chart, @Performance
Standards, and these role facts: [facts].

Return:
(1) Job summary — three sentences
(2) Essential duties, each stated as an observable action with a frequency or proportion
(3) Qualifications, split into required and preferred, with a note on why each required item is
    required
(4) Physical and schedule requirements, stated factually
(5) Performance expectations — measurable, with the source of the measure
(6) Interview scorecard criteria, each tied to a specific duty
(7) A list of language that needs HR or employment-law review before publication

Do not import qualifications from the existing description that the role facts do not support.
Flag any requirement that could screen out candidates without being genuinely necessary to the job,
and say why it is flagged.
```

## Validation before use

- HR reviews before publication. Essential-function and physical-requirement language has legal
  consequences.
- Check that every required qualification is genuinely required — inherited requirements that
  nobody can justify are the most common defect in a rewritten description.
- Compensation, classification, and exempt status are not outputs of this prompt.

## Example follow-up

`Rewrite the essential duties so each one is observable and could be assessed in a 90-day review.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — HR lead
