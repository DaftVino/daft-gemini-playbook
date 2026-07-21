# 037 — Customer Complaint Theme Analysis

- **Category:** Operations, Vendors & Facilities
- **Surface:** Gemini in Sheets · Gemini in Docs
- **Risk:** Green/Yellow
- **Owner:** Operations lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Customer Feedback, @Refund or Chargeback Data, @Survey Results, @Site Notes
- **Core blocks:** Evidence, Data quality

## When to use

Complaint volume is up, or the same issue keeps appearing and nobody has quantified it.

## Prompt

```text
Analyze @Customer Feedback, @Refund or Chargeback Data, @Survey Results, and @Site Notes for
[period].

Return:
(1) A theme table: Theme | Volume | % of total | Trend vs prior period | Example (paraphrased, not
    quoted with identifying detail) | Severity
(2) High-severity individual cases requiring a response, listed separately from themes
(3) Where the evidence supports it, the connection between a theme and a specific site, time
    segment, product, or process — with the evidence stated. Where it does not, say the theme is
    not localized rather than guessing.
(4) Testable countermeasures: Countermeasure | Theme addressed | How we would know it worked |
    Owner
(5) Data issues: channels with no data, periods with partial collection, categories that overlap

Do not infer a cause from a correlation with a single site or week. Do not include customer names
or contact details in the output.
```

## Validation before use

- Check collection coverage before comparing periods — a new feedback channel looks exactly like a
  deterioration.
- Severity assessment on individual cases should be confirmed by a person; models under-weight
  safety and legal language in customer complaints.
- Confirm no customer-identifying detail reached the output.

## Example follow-up

`Which single countermeasure would address the largest share of complaint volume, and what would it cost?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Operations lead
