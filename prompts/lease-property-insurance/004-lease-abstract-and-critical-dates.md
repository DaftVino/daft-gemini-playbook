# 004 — Lease Abstract & Critical-Date Extractor

- **Category:** Lease, Property & Insurance
- **Surface:** Gemini in Docs · NotebookLM
- **Risk:** Yellow
- **Owner:** Property lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Lease, @Amendments, @Guarantees, @Prior Abstract
- **Core blocks:** Evidence

## When to use

A lease enters the portfolio, or an existing abstract has not been checked against the executed
documents.

## Prompt

```text
Act as a lease-administration analyst. Review @Lease, @Amendments, @Guarantees, and @Prior Abstract
for [site]. Create a lease abstract covering: contracting entities, premises and area, term,
options, notice requirements, base rent and escalations, CAM / tax / insurance treatment, repair
and maintenance obligations, insurance requirements, assignment and subletting, default and cure,
audit rights, and any non-standard term.

Return:
(1) A tracker-ready table, one row per abstracted term, with the clause and page for each
(2) A critical-date calendar: date, what triggers it, required action, notice period, action owner
(3) An open-items list — terms you could not determine and what document would resolve them
(4) A list of every point where an amendment changes the original lease

Do not infer a date or an obligation. If a term is absent, say it is absent rather than supplying
the market-standard version.
```

## Validation before use

- Verify every critical date against the executed document. A miscalculated notice window is the
  single most expensive error this prompt can make.
- Confirm the amendment set is complete and in effective-date order before trusting the abstract.
- Check that the contracting entity matches your entity list exactly.
- The abstract is a working tool, not a substitute for the lease. Do not make a decision from the
  abstract alone.

## Example follow-up

`List every date in the next 18 months, earliest first, with the last safe day to act on each.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Property lead
