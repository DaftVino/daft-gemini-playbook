# 021 — Fixed Asset Capitalization Review

- **Category:** Finance & Accounting
- **Surface:** Gemini in Sheets · Gemini in Docs
- **Risk:** Yellow
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** @Invoice, @Fixed Asset Policy, @Project Details, @Prior Asset Register, @Lease (if relevant)
- **Core blocks:** Evidence, Finance

## When to use

An expenditure is large enough or ambiguous enough that expense-versus-capitalize is a real
question.

## Prompt

```text
Review @Invoice, @Fixed Asset Policy, @Project Details, @Prior Asset Register, and @Lease.

Assess whether [expenditure] should be expensed, capitalized, split between the two, or held
pending information.

Return:
(1) Recommended treatment, with the specific policy provision it rests on
(2) Where a split is recommended, the components and the basis for the allocation
(3) Useful-life considerations and the comparable assets in the existing register
(4) In-service date and what evidence establishes it
(5) Entity and site assignment
(6) Leasehold-improvement considerations, including whether the useful life is limited by the lease
    term
(7) Documentation gaps
(8) The specific points requiring Controller or CPA review before any entry

Do not create the entry. Where the policy does not clearly cover the item, say so rather than
reasoning from general principle — that is the reviewer's decision.
```

## Validation before use

- Controller confirms treatment before anything is posted. This prompt prepares the analysis; it
  does not decide.
- Check whether a repair-versus-improvement distinction is genuinely supported by the project detail
  or is being inferred from cost alone.
- Leasehold improvements need the lease term including only reasonably certain options — verify
  against prompt 004.

## Example follow-up

`Draft the question for the CPA, including only the facts they need to answer it.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Controller
