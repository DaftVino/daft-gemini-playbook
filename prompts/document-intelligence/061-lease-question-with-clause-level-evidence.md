# 061 — Ask a Lease Question With Clause-Level Evidence

- **Category:** Document Intelligence
- **Surface:** NotebookLM · Gemini app · Gemini in Docs
- **Risk:** Red
- **Owner:** Property lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Lease, @Amendments, @Relevant Correspondence, @Vendor or Property Documents
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

Someone asks a specific question about a lease and the answer needs to be traceable to a clause.

## Prompt

```text
Answer this specific question about [site]: [question]. Use only @Lease, @Amendments, @Relevant
Correspondence, and @Vendor or Property Documents.

Begin your answer with exactly one of: **Answer supported** / **Unclear** / **Not addressed**.

Then provide:
(1) The controlling clause or clauses, quoted, with document name, section, and page
(2) A plain-English explanation of what they mean for this question
(3) Any amendment that modifies the controlling clause — check for this explicitly, since an
    unamended answer to an amended lease is worse than no answer
(4) Facts that could change the result
(5) Records still needed
(6) A factual internal or external draft, if requested

Cite document, section, and page for every material statement. If the documents do not address the
question, say "Not addressed" — do not supply the market-standard answer or reason from what a
lease usually says. This is not legal advice and does not replace lease or counsel review.
```

## Validation before use

- **Open every cited clause and confirm the quotation. Authorized reviewer: Property lead, and
  counsel before any position is communicated externally.** A fabricated or misattributed clause
  citation is the highest-probability serious error in this library.
- Confirm the amendment set is complete before trusting an "Answer supported."
- "Unclear" and "Not addressed" are correct and useful answers. Treat a confident answer to a
  genuinely ambiguous question as a red flag.

## Example follow-up

`Quote the full text of each clause you relied on, with the section number and page, so I can verify it.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Property lead
