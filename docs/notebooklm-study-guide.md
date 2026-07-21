# Study Guide — Using This Library as a Course in NotebookLM

This library is a curriculum as well as a toolkit. Loaded into NotebookLM, it becomes a tutor you
can interrogate: *why is this prompt Red, what would make this output untrustworthy, what should I
check before I act on this?*

Build your own notebook. Do not share one across the team — a notebook you assembled, containing the
sources relevant to your role, and a chat history of your own questions, teaches far more than
someone else's.

**Time:** about 90 minutes to set up and work through Path 1. The rest is self-paced.

---

## 1. What to add

NotebookLM answers from its sources and nothing else, so the selection *is* the syllabus. Add
deliberately — a notebook holding everything answers everything vaguely.

### Add to every notebook — the spine

These five explain how the whole thing works and why. Without them the prompts read as arbitrary.

| Source | What it teaches |
|---|---|
| `README.md` | The shape of the library and the core principle: prompts prepare, people decide |
| `docs/gemini-operating-guide.md` | How to actually run a prompt well — grounding, the core blocks, refinement, failure modes |
| `docs/risk-and-approval.md` | Why some outputs need an authorized reviewer, and what "Red" obliges |
| `docs/prompt-standard.md` | What makes a prompt good, field by field — the most useful single source for learning to write your own |
| `docs/review-rubric.md` | How to judge a prompt, and how to judge an output before acting on it |

### Add for your role — the prompts you will actually run

Add **only your own categories**, plus the fast-path set. Fifteen to twenty-five prompt files is the
right size. A hundred and twelve makes every answer generic.

| If you work in | Add |
|---|---|
| Finance / accounting | `prompts/finance-accounting/`, plus 002, 008, 057 |
| Property / facilities / risk | `prompts/lease-property-insurance/`, `prompts/operations-vendors-facilities/`, plus 061, 062, 063 |
| HR / payroll | `prompts/payroll-hr-compliance/`, plus 027, 075, 103 |
| Operations / field leadership | `prompts/operations-dashboards/`, `prompts/frontline-enablement/`, plus 038, 097 |
| Technology | `prompts/technology-security/`, `prompts/gmail-drive-workflows/`, plus 045, 060 |
| Executive | `prompts/executive-leadership/`, `prompts/meetings-collaboration/`, plus 048, 050, 099 |
| Food service / multi-unit | your role set above, plus `prompts/industry-multi-unit/` |

Everyone adds the fast-path eight regardless of role — they are the ones you will be asked about:
**051, 052, 053, 057, 060, 064, 068, 075**.

### Add if you are going further

| Goal | Add |
|---|---|
| Building a Gem | `docs/gems-guide.md`, `templates/gem-instruction-template.md` |
| Building an automation | `docs/workspace-studio-guide.md`, `templates/studio-flow-template.md`, prompt 072 |
| Rolling this out to a team | `docs/workspace-setup.md`, `docs/data-handling-rules.md` |
| Writing new prompts | `templates/prompt-template.md`, `CONTRIBUTING.md`, `docs/adr/` |
| Understanding why it is built this way | `docs/adr/` — all three, they are short |
| Seeing a worked run | `examples/` |

### Do not add

- **`prompts/index.md`** — it is a generated table. It bulks up the notebook and teaches nothing.
- **`scripts/`, `.github/`, `CHANGELOG.md`, `CLAUDE.md`** — repository plumbing, not subject matter.
- **Every category at once**, unless you are the library owner. Breadth costs you precision.
- **Anything from your actual work.** No real reports, exports, leases, registers, or correspondence.
  A study notebook is not a workspace, and the moment real data goes in, it stops being shareable and
  starts being a records-management problem. See [`data-handling-rules.md`](data-handling-rules.md).

---

## 2. Getting the files in

Two routes. Pick one.

**Google Drive (easiest to keep current).** Copy the folders you selected above into a Drive folder,
then add them to the notebook as Drive sources. When the library updates, re-sync the Drive copy.

**Direct upload.** Download or clone the repository, then upload the individual `.md` files. Faster
to start; you will re-upload when things change.

Either way: **check the source count after adding.** If a folder came in as one merged source rather
than one source per prompt, citations will point at the whole folder and be much less useful. Add
prompt files individually if so — precise citations are most of the value here.

