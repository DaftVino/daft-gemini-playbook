# Architecture

How this library is organized and why. Living document — update it when the structure changes.

## What this is

A version-controlled prompt library, not an application. The "system" is a set of Markdown
artifacts that people copy into Google Gemini, plus the governance that decides which of those
artifacts are trustworthy enough to use on real work.

The deliverable has three layers:

```
  Prompt          one reusable instruction, run by a person, in a Workspace surface
    ↓  (stable, repeated, same output format every time)
  Gem             a saved Gemini assistant that carries the prompt as persistent instructions
    ↓  (the trigger is also repeatable, and the outcome is reversible)
  Studio flow     an automated Workspace Studio flow that calls the Gem or a prompt step
```

Work only moves down a layer after the layer above it is stable, owned, and tested.
See [`gems-guide.md`](gems-guide.md) and [`workspace-studio-guide.md`](workspace-studio-guide.md).

## Layout

```
gemini-prompt-library/
├── prompts/                  # the library itself — one file per prompt
│   ├── index.md              # GENERATED master catalog — do not hand-edit
│   ├── lease-property-insurance/
│   ├── finance-accounting/
│   ├── payroll-hr-compliance/
│   ├── operations-vendors-facilities/
│   ├── operations-dashboards/
│   ├── document-intelligence/
│   ├── gmail-drive-workflows/
│   ├── technology-security/
│   ├── executive-leadership/
│   ├── meetings-collaboration/
│   ├── frontline-enablement/
│   └── industry-multi-unit/  # INDUSTRY PACK — food service / multi-unit retail only
├── templates/                # copyable patterns: prompt, Gem, Studio flow, example,
│                             #   and the reference files prompts depend on (KPI, approval, severity)
├── examples/                 # sanitized good-input / good-output pairs
├── docs/                     # governance, operating guides, Workspace runbooks, ADRs
├── scripts/                  # validate-prompts.mjs, its test suite, and their fixtures
└── .github/                  # issue + PR templates, CI
```

## Conventions

Organization and naming follow the owner's `engineering-standards` repo. Those standards are not
vendored here — they govern many repositories and would go stale in each one. What they require of
*this* repo is stated below, so the rules are enforceable without an external lookup.

**Naming — lowercase-kebab, everywhere.** Folders, docs, and config files. Prompt files add a
permanent numeric prefix: `NNN-short-slug.md`. Uppercase is reserved for the canonical root files
the wider ecosystem treats specially: `README.md`, `LICENSE`, `CHANGELOG.md`, `CONTRIBUTING.md`,
`CLAUDE.md`. Nothing else gets uppercase — architecture docs live at `docs/architecture.md`, never
`ARCHITECTURE.md`.

**Root files.** `README.md`, `LICENSE`, `CHANGELOG.md`, `CLAUDE.md`, `CONTRIBUTING.md`,
`.gitignore`, `.gitattributes`. Anything else that reads like documentation belongs in `docs/`.

**`docs/` is flat** apart from `adr/` and `designs/`. No `docs/bugs/`, `docs/fixes/`,
`docs/plans/`, no `todo.md` — bugs are GitHub Issues, fixes are PRs, plans are `docs/designs/`,
lasting decisions are `docs/adr/`. Create a folder only when there is content for it.

**Branching and commits.** GitHub Flow: `main` is always releasable, work happens on short-lived
`type/short-slug` branches, merged by PR and squashed. Conventional Commits — prompt content
changes use `docs:` unless they touch the validator. Every change to `main` goes through a PR, even
solo; the PR is the review record for a library whose whole premise is reviewability.

**Versioning.** SemVer applied to content, as defined in `CHANGELOG.md`. Every released version
gets a changelog entry, an annotated `vX.Y.Z` tag, and a release created from that tag. A changelog
entry with no matching tag is a defect.

**ADRs** are written when a decision is expensive to reverse or has already been argued twice, in
lightweight MADR format, one page. They are never edited after acceptance — a reversal is a new ADR
that supersedes the old one, and only the old one's Status line changes.

## Category model

Categories are **functions**, not departments and not job titles. A prompt belongs to the function
whose owner is accountable for the output being correct — which is why *Lease question with
clause-level evidence* sits in Document Intelligence (the skill is document extraction) while
*Rent invoice validation* sits in Lease, Property & Insurance (the skill is lease economics).

| Category | The job it serves | Typical owner |
|---|---|---|
| `lease-property-insurance` | Occupancy cost, landlord obligations, coverage evidence | Property / Risk lead |
| `finance-accounting` | Close, controls, cash, AP/AR, capital, tax calendar | Controller / Finance lead |
| `payroll-hr-compliance` | Pay accuracy, leave, records, training, people process | HR / Payroll lead |
| `operations-vendors-facilities` | Vendor performance, assets, incidents, readiness | Operations lead |
| `operations-dashboards` | Turning recurring reports into a short action list | Field leadership |
| `document-intelligence` | Extracting obligations and answers from long documents | Whoever owns the document |
| `gmail-drive-workflows` | Making Workspace itself reliable — mail, files, intake | Technology lead |
| `technology-security` | Incidents, access, vendor risk, data quality, automation design | Technology lead |
| `executive-leadership` | Synthesis, stakeholder reporting, operating cadence | Executive |
| `meetings-collaboration` | Meetings, decks, Chat, Forms, status roll-ups | Meeting owner |
| `frontline-enablement` | Making the answer usable by the person on shift | Field leadership |
| `industry-multi-unit` | Industry pack — see below | Operations lead |

