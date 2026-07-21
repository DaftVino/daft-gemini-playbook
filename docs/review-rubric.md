# Review Rubric

Two different reviews use this document:

- **Prompt review** — is this prompt fit to be published in the library?
- **Output review** — is this particular Gemini output fit to be acted on?

They share the same underlying question: *could a competent reviewer trace every material
conclusion back to a source?*

---

## Part 1 — Reviewing a prompt for the library

Score each dimension 0–2. A prompt publishes at **12 or above with no zeros**. Any zero blocks
publication regardless of total.

| # | Dimension | 0 | 1 | 2 |
|---|---|---|---|---|
| 1 | **Grounding** | No sources named; model must supply facts | Sources named vaguely ("relevant documents") | Every required source named specifically and referenced with `@` in the body |
| 2 | **Insufficiency handling** | Silent on missing evidence | Mentions uncertainty generally | Requires an explicit declaration and a list of what is needed |
| 3 | **Output contract** | "Summarize" / free prose | Structure suggested but not specified | Named columns or numbered sections; bounded length or count |
| 4 | **Actionability** | Produces observations only | Actions without owners or dates | Every action carries Owner, Due Date, and Evidence |
| 5 | **Fact/inference separation** | Blended | Asks for a caveat | Requires distinct buckets for verified facts, assumptions, recommendations |
| 6 | **Safety boundary** | Could cause an action to be taken | Boundary implied | Explicitly forbids the conclusion or action only a human may make |
| 7 | **Risk label fit** | Wrong label, or missing core blocks | Label right, blocks incomplete | Label correct and required core blocks present |
| 8 | **Reusability** | Contains real specifics, or is single-use | Placeholders present but ambiguous | Fully placeholdered, reusable by anyone in the role |
| 9 | **Plain language** | AI vocabulary, abstract nouns | Mixed | Uses the organization's operating words; a new manager could follow it |

Maximum 18.

### Automatic rejections

- Contains real business data of any kind — see [`data-handling-rules.md`](data-handling-rules.md).
- Instructs Gemini to send, delete, archive, pay, post, approve, or change access.
- Names a person rather than a role as owner.
- Duplicates an existing prompt's job without superseding it. Two prompts that do the same thing
  guarantee that one of them is stale.
- Has never been run against a real case by its author.

### The three-case test

Before publishing, run the prompt against three real-but-private cases and record the outcome in
the PR description — the observations, never the data:

1. **A normal case.** Does it produce the intended output shape?
2. **A messy or incomplete case.** Does it correctly refuse to conclude, or does it fill the gap?
   This is the case that decides whether the prompt is safe. Most prompts fail here on the first
   draft.
3. **An exception or high-risk case.** Does it escalate rather than resolve?

Compare each output to what the owning human concluded. A prompt that agrees on the easy case and
diverges on the hard one is worse than no prompt.

---

## Part 2 — Reviewing an output before acting on it

Run this before any Yellow output is used and before any Red output leaves the reviewer's hands.

### Traceability

- [ ] Every material conclusion cites a file, tab and range, email date, page, or clause.
- [ ] At least two citations were **opened and confirmed**, chosen from the conclusions that matter
      most. A citation is a claim about a source, not proof of one.
- [ ] Nothing material is asserted that is not in an attached source.

### Arithmetic

- [ ] Totals, variances, and percentages independently recalculated.
- [ ] Denominators checked — the most common silent error is a correct number over the wrong base.
- [ ] Period and scope match the question asked (right entity, right sites, right dates).
- [ ] Any figure that came from a merged cell, a subtotal row, or an unnamed range is treated as
      unverified until re-derived.

### Completeness

- [ ] Data-quality issues are listed separately from business findings.
- [ ] Missing inputs are named rather than quietly worked around.
- [ ] The output says what it could not determine.

### Safety

- [ ] No conclusion is drawn that requires legal, tax, coverage, or employment judgement.
- [ ] Nothing has been sent, deleted, archived, paid, posted, or granted.
- [ ] For Red items, the named authorized reviewer has approved, and the record of that approval
      lives with the action.

### Actionability

- [ ] Every recommended action has a named owner and a due date, or is explicitly marked TBD.
- [ ] The evidence a reviewer would need is attached to, or linked from, the action.
- [ ] Nothing in the output would embarrass the organization if the recipient forwarded it.

---

## Reviewer's shortcut

If you have thirty seconds, ask two questions:

1. **What is the strongest thing in here that I cannot trace to a source?**
2. **What would have to be true for this to be wrong, and would I notice?**

Almost every bad output fails one of those two.
