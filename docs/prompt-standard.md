# Prompt Standard

The contract every file under `prompts/` must satisfy. Enforced by `scripts/validate-prompts.mjs`.
Start from [`templates/prompt-template.md`](../templates/prompt-template.md).

## File naming

`prompts/<category>/NNN-short-slug.md`

- `NNN` — the permanent zero-padded prompt ID. Must match the ID in the H1.
- `short-slug` — 2–5 lowercase-kebab words. Describes the job, not the department.

Good: `076-ar-aging-and-collections-plan.md` · Bad: `076-finance-prompt-3.md`

## Required structure

```markdown
# NNN — Prompt Name

- **Category:** <folder's display name>
- **Surface:** <where to run it>
- **Risk:** <Green | Yellow | Yellow/Red | Red>
- **Owner:** <role, never a person>
- **Last reviewed:** <YYYY-MM-DD>
- **Required sources:** <@Source 1, @Source 2, …>
- **Core blocks:** <None | Evidence | Evidence, Finance | Evidence, Legal/People/Risk | …>

## When to use
<one or two sentences: the trigger>

## Prompt
```text
<the approved prompt text>
```

## Validation before use
- <what a human must check before acting on the output>

## Example follow-up
`<one refinement prompt>`

## Change log
- <YYYY-MM-DD> — <what changed> — <role>
```

## Field rules

### Category
The display name of the containing folder. If they disagree, the folder wins and the file is wrong.

### Surface
Where the prompt actually works best, from: Gemini app · Gemini in Docs · Gemini in Sheets ·
Gemini in Gmail · Gemini in Slides · Gemini in Meet · Google Chat · NotebookLM · Workspace Studio
design (for prompts whose output is an automation specification).
List at most three, most-preferred first. "Anywhere" is not an answer — if a prompt genuinely runs
anywhere it is probably too vague to be useful.

### Risk
One of `Green`, `Yellow`, `Yellow/Red`, `Red`. Assignment rules and what each label obliges are in
[`risk-and-approval.md`](risk-and-approval.md). When in doubt, label up.

### Owner
A **role** — `Controller`, `Property lead`, `Technology lead`, `Field leadership`. Never a personal
name, never a team alias that resolves to one person. The owner is accountable for the prompt
being current and correct, not for running it.

### Last reviewed
Date of the last substantive human review. Yellow and Red prompts are stale after one quarter;
Green after one year. Editing a typo does not reset this date — reviewing the prompt does.

### Required sources
The exact `@`-referenced material a user must attach for the prompt to work, in the order the
prompt uses them. Be specific enough that a new user knows what to look for:
`@Lease, @Amendments, @CAM Reconciliation` — not `@relevant documents`.

If the prompt works from pasted content rather than an attachment, say so:
`Pasted rows or ranges from the working sheet`.

### Core blocks
Which reusable safety blocks from [`gemini-operating-guide.md`](gemini-operating-guide.md) must be
appended when the prompt is run. `None` is only valid for Green prompts.

| Label | Minimum required blocks |
|---|---|
| Green | None |
| Yellow | Evidence |
| Yellow/Red | Evidence + the block matching the domain |
| Red | Evidence + Legal/People/Risk |

Finance, payroll, and tax prompts additionally carry the Finance block.

## Section rules

### When to use
One or two sentences describing the **trigger**, in the user's language: "A landlord invoice
arrives and the amount doesn't match what you expected." Not a restatement of the title.

### Prompt
A single fenced ```` ```text ```` block. Rules:

- **Copy-pasteable.** The only editing a user does is replacing `[bracketed fields]`.
- **No commentary inside the fence.** Explanation belongs in *When to use* or *Validation*.
- **Names its sources with `@`.** Every source in the metadata appears in the prompt body.
- **States the output format explicitly.** A table with named columns, or numbered sections.
  "Summarize the findings" is not an output format.
- **Says what to do when evidence is missing.** Every Yellow and Red prompt must instruct Gemini
  to declare insufficiency rather than fill the gap — usually the exact string
  `Insufficient evidence to conclude` or `Data issue — verify before acting`.
- **Bounds the response.** Cap the number of findings, words, or pages. Unbounded prompts produce
  narrative nobody reads.
- **Never instructs an action.** No send, delete, archive, pay, post, approve, or grant. Drafting a
  message is allowed; sending it is not.

### Validation before use
Two to five bullets naming what a human must independently verify before the output is acted on.
These are the specific failure modes of *this* prompt, not generic caution. Good: "Re-add the
variance column yourself — Gemini's arithmetic across merged cells is unreliable." Bad: "Check the
output carefully."

### Example follow-up
One refinement prompt in backticks that a user would realistically send next. This is the single
highest-leverage line in the file for people who are new to prompting: it teaches that the first
answer is a draft, not a verdict.

### Change log
Reverse-chronological. One line per substantive change: date, what changed, owning role.

## Prompt-writing conventions

**Persona, task, context, format.** Google's own guidance and the pattern this library follows.
Lead with the role (`Act as a lease-administration analyst`), then the task, then the sources,
then the required output shape.

**Use the organization's vocabulary, not AI vocabulary.** *Site, week ending, period, owner, due
date, evidence.* Not *stakeholder alignment, actionable insights, synergies*.

**Prefer a table to prose.** Tables force the model to produce one row per finding with a source
and an owner, which is what makes an output auditable. Narrative hides missing evidence.

**Separate fact from inference, always.** Every analytical prompt should require three distinct
buckets: verified facts, assumptions, recommendations. A conclusion that blends them cannot be
reviewed.

**Ask for exceptions, not summaries.** "Give me the five items that need attention" beats "tell me
how we did." Summaries are pleasant and useless; exception lists get acted on.

**Bracketed fields are `[lowercase description]`.** `[site]`, `[period]`, `[vendor]`,
`[week ending date]`. Never a real value, not even as an illustration.

## Retiring a prompt

Move the file to `prompts/retired/`, keep the ID, and add to the metadata block:

```markdown
- **Status:** Retired 2026-11-04 — superseded by 084 `payroll-hr-compliance/084-<slug>.md`
```

Never delete. Other material links to the ID, and a dangling reference is worse than a tombstone.