Notebook and source limits depend on your plan and change over time; check current limits in
[NotebookLM Help](https://support.google.com/notebooklm).

---

## 3. Study paths

### Path 1 — Learn to run a prompt well (start here, ~45 min)

Most people's output improves more from this than from anything else in the library.

Ask your notebook, in order:

1. `What are the four parts of a well-formed prompt, and which part am I responsible for supplying?`
2. `What are the core blocks, when do I append each, and what does each one prevent?`
3. `What are the most common reasons a Gemini output is wrong, and how would I recognize each?`
4. `Explain "attach your sources before you ask" and what happens if I don't.`
5. `Give me five refinement prompts to send after a first answer, and what each one is for.`

Then do the exercise: pick one prompt from your role set. Ask
`Walk me through prompt [ID] as if I have never run it: what do I attach, what do I get back, and what must I check before acting on it?`

Run it for real, on real work, with the sources attached. Come back and ask
`My output did [X]. Which validation step in prompt [ID] would have caught that?`

### Path 2 — Learn the risk model (~30 min)

The part people skip and then get wrong.

1. `Explain Green, Yellow, Yellow/Red, and Red in plain language, with an example of each from my sources.`
2. `What is the hard boundary that applies to every prompt regardless of label?`
3. `Why does a Red prompt produce the question to send to a reviewer rather than the answer?`
4. `I want to run prompt [ID]. Who must review the output before I act, and what specifically are they checking?`
5. `What turns a Yellow/Red prompt into a Red one?`

Exercise: `Take three prompts from my sources and argue for a different risk label on each. Which of your arguments is strongest?` Then check your reasoning against `risk-and-approval.md`.

### Path 3 — Learn to judge an output (~30 min)

1. `What does traceability mean here, and how do I verify a citation is real?`
2. `Walk me through the output review checklist and why each item exists.`
3. `What are the two questions a reviewer should ask if they only have thirty seconds?`
4. `Show me, from the example in my sources, what a good output does that a weak one would not.`

Exercise: run a prompt, then paste your **sanitized** output back and ask
`Judge this against the review rubric. What can I not trace to a source?` Replace every real name and
figure with placeholders first.

### Path 4 — Learn to write and improve prompts (~60 min)

1. `What are the required fields in a prompt file and what does each one do?`
2. `Why must every analytical prompt bound its output and separate fact from inference?`
3. `What is the three-case test and why does the messy case matter most?`
4. `What automatically disqualifies a proposed prompt?`

Exercise: take a recurring task in your own work that has no prompt yet. Ask
`Help me draft a prompt for [describe the job]. Use the prompt standard in my sources. Ask me for anything you need before drafting.`
Then: `Score the draft against the review rubric and tell me where it falls short.`

If it holds up, propose it — see [`CONTRIBUTING.md`](../CONTRIBUTING.md).

### Path 5 — Understand the design decisions (~20 min)

For anyone who will maintain, extend, or argue with the library.

1. `Why is this a repository of separate files rather than one document?`
2. `Why is the core industry-neutral, and what goes in an industry pack instead?`
3. `Why can no prompt send, delete, pay, or approve anything? What is the argument against that rule?`
4. `What are the accepted costs of each decision?` — every ADR states them, and they are the most
   honest part of the document.

---

## 4. Getting more out of the notebook

**Ask it to disagree with you.** `What is the strongest argument against how I just described this?`
Comparison and critique questions produce better learning than recall questions.

**Ask for the failure mode, not the feature.** "What is prompt 011 for?" is a weak question. "What
would make prompt 011's output wrong in a way I would not notice?" is a good one.

**Chase every citation for the first week.** Click through and read the source line. It builds an
accurate sense of when the notebook is grounded and when it is stretching — and that judgement
transfers directly to using Gemini on real work.

**Use the Audio Overview for commuting**, not for studying. Good for the shape of an idea, weak on
the detail that actually matters here.

**Notice when it hedges.** If an answer is vague, usually the notebook is missing a source or you
asked something the library genuinely does not settle. Both are useful signals.

**A wrong answer is a finding.** If the notebook contradicts itself across two sources, that is a
real inconsistency in the library. Open an issue.

---

## 5. Checking yourself

You have got what you need when you can answer these without looking:

- [ ] What are the four parts of a prompt, and which one is mine to supply?
- [ ] What do I attach before running the prompt I use most, and what happens if I forget?
- [ ] Which core blocks apply to my most common prompt, and what does each prevent?
- [ ] What is my most-used prompt's risk label, and who reviews its output?
- [ ] Name three things that no prompt may ever do.
- [ ] How do I tell a data-quality problem from a business problem in a dashboard output?
- [ ] What are the two thirty-second reviewer questions?
- [ ] What must never be pasted into a Gemini prompt?
- [ ] When do I stop prompting and ask a person?

The last one matters most. The honest trigger: **you cannot tell whether the output is right, and
you would not notice if it were wrong.**

---

## 6. For whoever runs the training

- Build your own notebook first and work Path 1 end to end. You will find the questions your team
  will ask.
- Assign Paths 1 and 2 before anyone runs a Yellow or Red prompt on real work. Path 3 within the
  first month.
- Have each person bring one **sanitized** good output and one bad one to a group session. The bad
  ones teach more, and people relax considerably once they see everyone's first attempts failed the
  same way.
- Do not test on recall. Ask people to critique an output, or to argue a risk label. Recall of the
  risk table predicts nothing about whether someone will actually escalate.
- Re-run Path 5 with owners quarterly, alongside the prompt review cadence in
  [`risk-and-approval.md`](risk-and-approval.md).