### Industry packs

The core eleven categories use industry-neutral vocabulary: *entity, site, location, period, owner,
cost of goods*. Anything that only makes sense in one industry lives in an industry pack. Today
there is one pack, `industry-multi-unit`, covering food service and multi-unit retail (recipe
costing, waste and transfers, dayparts, food-safety inspections, menu pricing, delivery
marketplaces). A second pack would be a sibling folder, not a change to the core.

Rationale and trade-offs: [ADR 0002](adr/0002-industry-neutral-core.md).

## Prompt IDs

Every prompt has a permanent zero-padded numeric ID that is part of its filename
(`012-flash-sales-and-labor-review.md`). The ID — not the path, not the title — is the identifier
referenced by Gems, Studio flows, saved Docs, the training material, and the master index.

- IDs are **never renumbered and never reused**, including after retirement.
- Moving a prompt between categories is a normal, non-breaking change.
- Renaming a prompt is a normal change; the ID in the title line stays.
- New prompts take the next unused number.

Gaps in the sequence are expected over time, as prompts are retired and new ones take fresh numbers.

## The prompt-file contract

Every file under `prompts/` has the same shape, enforced by `scripts/validate-prompts.mjs`:
metadata block → *When to use* → *Prompt* → *Validation before use* → *Example follow-up* →
*Change log*. The full field-by-field contract is [`prompt-standard.md`](prompt-standard.md).

Two structural rules matter most:

1. **The prompt body is a fenced `text` block.** It must be copy-pasteable into Gemini with no
   editing beyond replacing `[bracketed fields]`. No commentary inside the fence.
2. **Risk label determines required content.** Yellow carries the evidence core block; Red
   additionally carries the legal/people/risk block and names an authorized reviewer.

## Safety model

The library's central constraint is that **prompts prepare, people decide.** No prompt instructs
Gemini to send, delete, archive, pay, post, approve, grant access, or communicate externally. That
boundary is what makes it safe to distribute a prompt to someone who is not an expert in the
subject matter — the worst case of a wrong answer is wasted review time, not an executed mistake.

Enforcement is layered:

- **Authoring** — the risk label and core blocks, checked by the validator.
- **Review** — [`review-rubric.md`](review-rubric.md) scores traceability and safety.
- **Runtime** — every action-producing output format carries Owner, Due Date, and Evidence columns,
  so an unowned recommendation is visibly incomplete.

See [ADR 0003](adr/0003-human-approval-boundary.md).

## Validation

`node scripts/validate-prompts.mjs` checks:

- required metadata fields present and well-formed
- ID uniqueness and filename/ID agreement
- risk label is one of the permitted values, and required core blocks are present for the label
- required sections present, prompt fence present and non-empty
- relative links resolve
- retirement is well formed — a file in `prompts/retired/` carries a `Status` line, its reason
  names a replacement or says there is none, and a named replacement actually exists
- review cadence, as a warning: a prompt two cadence periods past its `Last reviewed` date
- no obvious unsanitized content, across **every** Markdown file in the repository rather than
  `prompts/` alone — identity patterns (email, phone, government ID) are never waivable; figure
  patterns (long digit runs, `$` figures with 4+ digits) are waivable outside `prompts/` by a dated
  `<!-- synthetic-data: reviewed YYYY-MM-DD -->` attestation, because a worked example needs
  plausible numbers to teach anything. See [`data-handling-rules.md`](data-handling-rules.md).

`--write-index` regenerates `prompts/index.md` from the files.

`node scripts/test-validator.mjs` checks the validator itself, against fixtures in
`scripts/fixtures/`. Every error code has a file that trips it and the suite fails if a code has no
fixture, because a rule nobody has watched fail is not evidence that the rule works. The `valid/`
fixtures matter as much as the invalid ones: they prove that *Do not send it* is permitted where
*Send it* is not, which is the distinction every safety instruction in the library depends on.

CI runs both on every PR.

## What deliberately is not here

- **No runtime code.** Nothing executes prompts. If automation is wanted it is built in Workspace
  Studio or Apps Script, in its own repository, and this library holds only its specification.
- **No real business data.** Not even in examples or tests. See
  [`data-handling-rules.md`](data-handling-rules.md).
- **No `docs/bugs/`, `docs/fixes/`, `todo.md`.** Bugs are Issues, fixes are PRs, plans are
  `docs/designs/`.
