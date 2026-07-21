# Gemini Operating Guide

How to run the prompts in this library well. Read this once before using the catalog; it is the
difference between a prompt that works and the same prompt producing confident nonsense.

## The four-part prompt

Google's own guidance and the pattern every prompt here follows:

> **Persona · Task · Context · Format**

The library supplies persona, task, and format. **You supply the context** — the files, the period,
the site, the question. A prompt run without its required sources is not a shortcut; it is a request
for the model to invent the answer, and it will oblige.

## Where to run each prompt

| Need | Best surface | How to ground it |
|---|---|---|
| Compare documents, prepare a memo, extract a contract | Gemini in Docs, or the Gemini app | Type `@` and select each source file from Drive |
| Analyze a report or build a tracker | Gemini in Sheets | Open the working sheet, name the tab and range, attach related files with `@` |
| Draft or refine a message | Gemini in Gmail | Start from the relevant thread; use only facts established in the thread or referenced files |
| Synthesize many files, emails, or PDFs | Gemini app, or NotebookLM | Add only authoritative sources; require citations or source names in the result |
| Build a deck from an existing analysis | Gemini in Slides | Point at the finished Doc or Sheet; never let the deck be the first place a number appears |
| Capture and route decisions from a meeting | Gemini in Meet, then Docs | Take the transcript or notes as the source, then convert to an action table |
| Turn a decision into team follow-through | Docs for the record, Gmail or Chat for the message | Create the source-backed brief first, then draft the communication from it |

To reference material across more than one Workspace app, smart features and personalization must be
enabled for the account. See [`workspace-setup.md`](workspace-setup.md).

## The core blocks

Append these to a prompt according to its **Core blocks** metadata field. They are the reason the
outputs in this library are reviewable.

### Evidence block

Append to any prompt involving financial, contractual, payroll, HR, tax, insurance, compliance, or
security analysis.

```text
Use only the materials provided or referenced. Do not invent facts, dates, contract language,
amounts, stakeholders, prior decisions, or policy requirements. Cite the source file, email,
worksheet or tab, row, clause, or date for every material conclusion. Identify conflicts, missing
information, assumptions, and uncertainty explicitly. If evidence is insufficient, state:
"Insufficient evidence to conclude," then list the exact information needed.
```

### Finance block

Append to anything that produces or relies on a number.

```text
Do not calculate a conclusion from incomplete data. Show calculations, inputs, assumptions, and
reconciliation differences. Separate verified facts, management assumptions, and recommendations.
Flag items requiring accounting-owner review before posting, payment, or reporting.
```

### Legal / people / risk block

Append to every Red prompt.

```text
This is an internal business analysis and drafting aid, not legal, tax, insurance, or
employment-law advice. Flag items that require review by counsel, broker or carrier, CPA, HR,
payroll administrator, or an authorized approver.
```

### Data-quality block

Append to any dashboard, reporting, or reconciliation prompt.

```text
Separate business exceptions from data-quality issues. If a metric is missing, stale, internally
inconsistent, or not comparable across the periods being compared, write "Data issue — verify
before acting," name the affected source, tab, and range, and do not treat it as a performance
result.
```

## Fast refinement prompts

The single highest-value habit to teach: **the first answer is a draft.** Refine it in the same
conversation instead of rewriting the prompt and starting over.

- `Show the three facts most likely to change this conclusion, and the source for each.`
- `Convert this into a one-page executive brief. Preserve all material uncertainty.`
- `Separate data-quality issues from business-performance issues.`
- `Rewrite this for [site manager / Director / vendor / landlord / executive team]. Keep the facts unchanged.`
- `What is missing before this can be approved, paid, posted, or sent externally?`
- `Which of these conclusions rests on an assumption rather than a source? List them.`
- `Re-check every calculation and show your working. Flag any you cannot verify from the source.`
- `Shorten to five bullets. Drop anything that does not change a decision.`
- `Add an Owner and a Due Date column. Mark TBD where the source does not name one.`

## Working habits that separate good output from bad

**Attach before you ask.** The most common failure in this library is a well-written prompt run with
nothing attached. Gemini will produce a fluent, structurally perfect, entirely fictional answer.

**Ask for exceptions, not summaries.** "Give me the five items that need attention today" is acted
on. "Tell me how we did" is read once and forgotten.

**Bound the response.** Every analytical prompt here caps the output — five exceptions, 250 words,
two pages. An unbounded prompt produces a report nobody finishes.

**Name the period, the entity, and the site every time.** Most wrong answers in multi-entity work
are right answers to a different scope.

**Break big work into steps.** Extract, then analyze, then draft. One prompt that does all three
does all three worse.

**Verify anything that will be acted on.** Recalculate the arithmetic, open the cited clause, check
the date. Citation is a claim about a source, not proof of one — models cite confidently and
occasionally wrongly, and a plausible clause reference is the easiest error to miss.

**Never let the model be the last reviewer of its own work.** Asking "are you sure?" produces
agreement, not verification.

## Common failure modes

| Symptom | Cause | Fix |
|---|---|---|
| Confident answer with no citations | Sources not attached, or evidence block omitted | Re-run with `@` references and the evidence block |
| Numbers do not tie to the source | Model read a merged cell, a subtotal, or the wrong tab | Name the exact tab and range; recalculate manually |
| Generic recommendations | Prompt asked for a summary rather than exceptions | Add "return only the N items that need action, with evidence" |
| Invented clause or policy reference | Document too long, or not actually attached | Use NotebookLM for long-document work; require page and section citations |
| Output blends fact and guess | No separation required | Add "separate verified facts, assumptions, and recommendations" |
| Answer changed between runs | Question is genuinely underdetermined by the sources | This is a signal, not a bug — the evidence is insufficient |
| Slow drift over a long chat | Context is crowded | Start a fresh conversation and re-attach only what matters |

## When to stop prompting

Stop and escalate to a person when:

- The sources conflict and no attached document resolves the conflict.
- The answer would create a legal, tax, coverage, or employment position.
- The next step is a payment, a bank-detail change, an access change, or an external message.
- You cannot tell whether the output is right, and you would not notice if it were wrong.

That last one is the important one.
