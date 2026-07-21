# 007 — Certificate of Insurance Compliance Review

- **Category:** Lease, Property & Insurance
- **Surface:** Gemini in Docs · NotebookLM
- **Risk:** Red
- **Owner:** Risk / Insurance lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Lease Insurance Requirements, @COI, @Endorsements, @Policy Summary
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

A certificate arrives at renewal, or a landlord asserts that coverage is non-compliant.

## Prompt

```text
Compare @Lease Insurance Requirements, @COI, @Endorsements, and @Policy Summary for [location].

Return a table:
Requirement | Lease language (clause + page) | Evidence provided | Status | Gap or risk | Owner | Action

Check each of: limits (per occurrence and aggregate), named insured entity, additional insured
status and form, waiver of subrogation, primary and non-contributory wording, notice of
cancellation, covered location and description, and policy period versus lease period.

Do not conclude that coverage exists on the basis of a certificate alone. A certificate is evidence
of issuance, not of terms. For every requirement, state whether the endorsement or policy form has
been reviewed, and where it has not, mark the status "Requires policy form or broker confirmation."

If evidence is insufficient, state "Insufficient evidence to conclude." Finally, draft the exact
question to send to the broker for each unresolved item.
```

## Validation before use

- **Authorized reviewer: Risk / Insurance lead, with broker confirmation.** No compliance statement
  leaves the organization without it.
- The named insured must match the contracting entity on the lease exactly — this is the most common
  real defect and the easiest to skim past.
- Additional insured status requires the endorsement, not the certificate box. Confirm the form
  number.
- Never tell a landlord that coverage is compliant based on this output.

## Example follow-up

`Draft one consolidated email to the broker requesting only the documents needed to close every open item.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Risk / Insurance lead
