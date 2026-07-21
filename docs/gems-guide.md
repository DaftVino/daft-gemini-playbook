# Turning Prompts Into Gems

A prompt is a reusable instruction. A **Gem** is the Gemini equivalent of a saved skill: a guided
assistant with persistent instructions, optional Knowledge files, a defined output format, and
built-in guardrails. The person still supplies the current material and stays in control.

Primary source: [Create and use Gems — Google Help](https://support.google.com/gemini/answer/15235603?hl=en).
Availability, sharing, and file limits are controlled by your Workspace edition and admin settings —
verify against the Help Center rather than this document.

---

## When a prompt earns a Gem

Build a Gem when **all** of these are true:

- The same analysis or coaching process repeats, and only the current material changes.
- The output format should be identical every time.
- More than one person runs it, or one person runs it more than weekly.
- It has a named owner and a stable risk label.
- The context that would go into Knowledge is genuinely **stable** — definitions, templates,
  directories — not live data.

Do **not** build a Gem when:

- The source documents change continuously and the answer depends on the current version. A lease
  Gem is fine; a Gem with last quarter's lease baked into Knowledge is a liability.
- The decision requires legal, tax, coverage, or employment judgement. Keep it as a prompt card
  with an explicit approval step, so the human step cannot be skipped.
- The prompt is still being tuned. Freezing an unstable process just makes the instability durable.

| Situation | Build as |
|---|---|
| Same process, person supplies the current report or question | **Gem** |
| Repeat event needs sorting, a draft, a notification, or a controlled file copy | **Workspace Studio flow** |
| High-risk decision, or a continuously changing source document | **Prompt card + named approval step** |
| Short single-purpose activity needing a form-like front end | Gem, after a manual pilot — treat as experimental |

---

## Design rules

**One stable job, not a department.** `Daily Operations Coach` works. `Operations AI` does not — it
becomes too broad to test and too easy to feed the wrong material.

**Narrow beats impressive.** Six focused Gems with familiar names outperform one general assistant.
The general assistant is more demo-able and less useful, every time.

**Only stable context goes into Knowledge.** KPI definitions, escalation directory, action-plan
template, data dictionary, policy index. Never current spreadsheets, live inboxes, leases, or
transaction data unless their update process is genuinely controlled. Knowledge is process guidance,
not evidence of a current business fact — and the Gem must be told so explicitly.

**Make the Gem ask for missing inputs before it analyzes.** This single instruction is the best
available protection against a confident, generic answer. A Gem that says "I need the week-ending
date and the scorecard before I can do this" has already outperformed most prompts.

**Embed the evidence and safety rules in the instructions**, not in the user's memory. The whole
point is that the guardrails survive the user forgetting them.

---

## The six Gems to build first

Each maps to a tight set of adjacent prompts with compatible inputs, output format, owner, and risk
level.

| Gem | Converts | What the user says | Stable Knowledge | Hard boundary |
|---|---|---|---|---|
| **Daily Operations Coach** | 051, 053, 057, 058 | "Analyze this site or region dashboard and give me today's actions." | KPI definitions, targets, site/region list, action-plan format | Never receives current performance files as Knowledge — the user selects those each time. No discipline or pay conclusions. |
| **Data Intake Analyst** | 059, 060 | "Tell me whether this export is usable and how to map it." | Data dictionary, entity/site mappings, approved target schema | Never alters the source. No production data in Knowledge. |
| **Lease & Property Question Assistant** | 004, 061, 063, 065 | "Answer this lease question with citations." | Lease-review checklist, entity/site list, required output format | No policy, coverage, or legal conclusions. The current lease and amendments are supplied every time. |
| **Insurance Evidence Organizer** | 007, 009, 062 | "Organize the evidence and draft the question for the broker." | Claim and COI checklists, evidence-preservation guide | No coverage determination, claim acceptance, payment authority, or legal conclusion. |
| **Inbox Action Controller** | 064, 066, 067, 068, 071 | "Turn these messages into an action list, or propose a safe filter." | Label taxonomy, approval matrix, escalation directory, safe acknowledgment language | Never sends, deletes, archives, forwards, or auto-replies. No bank or payment instructions. |
| **Frontline Next-Step Guide** | 073, 074, 075 | "What do I do now, and when do I escalate?" | Approved SOPs, escalation directory, incident templates | No unpublished policy interpretation. Escalates when sources conflict or are missing. |

---

## How to build one

1. **Choose a stable job**, and one prompt or a tight set of adjacent prompts.
2. **Write the instructions** from
   [`templates/gem-instruction-template.md`](../templates/gem-instruction-template.md). This is the
   conversion layer that sits above the original prompt text.
3. **Assemble Knowledge** — stable reference material only.
4. In the Gemini web app, open **Explore Gems** → **New Gem**.
5. Enter the **name**. It is what the team will search for; use the job, not the department.
6. Paste the **instructions**.
7. Under **Knowledge**, click **Add files** and attach the reference material, from your device or
   from Drive.
8. **Test in the preview window** on the right against your three cases — normal, messy, high-risk.
9. Click **Save**. Previewing does not save the Gem, and this catches people constantly.
10. **Share** only after sign-off, and only if your admin has enabled Gem sharing.

### Test before you publish

Three cases, every time:

| Case | What you are checking |
|---|---|
| **Normal** | Correct output shape, right level of detail, nothing invented |
| **Messy / incomplete** | Does it declare insufficiency and ask, or does it fill the gap? Most Gems fail here on the first draft. |
| **Exception / high-risk** | Does it escalate instead of resolving? |

Compare each output to what the owning human concluded. A Gem that agrees on the easy case and
diverges on the hard one is worse than no Gem — it has trained the user to trust it.

---

## Registering a Gem

A Gem that is not registered is a Gem nobody can audit. Record in the master index Sheet:

| Field | |
|---|---|
| Gem name | |
| Source prompt IDs | |
| Gem owner | Role |
| Knowledge files | Names and their owners |
| Share setting | Private / shared, and with whom |
| Test cases | Where the three test records live |
| Approval date | |
| Next review date | Quarterly for Yellow and Red |

**Keep the Gem's exact instructions in the corresponding prompt file's change log or an adjacent
file in this repository**, so the Gem can be rebuilt or audited if it is deleted, if the owner
leaves, or if someone edits it without telling anyone.

---

## Maintaining Gems

- Re-review on the same cadence as the underlying prompt: quarterly for Yellow and Red.
- Re-test after any change to a Knowledge file. A stale KPI definition silently corrupts every
  answer, and the output stays exactly as confident as it was when it was right.
- Watch for **scope creep** — the most common failure mode. Users ask a narrow Gem to do adjacent
  things, it obliges, and within a month the tested boundary is fiction. Either extend and re-test
  the instructions, or build a second Gem.
- When a Gem's source prompt changes materially, update the Gem in the same change. A drifted pair
  is worse than either alone.
- Retiring a Gem: delete it rather than leaving it findable, and note the retirement in the index.
  An unowned Gem still answers questions.
