# Adding This Library to Your Google Workspace

A runbook for getting from "cloned the repo" to "the team is using this on real work." Roughly a
half day of setup, then a two-week pilot.

Companion guides: [`gems-guide.md`](gems-guide.md) for saved assistants,
[`workspace-studio-guide.md`](workspace-studio-guide.md) for automation.

---

## Stage 0 — Prerequisites

| Requirement | Who | Notes |
|---|---|---|
| A Google Workspace edition that includes Gemini | Workspace admin | Verify in Admin console → **Billing** → **Subscriptions**. Feature availability varies by edition; check before promising a surface to the team. |
| Gemini app and Workspace-app Gemini turned on for the pilot group | Workspace admin | Admin console → **Apps** → **Google Workspace** → service on/off, scoped to an OU or group |
| Smart features and personalization enabled | Admin, then each user | Required for `@`-referencing Drive and Gmail content. This is the setting that makes most of this library work; without it, prompts silently lose their sources. |
| Gems available, and Gem sharing decided | Workspace admin | Sharing a Gem with the team is an admin-controlled capability. Decide before you build. |
| A Shared Drive for the library | Library owner | Not a personal Drive. Personal Drives create an orphaned library the moment someone leaves. |
| An organizational account for all real work | Everyone | Consumer and enterprise accounts carry different data terms. |

**Confirm smart features before anything else.** Have one pilot user open Gemini in Docs, type `@`,
and confirm Drive files appear in the picker. If they do not, stop and fix the setting — every
Yellow and Red prompt in this library depends on it.

---

## Stage 1 — Stand up the library in Drive

The repository is the source of truth. Drive is the reading surface for people who will never open
GitHub.

1. **Create a Shared Drive** named for the library, with an organizational owner — a role-based
   account or a group, never an individual.

2. **Mirror the structure** as folders. The `.md` files can be uploaded as-is (Drive previews
   Markdown) or converted to Docs. Converting is friendlier to non-technical users and creates a
   drift problem; uploading preserves fidelity and is harder to read. Pick one and write it down.

   ```
   AI Prompt Library — Approved
   ├── 00 Start Here — How to use Gemini here
   ├── 01 Lease, Property & Insurance
   ├── 02 Finance & Accounting
   ├── 03 Payroll, HR & Compliance
   ├── 04 Operations, Vendors & Facilities
   ├── 05 Operations Dashboards & Fast Paths
   ├── 06 Document Intelligence
   ├── 07 Gmail, Drive & Workflow Automation
   ├── 08 Technology, Data & Security
   ├── 09 Executive Leadership
   ├── 10 Meetings & Collaboration
   ├── 11 Frontline Enablement
   ├── 12 Industry Pack — Multi-Unit
   ├── 90 Templates & Reference Files
   └── 99 Retired / Under Review
   ```

3. **Set permissions.** Viewer for the organization, Contributor for prompt owners, Manager for the
   library owner. If the library is editable by everyone, it stops being *approved* and becomes a
   wiki, which is a different and less useful thing.

4. **Put the Start Here doc first.** It contains three things and nothing else: the four-part prompt
   pattern, the core evidence block, and "attach your sources before you ask." Everything else is
   reference. People read exactly one page.

---

## Stage 2 — Build the reference files

Prompts reference organizational context that must not live in this repository. Create these in the
Shared Drive, keep them current, and name them consistently — they become the Knowledge attached to
Gems later.

| Reference file | Used by | Owner |
|---|---|---|
| Entity list and structure | Finance, lease, insurance prompts | Controller |
| Site / location master list | Nearly everything | Operations |
| KPI definitions and targets | All dashboard prompts | Finance / Operations |
| Chart of accounts and coding guide | AP, close, capitalization prompts | Controller |
| Approval matrix and thresholds | Every Red prompt | Controller |
| Escalation directory (by role) | Frontline and incident prompts | Operations |
| Policy index | HR, compliance, frontline prompts | HR |
| Data dictionary for reporting sources | Data-quality and intake prompts | Technology |
| Standard action-plan and incident templates | Action-plan prompts | Operations |

These are the **stable** context. Current spreadsheets, live inboxes, leases, and transaction data
are *not* reference files — they are what the user attaches at run time. Confusing the two is the
most common way a Gem starts giving confidently outdated answers.

