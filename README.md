# Gemini Prompt Library

A governed library of **112 approved Google Gemini prompts** for Google Workspace, built for
multi-entity, multi-site organizations — finance, property, people, operations, technology, and
executive work.

It is not a prompt pack. Every prompt is a controlled artifact with a risk label, named required
sources, an owning role, a review date, and the specific human checks to run before acting on its
output. The organizing principle is simple and non-negotiable:

> **Prompts prepare. People decide.**

No prompt here instructs Gemini to send, delete, archive, pay, post, approve, or change access. That
boundary is what makes it safe to hand a lease-analysis prompt to someone who is not a lease
analyst — the worst case of a wrong answer is wasted review time, not an executed mistake.
([ADR 0003](docs/adr/0003-human-approval-boundary.md))

---

## Start here

| If you are… | Read |
|---|---|
| Looking for a prompt | **[The catalog →](prompts/index.md)** |
| Using Gemini and want better output | [Operating guide](docs/gemini-operating-guide.md) |
| Learning this properly, at your own pace | [NotebookLM study guide](docs/notebooklm-study-guide.md) |
| Rolling this out to a team | [Workspace setup runbook](docs/workspace-setup.md) |
| Deciding what needs approval | [Risk labels and approval boundaries](docs/risk-and-approval.md) |
| Turning a prompt into a saved assistant | [Gems guide](docs/gems-guide.md) |
| Automating a repeatable process | [Workspace Studio guide](docs/workspace-studio-guide.md) |
| Writing or reviewing a prompt | [Prompt standard](docs/prompt-standard.md) · [Review rubric](docs/review-rubric.md) |
| Contributing | [CONTRIBUTING.md](CONTRIBUTING.md) |

**The one habit that matters most:** attach your sources before you ask. The most common failure in
this library is a well-written prompt run against nothing, which produces a fluent, perfectly
formatted, entirely fictional answer.

---

## The catalog

| Category | Prompts | What it serves |
|---|---:|---|
| [Lease, Property & Insurance](prompts/lease-property-insurance/) | 10 | Occupancy cost, landlord obligations, coverage evidence |
| [Finance & Accounting](prompts/finance-accounting/) | 19 | Close, controls, cash, AP/AR, capital, tax calendar |
| [Payroll, HR & Compliance](prompts/payroll-hr-compliance/) | 13 | Pay accuracy, leave, records, training, people process |
| [Operations, Vendors & Facilities](prompts/operations-vendors-facilities/) | 14 | Vendor performance, assets, incidents, readiness |
| [Operations Dashboards](prompts/operations-dashboards/) | 9 | Turning recurring reports into a short action list |
| [Document Intelligence](prompts/document-intelligence/) | 5 | Extracting obligations and answers from long documents |
| [Gmail, Drive & Workflows](prompts/gmail-drive-workflows/) | 8 | Making Workspace itself reliable — mail, files, intake |
| [Technology, Data & Security](prompts/technology-security/) | 11 | Incidents, access, vendor risk, data quality, automation |
| [Executive Leadership](prompts/executive-leadership/) | 3 | Synthesis, stakeholder reporting, operating cadence |
| [Meetings & Collaboration](prompts/meetings-collaboration/) | 6 | Meetings, decks, Chat, Forms, status roll-ups |
| [Frontline Enablement](prompts/frontline-enablement/) | 7 | Making the answer usable by the person on shift |
| [Industry Pack — Multi-Unit](prompts/industry-multi-unit/) | 7 | Food service and multi-unit retail specifics |

The core eleven categories are **industry-neutral** — *entity, site, location, period, owner*.
Anything that only makes sense in one industry lives in an industry pack, so the core stays usable
by any multi-site organization. ([ADR 0002](docs/adr/0002-industry-neutral-core.md))

### The eight to start with

Do not release 112 prompts to a whole organization; nobody adopts a catalog. These eight are the
highest-frequency, lowest-risk, most immediately useful, and they cover the surfaces people already
use:

