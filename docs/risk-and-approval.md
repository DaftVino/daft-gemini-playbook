# Risk Labels and Approval Boundaries

Every prompt carries one of four labels. The label is not a warning sticker — it determines which
safety blocks the prompt must carry, who must review the output, and how often the prompt itself
is re-reviewed.

## The labels

| Label | Applies to | Required blocks | Output review | Prompt re-review |
|---|---|---|---|---|
| **Green** | Summaries, checklists, formatting, meeting notes, internal first drafts | None | Normal owner review | Annually |
| **Yellow** | Financial analysis, vendor disputes, lease/CAM review, payroll exceptions, site performance, workflow design | Evidence | Owner verifies sources, calculations, and assumptions | Quarterly |
| **Yellow/Red** | Prompts whose risk depends on what the user attaches — the same prompt can be routine or consequential | Evidence + domain block | Owner verifies; escalates to an authorized reviewer if a Red trigger is present | Quarterly |
| **Red** | Legal, tax, employment, insurance coverage, payments, bank-detail changes, security access, external or public statements | Evidence + Legal/People/Risk | **Authorized reviewer must validate and approve before any action or external use** | Quarterly, and after any policy, system, or provider change |

## How to assign a label

Work down this list and stop at the first match.

1. Could acting on a wrong output **move money, change access, change someone's pay or employment
   status, create a legal or coverage position, or reach someone outside the organization**?
   → **Red**.
2. Could a wrong output **mislead a decision that is expensive to unwind** — a budget, a
   renegotiation, an intervention with a site, a capital approval? → **Yellow**.
3. Does the risk depend entirely on which documents the user attaches? → **Yellow/Red**.
4. Otherwise → **Green**.

When two people disagree, take the higher label. The cost of an over-labelled prompt is one extra
review; the cost of an under-labelled one is an unreviewed decision.

## What Red obliges

A Red prompt must:

- Carry both the evidence block and the legal/people/risk block.
- Name the authorized reviewer **by role** in its *Validation before use* section — Controller,
  HR lead, counsel, broker, carrier, CPA, security owner.
- Explicitly forbid the conclusion that only the reviewer can draw. A coverage prompt says
  "do not state that a loss is covered, denied, or compliant"; a payroll prompt says "do not make
  pay changes"; an access prompt says "do not change access".
- Instruct Gemini to produce the **question to send to the reviewer**, not the answer. This is the
  single most useful reframing in the library: the model is very good at assembling a precise
  question and very bad at knowing whether it is authorized to answer it.

## The hard boundary — what no prompt may ever do

This applies to every label, including Green, and to every Gem and Studio flow built from the
library. See [ADR 0003](adr/0003-human-approval-boundary.md).

| Never automated or model-decided | Always requires a named human |
|---|---|
| Sending, forwarding, or auto-replying to external mail | Any external communication |
| Deleting, archiving, or moving records | Any irreversible change to a record |
| Authorizing or releasing a payment | Payment, refund, credit |
| Changing bank or payment instructions | Every bank-detail change, without exception |
| Posting a journal entry or accounting adjustment | Accounting entries |
| Making or recommending a pay, discipline, or employment decision | Employment decisions |
| Stating insurance coverage, denial, or compliance | Coverage positions |
| Giving legal or tax conclusions | Legal and tax positions |
| Granting, changing, or removing system access | Access changes |
| Representing the organization to a lender, board, regulator, landlord, or the public | External representations |

A prompt may **prepare** any of these — draft the message, build the entry for review, assemble the
evidence, list the access to remove. It may not conclude or execute.

## Escalation triggers inside a Yellow/Red prompt

A Yellow/Red prompt must tell the user what turns it Red. Standard triggers:

- A payment, refund, credit, or bank-detail change is implicated.
- The output would be sent outside the organization.
- A government body, regulator, insurer, lender, or counsel is a party.
- An individual employee is identifiable and the subject is performance, leave, medical, or conduct.
- The analysis contradicts a signed agreement or a stated policy.
- The dollar impact exceeds the approval threshold for the role running the prompt.

## Review cadence

- **Quarterly** for all Yellow and Red prompts, by the owning role.
- **Immediately** after a material change to policy, systems, providers, entity structure, or
  approval thresholds. A prompt that references a process which no longer exists is worse than no
  prompt, because it still looks authoritative.
- **Annually** for Green.
- A prompt not reviewed within two cadence periods moves to `prompts/retired/` rather than staying
  searchable as current guidance.

## Recording an approval

For Red outputs that lead to action, keep the record where the action lives — the payment file, the
claim file, the personnel file, the ticket — not in this repository. The minimum record is: what
was produced, which sources it used, who reviewed it, what they changed, and what was approved.
