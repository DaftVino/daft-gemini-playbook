# Turning Gems Into Workspace Studio Flows

A Gem is judgement on demand. A **Workspace Studio flow** is a repeatable automation: a starter, a
sequence of steps, decisions, and outputs, with an AI step where classification, extraction, or
drafting is needed.

Primary source:
[Use AI steps in Workspace Studio — Google Help](https://support.google.com/workspace-studio/answer/16431105?hl=en).
Availability and limits vary by edition and change — verify against the Help Center, not this page.

---

## When to build a flow

Only after **all** of these are true:

- The manual prompt is stable and has been run for at least two full cycles.
- A Gem exists, is owned, and produces a consistent output format.
- The **trigger** is as repeatable as the analysis. Most automation failures are trigger failures.
- Every outcome is **reversible** — a label, a draft, a task, a notification, a copy.
- Someone owns the flow by name, and knows how to turn it off.

If you cannot name the person who disables the flow at 6pm on a Friday, do not build it.

---

## The available parts

**Starters** — a new email matching criteria, a schedule, a form submission, a manual run.

**AI steps:**

| Step | Use |
|---|---|
| **Ask Gemini** | General text generation, summarization, or a web/Workspace-grounded question. Returns **Text** or **List**; a List can feed a "Repeat for each" loop. |
| **Ask a Gem** | Calls a pre-built or custom Gem when the step needs the specialized judgement, vocabulary, and guardrails you already built and tested. **Prefer this for anything governed by this library** — the safety rules live in the Gem, not in a prompt box someone can edit. |
| **Decide** | Evaluates a subjective or complex condition to control which branch runs. |
| **Extract** | Pulls specific fields out of text — reference numbers, dates, addresses, amounts. |
| **Summarize** | Highlights from text, with preset options plus custom instructions. |
| **Recap unread emails** | Summarizes unread mail from a timeframe. |

**Data sources** — a step can be grounded in web search, Workspace content, or both. The default
reaches Gmail, Chat, Drive, Calendar, and connected integrations. **Narrow this deliberately.** A
flow that can see everything will eventually use something you did not intend.

**Passing data** — an AI step's response becomes a variable available to later steps. Design the
step so that variable is *structured* (a list, or named fields via Extract), not a paragraph.
Downstream steps parsing prose is how flows break silently.

**Access notes** — AI features are unavailable to school users under 18. Personal-account users need
Google Workspace Experiments to use flows. Organizational work belongs in the organizational
account.

---

## Design rules

**One starter, explicit conditions, reversible outcome.** If you cannot describe the flow in one
sentence of that shape, it is two flows.

**Constrain the AI step's output contract.** Require fixed fields, a list, or a true/false decision.
"Summarize the email" is not a contract; "return exactly these five fields, or the string
`INSUFFICIENT`" is.

**Handle the failure branch explicitly.** What happens when the AI step returns nothing, returns
garbage, or the source file is missing? An unhandled branch does not stop — it proceeds with an
empty variable, which is worse.

**Mark every outcome.** Each send, file move, record update, or escalation is *automatic*,
*draft-only*, or *approval-required*. For a first production release, allow only
label / task / notification / draft.

**Preserve the original.** Copy into a controlled intake folder; never move, overwrite, or delete
the source. Where the email itself is the evidence and not just its attachment, save both.

**Pilot manually first.** Run the flow's logic by hand for a cycle. If it is not worth doing
manually for one cycle, it is not worth automating.

---

## Flow specification

Write this before building. It is also the audit record.
Template: [`templates/studio-flow-template.md`](../templates/studio-flow-template.md).

```text
Flow name:        [clear business verb + noun]
Business owner:   [role]
Source prompt(s): [prompt IDs from this library]
Starter:          [new email matching exact criteria / scheduled time / form submission]
Inputs:           [allowed sources and fields]
Data sources:     [web / Workspace / both — and scoped to what]
AI step:          [Ask a Gem: <Gem name> | Ask Gemini | Extract | Decide]
                  must return [fixed fields / list / true-false]
Decision rules:   [explicit conditions, including the failure and empty-result branches]
Action:           [label / draft / task / Chat notification / controlled file copy]
Human approval:   [who approves] before [send / move / update / external action]
Exception route:  [queue, owner, target response time]
Audit record:     [where the original link, summary, result, owner, date, and status are kept]
Test set:         [normal / false positive / incomplete / high-risk]
Rollback:         [how the flow is disabled, and how affected items are recovered]
```

---

## The four flows worth building first

In this order. Each is high-frequency, reversible, and fails visibly rather than silently.

1. **High-importance notification.** Detects consequential incoming mail and labels it, keeps it in
   the Inbox, and raises a task or Chat alert. It notifies; it does not handle. Built from prompt
   067.
2. **Attachment intake to a controlled queue.** Copies incoming attachments to an intake folder,
   logs metadata to a tracker, and flags exceptions. It never posts to a system of record, never
   overwrites, never deletes the original. Built from prompt 070.
3. **Weekly dashboard exception digest.** On a schedule, runs the operations Gem against the
   scorecard and delivers the exception list with a link back to the source. Built from prompts 051
   and 052.
4. **Late or incomplete submission reminders.** Identifies missing submissions and drafts the
   reminder **for review**. Built from prompt 073.

---

## What not to automate first

| Workflow | Safe first release | Do not start with |
|---|---|---|
| High-importance email | Label, keep in Inbox, create a review task or Chat alert | Marking every executive or vendor email important; auto-archiving; auto-replying |
| Routine acknowledgment | Draft-only, after a narrow sender/subject test | Any send that implies approval, liability, payment, coverage, an HR action, or a deadline commitment |
| Email attachments | Copy to a controlled intake folder, log metadata, alert on exceptions | Deleting originals, overwriting files, or relying on an attachment without preserving the email as evidence |
| Dashboard delivery | Scheduled exception summary with source link and owner | Automated performance conclusions, disciplinary action, or target changes |
| Lease and insurance documents | Create an obligation or renewal review task | Declaring coverage, accepting terms, submitting a claim position, or sending external notice |

Never, at any maturity level: auto-send external mail, auto-delete, auto-archive compliance,
payment, legal, payroll, insurance, security, or executive messages, post financial entries
automatically, or change Drive permissions automatically.

---

## Known constraints to design around

Google documents current limitations with Shared Drives and shared folders, and with spreadsheets
using `IMPORTRANGE`. Check the current
[Workspace Studio Help](https://support.google.com/workspace-studio/answer/16444479?hl=en) before
you design around a shared-team file.

The practical consequence: Studio is a strong fit for **a single owner's controlled pilot**.
Durable, shared-team records need an explicit organizational owner and a tested manual fallback, so
the process survives the flow being disabled or its owner leaving.

---

## Before you switch it on

- [ ] Manual pilot completed for at least one full cycle
- [ ] Source Gem tested on normal, messy, and high-risk cases
- [ ] AI step returns a structured contract, not prose
- [ ] Empty-result and failure branches explicitly handled
- [ ] Every outcome is label / draft / task / notification / controlled copy
- [ ] Data sources scoped to the minimum needed
- [ ] Exception queue exists with a named owner and a response target
- [ ] Audit record location defined
- [ ] Test set run: normal, false positive, incomplete, high-risk
- [ ] Rollback written down, and the owner knows how to disable the flow
- [ ] Registered in the master index Sheet with its source prompt IDs
