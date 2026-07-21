# CLAUDE.md

## Project

A governed library of 112 approved Google Gemini prompts for Google Workspace, aimed at
multi-entity, multi-site organizations. Content, not code: every prompt is one Markdown file
under `prompts/`, carrying its own risk label, required sources, owner, and validation steps.

## Key docs

- Repo layout and conventions: `docs/architecture.md`
- Engineering conventions: [engineering-standards/repo-standards.md](engineering-standards/repo-standards.md)
- Prompt-file contract: `docs/prompt-standard.md` — every prompt file must satisfy this
- Risk labels and approval boundaries: `docs/risk-and-approval.md`
- Data handling (what must never appear in this repo): `docs/data-handling-rules.md`
- Decisions: `docs/adr/` — read before restructuring categories, IDs, or the risk model
- Active plans: `docs/designs/`

## Commands

```
verify:   node scripts/validate-prompts.mjs      # structure, IDs, risk labels, links
index:    node scripts/validate-prompts.mjs --write-index   # regenerate prompts/index.md
```

Run verify before every push. `prompts/index.md` is generated — never hand-edit it.

## Workflow rules (non-negotiable)

1. Bugs/tasks live in GitHub Issues. `gh issue view N` before starting; `gh issue comment N` with findings.
2. Non-trivial work (new category, ID renumbering, risk-model change) gets a design doc in
   `docs/designs/YYYY-MM-DD-slug.md` before edits.
3. Never commit to `main`. Branch `type/N-slug`, Conventional Commits, PR with `Fixes #N`, squash-merge.
4. If a change conflicts with an ADR, stop and propose a superseding ADR — don't work around it.
5. Never commit secrets or real business data. See constraint 3 below.

## Repo-specific constraints

1. **Prompt IDs are permanent.** `NN` in a filename is a stable identifier referenced by Gems,
   Studio flows, saved Docs, and training material. Never renumber, never reuse a retired ID.
   Moving a prompt between categories is fine; changing its number is not.
2. **The core library is industry-neutral** (ADR 0002). Vocabulary is *entity, site, location,
   period, owner*. Anything that only makes sense for one industry belongs in
   `prompts/industry-multi-unit/` or a new sibling industry pack — never in a core category.
3. **No real business data, ever.** No company names, entity names, employee names, site
   addresses, account numbers, dollar amounts from real reports, vendor or landlord contacts,
   lease terms, or credentials — in prompts, examples, tests, issues, or commit messages.
   Examples use placeholders in the form `[site]`, `Site A`, `Vendor 1`, `$X`.
4. **Every prompt keeps a human in the loop.** No prompt may instruct Gemini to send, delete,
   archive, pay, post, approve, or change access. Prompts design and draft; people execute.
   A PR that weakens this must supersede ADR 0003.
5. **Risk label drives required content.** Red prompts must name the authorized reviewer and
   carry the legal/people/risk core block. Yellow prompts must carry the evidence core block.
   The validator enforces this.