---

## Stage 3 — Publish the master index

Maintain a Google Sheet alongside the library. It is the operational register the repository cannot
be, because it tracks adoption rather than content.

| Column | Purpose |
|---|---|
| ID | Permanent prompt ID from this repository |
| Prompt name | |
| Category | |
| Surface | Where it runs |
| Required inputs | What to attach |
| Risk | Green / Yellow / Yellow-Red / Red |
| Owner | Role |
| Mode | Manual / Draft-only / Approval-required |
| Gem | Name of the Gem built from it, if any |
| Studio flow | Name of the flow, if any |
| Last reviewed | Date |
| Status | Active / Piloting / Retired |
| Notes | Known failure points, good source sets |

`prompts/index.md` in this repository generates the first six columns. The rest is yours.

---

## Stage 4 — Pilot

Do not release 112 prompts to the whole organization. Nobody adopts a catalog.

**Pick eight.** The fast-path set is designed for this: **051, 052, 053, 057, 060, 064, 068, 075**.
They are the highest-frequency, lowest-risk, most immediately useful prompts in the library, and
they cover the three surfaces most people already use.

For each one:

1. Name an owner — the person who already does this job today.
2. Attach it to its real source files, so the owner does not have to hunt for them.
3. Run it for **two full weekly cycles**. One cycle tells you nothing; the second tells you whether
   it survives a messy week.
4. Capture one sanitized good-input / good-output pair per prompt. New users learn far faster from
   a worked example than from prompt-engineering advice.
5. Record the failure points in the index Notes column.

Only after that, open the rest of the catalog by function.

---

## Stage 5 — Train on three habits

Do not train on prompt engineering. Train on three habits, in this order:

1. **Attach the right sources.** The most common failure is a perfect prompt run against nothing.
2. **Ask for exceptions, not summaries.** "The five things that need attention" gets acted on.
3. **Verify before acting.** Recalculate the number, open the cited clause. The output is a draft
   until a human confirms it.

Add one more for anyone using Red prompts: **produce the question, not the answer.** The model is
excellent at assembling a precise question for counsel, a broker, or the Controller, and unreliable
at knowing whether it is allowed to answer it.

For self-paced depth beyond the three habits, point people at
[`notebooklm-study-guide.md`](notebooklm-study-guide.md). It has each person build their own
NotebookLM notebook from the library and work through study paths for their role. It scales better
than a training session and produces better questions, because people arrive having already argued
with the material.

---

## Stage 6 — Only then, Gems and flows

A prompt earns a Gem when it is run repeatedly, by more than one person, with a stable output
format and a named owner. A Gem earns a Studio flow when its trigger is also repeatable and every
outcome is reversible.

Going straight to automation is the most expensive mistake available here: you get a fragile,
unowned workflow producing outputs nobody trusts, and you find out three months later.

→ [`gems-guide.md`](gems-guide.md) · [`workspace-studio-guide.md`](workspace-studio-guide.md)

---

## Maintenance

- Each function owns the accuracy of its own prompts' inputs, terminology, and referenced policies.
- Finance and Technology jointly own the core blocks, the risk model, and the governance docs.
- Review Yellow and Red prompts quarterly, and immediately after any policy, system, provider, or
  entity change.
- Keep the reference files in Stage 2 current. A stale KPI definition silently corrupts every
  dashboard prompt that depends on it, and the output will look exactly as confident as before.
- Move stale prompts to `99 Retired / Under Review`. Do not leave them searchable as current
  guidance.
- When a prompt changes in this repository, update the Drive copy and note it in the index Sheet.
  Two sources of truth is zero sources of truth.

## Rollout checklist

- [ ] Gemini licensing and service access confirmed for the pilot group
- [ ] Smart features / personalization verified by an actual `@` test in Docs
- [ ] Shared Drive created with an organizational owner and correct permissions
- [ ] Library structure mirrored; Start Here doc written
- [ ] Stage 2 reference files created and assigned owners
- [ ] Master index Sheet published
- [ ] Eight fast-path prompts assigned to owners with sources attached
- [ ] Two weekly cycles completed; examples and failure notes captured
- [ ] Three habits trained
- [ ] Gem and Studio decisions deferred until after the pilot
