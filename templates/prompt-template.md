# NNN — Prompt Name

<!--
Copy to prompts/<category>/NNN-short-slug.md and delete this comment.
NNN = next unused ID (check prompts/index.md). IDs are permanent — never renumber or reuse.
Field rules: docs/prompt-standard.md. Risk rules: docs/risk-and-approval.md.
Run `node scripts/validate-prompts.mjs` before opening a PR.
-->

- **Category:** [Display name of the containing folder]
- **Surface:** [Gemini in Sheets · Gemini app — most preferred first, max three]
- **Risk:** [Green | Yellow | Yellow/Red | Red]
- **Owner:** [Role, never a person]
- **Last reviewed:** [YYYY-MM-DD]
- **Required sources:** [@Source 1, @Source 2 — specific enough that a new user knows what to attach]
- **Core blocks:** [None | Evidence | Evidence, Finance | Evidence, Legal/People/Risk | Evidence, Data quality]

## When to use

[One or two sentences describing the trigger, in the user's own words. "A landlord invoice arrives
and the amount does not match what you expected." Not a restatement of the title.]

## Prompt

```text
Act as a [role]. Review @[Source 1], @[Source 2], and @[Source 3] for [scope: site / entity /
period]. [The task, stated as one clear instruction.]

Return: [explicit output contract — a table with named columns, or numbered sections.]
Column A | Column B | Evidence | Owner | Due date

[Bound the response: no more than five exceptions / under 250 words / two pages.]
[Say what to do when evidence is missing: If evidence is insufficient, state "Insufficient evidence
to conclude" and list exactly what is needed.]
[State the boundary: Do not [the conclusion or action only a human may take].]
```

## Validation before use

- [What a human must independently verify — specific to this prompt's failure modes, not generic
  caution. "Re-add the variance column yourself; arithmetic across merged cells is unreliable."]
- [For Red prompts: name the authorized reviewer by role.]
- [Two to five bullets.]

## Example follow-up

`[One realistic refinement prompt the user would send next.]`

## Change log

- [YYYY-MM-DD] — Created — [Owning role]
