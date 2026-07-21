# Architecture

How this library is organized and why. Living document — update it when the structure changes.

## What this repository is

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
├── templates/                # copyable patterns: prompt, Gem, Studio flow, few-shot example
├── examples/                 # sanitized good-input / good-output pairs
├── docs/                     # governance, operating guides, Workspace runbooks, ADRs
├── scripts/                  # validate-prompts.mjs
└── .github/                  # issue + PR templates, CI
```

`docs/` is flat apart from `adr/` and `designs/`, per the
[repo standards](../engineering-standards/repo-standards.md) §3.

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

01–75 came from the original catalog. 76–112 are new. Gaps in the sequence are expected over time.

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
- no obvious unsanitized content (long digit runs, email addresses, `$` figures with 4+ digits)
- relative links resolve

`--write-index` regenerates `prompts/index.md` from the files. CI runs the validator on every PR.

## What deliberately is not here

- **No runtime code.** Nothing executes prompts. If automation is wanted it is built in Workspace
  Studio or Apps Script, in its own repository, and this library holds only its specification.
- **No real business data.** Not even in examples or tests. See
  [`data-handling-rules.md`](data-handling-rules.md).
- **No `docs/bugs/`, `docs/fixes/`, `todo.md`.** Bugs are Issues, fixes are PRs, plans are
  `docs/designs/`.
