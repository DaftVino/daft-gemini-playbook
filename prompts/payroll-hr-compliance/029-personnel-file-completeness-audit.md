# 029 — Personnel File & Work-Authorization Completeness Audit

- **Category:** Payroll, HR & Compliance
- **Surface:** Gemini in Sheets
- **Risk:** Red
- **Owner:** HR lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Personnel File Index, @Required-Document Checklist
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

Periodic records audit, or preparation ahead of an inspection or acquisition due diligence.

## Prompt

```text
Audit @Personnel File Index against @Required-Document Checklist for [population].

Return a completeness tracker only:
Employee ID | Required record | Present (Y/N) | Date or validity | Gap | Follow-up owner | Due date

Rules for the output:
- Use employee ID only. Do not reproduce names, addresses, dates of birth, government identification
  numbers, document numbers, immigration status, medical information, or the contents of any record.
- Report only whether a required record is present and, where relevant, whether a date has passed.
- Do not evaluate whether a document is valid, sufficient, or acceptable — that is a substantive
  determination for HR and counsel.
- Where the index itself is ambiguous, mark "Index unclear" rather than inferring.

Then summarize: total records required, total gaps, gaps by category, and the ten oldest gaps.
```

## Validation before use

- **Authorized reviewer: HR lead. Substantive work-authorization questions go to counsel — never
  resolve one from this output.**
- Read the output specifically to confirm no personal identifiers appeared. The prompt forbids them
  and the model will sometimes include them regardless, so check rather than assume.
- Access is HR only. Do not store the output in an operational folder or attach it to a ticket.
- A gap in the index is not the same as a missing record. Confirm against the file before acting.

## Example follow-up

`Group the gaps by required record type and show which single missing document class is most common.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — HR lead
