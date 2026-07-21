# 001 — Repair Responsibility Determination

- **Category:** Lease, Property & Insurance
- **Surface:** Gemini in Docs · Gemini app
- **Risk:** Yellow/Red
- **Owner:** Property lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Lease, @Amendments, @Work Orders, @Vendor Diagnostics, @Email History
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

Something has failed at a site and it is not obvious whether the landlord or the tenant pays for it,
and someone is about to authorize work.

## Prompt

```text
Act as a commercial lease analyst. Review @Lease, @Amendments, @Work Orders, @Vendor Diagnostics,
and @Email History for [site]. Determine responsibility for [issue].

Return:
(1) Landlord, Tenant, Shared, or Unclear
(2) Confidence, and what drives it
(3) The exact controlling clauses, cited by section and page
(4) Facts supporting the result and facts limiting it
(5) Immediate containment steps that do not prejudice the responsibility question
(6) Required next action, with owner
(7) A factual draft email or internal instruction

Do not reach a definitive conclusion if an amendment, a missing clause, or an unresolved fact could
change it — return "Unclear" and list exactly what is needed. If evidence is insufficient, state
"Insufficient evidence to conclude."
```

## Validation before use

- Open every cited clause. A plausible-sounding section reference is the easiest error to miss here.
- Confirm the amendment set is complete. A single missing amendment reverses this analysis regularly.
- Do not send anything to the landlord until the Property lead has reviewed it; a repair position
  stated in writing is difficult to walk back.
- If the answer implies withholding rent, offsetting, or self-help, stop — that is counsel's call.

## Example follow-up

`What is the strongest argument the landlord would make against this, and which clause supports it?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Property lead
