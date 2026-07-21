# Contributing

Thanks for improving the library. This is a **content** repository — the deliverable is prompts
people can trust in production, so review focuses on evidence discipline and safety, not style.

## Before you start

Read three things:

1. [`docs/prompt-standard.md`](docs/prompt-standard.md) — the required structure of a prompt file.
2. [`docs/risk-and-approval.md`](docs/risk-and-approval.md) — how Green/Yellow/Red is assigned.
3. [`docs/data-handling-rules.md`](docs/data-handling-rules.md) — what must never enter this repo.

## Ground rules

- **No real business data.** No organization names, entity names, employee names, site addresses,
  account or card numbers, credentials, real dollar figures, vendor/landlord contacts, or lease
  terms. Use `[bracketed placeholders]` and generic labels (`Site A`, `Vendor 1`, `$X`).
- **Prompt IDs are permanent.** New prompts take the next unused number. Never renumber or reuse.
- **The core is industry-neutral.** Industry-specific prompts go in an industry pack
  (`prompts/industry-multi-unit/`). See [ADR 0002](docs/adr/0002-industry-neutral-core.md).
- **Keep the human in the loop.** No prompt may direct Gemini to send, delete, archive, pay, post,
  approve, or change access. See [ADR 0003](docs/adr/0003-human-approval-boundary.md).

## Proposing a new prompt

1. Open a **Prompt proposal** issue. Describe the recurring job, who does it today, and what a
   good output looks like. Proposals without a repeat use case are usually declined — a prompt
   nobody runs twice is documentation debt.
2. Copy [`templates/prompt-template.md`](templates/prompt-template.md) into the right category
   folder as `NNN-short-slug.md`.
3. Fill in every metadata field. `Owner` is a role, never a person's name.
4. Test it against three real-but-private cases: a normal one, a messy/incomplete one, and an
   exception/high-risk one. Record what you learned in the PR description — not the data itself.
5. Run `node scripts/validate-prompts.mjs`. It must pass.
6. Open a PR with `Fixes #N`.

## Changing an existing prompt

- Wording, added validation steps, clearer output format → PATCH, note it in the file's change log.
- New required source, changed output contract, changed risk label → MINOR, and re-test.
- Retiring a prompt → move the file to `prompts/retired/`, set `Status: Retired` with a reason and
  a pointer to its replacement. Do not delete it; other material links to its ID.

## Review checklist (what a reviewer will ask)

- [ ] Could a reviewer trace every material conclusion the prompt asks for back to a named source?
- [ ] Does the prompt tell Gemini what to do when evidence is insufficient?
- [ ] Are the required sources specific enough that a new user knows exactly what to attach?
- [ ] Is the risk label right, and does the file carry the core blocks that label requires?
- [ ] Does the output format include Owner, Due Date, and Evidence where an action is produced?
- [ ] Is there anything in the file that would be embarrassing or harmful if published? (It is.)

## Commits and branches

Conventional Commits, GitHub Flow, squash-merge. Prompt content changes use `docs:` unless they
change validation tooling.

```
docs(finance): add 76 ar aging and collections plan
fix(validator): accept Yellow/Red compound risk labels
```
