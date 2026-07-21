# 108 — Health / Safety Inspection Corrective Action Plan

- **Category:** Industry Pack — Multi-Unit
- **Surface:** Gemini in Docs
- **Risk:** Red
- **Owner:** Operations lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Inspection Report, @Prior Inspection Reports, @SOPs, @Training Records, @Maintenance Log
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

An inspection report arrives with violations and the correction window has already started.

## Prompt

```text
Review @Inspection Report, @Prior Inspection Reports, @SOPs, @Training Records, and @Maintenance
Log for [site / inspection date].

Return:
(1) Violations table: Violation as written | Category (critical / non-critical, per the report) |
    Correction deadline | Immediate action | Owner | Verification | Evidence to retain
(2) Anything requiring correction **before the next service period**, listed first and separately
(3) **Repeat violations** — items appearing in any prior inspection, with how many times. Repeats
    carry escalating consequences and indicate a system failure rather than an incident, and they
    are the most important thing in this analysis.
(4) For each violation, the underlying cause: equipment, process, training, staffing, or supervision
    — with the evidence. Correcting the instance without the cause guarantees the repeat.
(5) SOP or training gaps the violations reveal
(6) Any required re-inspection, notification, or posting obligation stated in the report
(7) A verification plan: who confirms each correction, how, and by when
(8) A factual summary for leadership

Do not interpret the regulation, assess whether a violation was correctly cited, or advise on
contesting it. Do not characterize any violation as minor. Do not attribute a violation to a named
individual. Where the report or the supporting records do not establish the cause or the deadline,
state "Insufficient evidence to conclude" and name what is needed.
```

## Validation before use

- **Authorized reviewer: Operations lead. Anything involving a closure order, an embargo, a
  suspected illness, or a contest of the citation goes to counsel immediately.**
- Correction deadlines run from the inspection date. Confirm each one from the report itself.
- Photograph and document every correction as it is completed. Evidence of correction is required
  and is routinely missing at re-inspection.
- Repeat violations are escalated to leadership regardless of severity.

## Example follow-up

`List only the repeat violations, with the underlying cause and why the previous correction did not hold.`

## Change log

- 2026-07-21 — Created — Operations lead