[051](prompts/operations-dashboards/051-daily-operations-dashboard.md) ·
[052](prompts/operations-dashboards/052-weekly-multi-site-scorecard-and-call-plan.md) ·
[053](prompts/operations-dashboards/053-site-dashboard-to-seven-day-action-plan.md) ·
[057](prompts/operations-dashboards/057-cash-deposit-and-paid-out-exception-handoff.md) ·
[060](prompts/operations-dashboards/060-spreadsheet-intake-parsing-and-data-map.md) ·
[064](prompts/document-intelligence/064-email-thread-and-attachment-decision-timeline.md) ·
[068](prompts/gmail-drive-workflows/068-inbox-triage-and-follow-through-brief.md) ·
[075](prompts/frontline-enablement/075-plain-language-what-do-i-do-next.md)

Run them for two weekly cycles with their real owners before opening the rest.
See the [rollout runbook](docs/workspace-setup.md).

---

## How a prompt works

Each file is self-contained. Metadata tells you where to run it, what to attach, who owns it, and
what it can cost you if it is wrong. Then: when to use it, the copy-pasteable prompt, what a human
must verify, and one refinement prompt to send next.

```markdown
# 008 — Rent Invoice Validation

- **Surface:** Gemini in Sheets · Gemini in Docs
- **Risk:** Yellow
- **Owner:** Controller
- **Required sources:** @Rent Statement, @Lease Abstract, @Lease, @Amendments, @Prior Month Billing
- **Core blocks:** Evidence, Finance
```

**Risk labels** determine what gets appended and who must review the output:

| Label | Output review |
|---|---|
| **Green** | Normal owner review |
| **Yellow** | Owner verifies sources, calculations, and assumptions |
| **Yellow/Red** | Owner verifies; escalates if a Red trigger is present |
| **Red** | An authorized reviewer must validate and approve before any action or external use |

**Core blocks** are reusable safety instructions appended at run time —
[evidence, finance, legal/people/risk, data quality](docs/gemini-operating-guide.md#the-core-blocks).
They are why outputs from this library can be reviewed rather than merely read.

---

## Maturity path

Work only moves down a layer once the layer above it is stable, owned, and tested. Going straight to
automation is the most expensive mistake available here.

```
  Prompt         a person runs it, in a Workspace surface
    ↓            stable, repeated, same output format every time
  Gem            a saved assistant carrying the prompt as persistent instructions
    ↓            the trigger is also repeatable, and every outcome is reversible
  Studio flow    an automated flow calling the Gem, with a human approval step
```

[Gems guide](docs/gems-guide.md) · [Workspace Studio guide](docs/workspace-studio-guide.md)

---

## No real data, ever

No real data appears anywhere in the library. No organization, entity, site, vendor, landlord, or
person names. No account numbers, real figures, contract terms, or credentials. Placeholders are
`[bracketed]`; examples are synthetic.

This is not caution, it is what makes the prompts work — a prompt that says "compare against the Q3
Northeast file" is useless to anyone without that file. Placeholders are both safer and more
reusable. [`docs/data-handling-rules.md`](docs/data-handling-rules.md)

`scripts/validate-prompts.mjs` backstops this in CI, alongside structural checks.

---

## Working in this repo

```bash
node scripts/validate-prompts.mjs                 # structure, IDs, risk labels, links, leak check
node scripts/validate-prompts.mjs --write-index    # regenerate prompts/index.md
node scripts/test-validator.mjs                    # prove the checks above actually fire
```

The third command is the one worth explaining. A validator nobody has watched fail is not evidence
of anything, so every rule has a fixture that trips it in
[`scripts/fixtures/`](scripts/fixtures/) — including the cases that must *pass*, like a prompt that
says "Do not send it". CI runs all three on every PR.

`prompts/index.md` is generated — never hand-edit it. Prompt IDs are permanent: never renumbered,
never reused, because Gems, flows, saved Docs, and training material reference them.

Naming, layout, branching, and release conventions are stated in
[`docs/architecture.md`](docs/architecture.md#conventions).

---

## Sources

Prompt structure and the persona-task-context-format pattern follow Google's published Workspace
prompting guidance. Gem and Workspace Studio mechanics follow the current
[Gemini](https://support.google.com/gemini/answer/15235603?hl=en) and
[Workspace Studio](https://support.google.com/workspace-studio/answer/16431105?hl=en) Help Center
documentation — check those, not this library, for product behaviour and current limits.

Design decisions and their trade-offs are recorded in [`docs/adr/`](docs/adr/).

## License

[MIT](LICENSE). Adapt the prompts to your own vocabulary, thresholds, and approval matrix — that is
what the placeholders are for.
