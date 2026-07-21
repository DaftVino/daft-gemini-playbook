# Workspace Studio Flow Specification

Write this **before** building the flow. It doubles as the audit record and the rollback plan.
Guidance: [`docs/workspace-studio-guide.md`](../docs/workspace-studio-guide.md).

---

## Flow: [clear business verb + noun]

| Field | Value |
|---|---|
| **Business owner** | [role — the person who disables this at 6pm on a Friday] |
| **Source prompt(s)** | [prompt IDs from this library] |
| **Source Gem** | [Gem name, if the AI step calls one] |
| **Status** | Draft / Manual pilot / Piloting / Production / Disabled |
| **Created** | [YYYY-MM-DD] |
| **Last reviewed** | [YYYY-MM-DD] |

### Business purpose

[Two sentences. What repetitive work this removes, and what stays human.]

### Starter

- **Type:** [new email matching criteria / schedule / form submission / manual]
- **Exact criteria:** [sender, subject pattern, label, time, form]
- **Expected volume:** [per day or week — if you cannot estimate it, you have not observed the
  process long enough to automate it]

### Inputs and data sources

- **Allowed sources:** [the specific files, folders, labels, or sheets]
- **Data source scope:** [Web search / Workspace content / both — and narrowed to what]
- **Explicitly out of scope:** [what this flow must never read]

### AI step

- **Step type:** [Ask a Gem — <name> / Ask Gemini / Extract / Decide / Summarize]
- **Must return:** [fixed named fields / a List / true-false] — never free prose that a later step
  has to parse
- **Response format:** [Text / List]
- **On empty or unparseable result:** [explicit branch — this is the branch that gets forgotten]

### Decision rules

| Condition | Path |
|---|---|
| [condition] | [step] |
| [condition] | [step] |
| **No match / AI step failed / source missing** | [exception queue — never "continue"] |

### Actions and their mode

| Action | Mode | Reversible? |
|---|---|---|
| [label / draft / task / Chat notification / controlled file copy] | Automatic / Draft-only / Approval-required | Yes / No |

> First production release: label, draft, task, notification, and controlled copy only.
> Never: auto-send external mail, auto-delete, auto-archive, financial posting, permission changes.

### Human approval

- **Who approves:** [role]
- **Before what:** [send / move / update / external action]
- **How they are notified:** [task, Chat, email]
- **What happens if nobody approves within [N]:** [explicit — silence is not approval]

### Exception route

- **Queue location:** [where exceptions land]
- **Owner:** [role]
- **Target response time:** [hours or days]

### Audit record

Where the link to the original, the AI output, the decision taken, the owner, the date, and the
status are retained: [location]

### Test set

| Case | Expected behaviour | Result | Date |
|---|---|---|---|
| Normal | | | |
| False positive (should not trigger) | | | |
| Incomplete / missing source | | | |
| High-risk (must escalate, not resolve) | | | |

### Rollback

- **How to disable:** [exact steps]
- **How to recover affected items:** [labels to remove, files to restore, drafts to delete]
- **Who is told:** [role]

---

## Pre-launch checklist

- [ ] Manual pilot run for at least one full cycle
- [ ] Source Gem tested on normal, messy, and high-risk cases
- [ ] AI step returns a structured contract, not prose
- [ ] Empty-result and failure branches explicitly handled
- [ ] Every outcome reversible
- [ ] Data sources scoped to the minimum
- [ ] Exception queue exists with a named owner and response target
- [ ] Test set run and recorded above
- [ ] Rollback written and understood by the owner
- [ ] Registered in the master index Sheet
