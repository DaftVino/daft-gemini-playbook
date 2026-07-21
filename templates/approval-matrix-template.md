# Approval Matrix — Template

<!--
Copy this into your Shared Drive reference folder, fill in every [bracketed] value, and name it so
it matches the @Approval Matrix reference used by the Red-tier prompts.

Do not commit a filled-in copy back to this repository — it will contain names, thresholds, entity
structure, and delegation limits. See docs/data-handling-rules.md.

Twenty prompts in this library carry a Red risk label, and each names an "authorized reviewer" by
role. Until this file exists and resolves those roles to people with stated limits, "the Controller
must approve" is a sentence rather than a control.
-->

- **Owner:** [Controller]
- **Approved by:** [role — typically the highest authority in the matrix]
- **Last reviewed:** [YYYY-MM-DD]
- **Review cadence:** Quarterly, and immediately on any change of personnel, entity structure, or
  banking arrangement

---

## How to use this

Every row answers three questions: **who may approve this**, **up to what limit**, and **who else
must be involved**. If a row cannot answer all three, it is not finished.

Two rules that make the rest work:

**Approval is a role, exercised by a named person.** Roles make the matrix survive turnover; names
make it actionable at 4pm on a Friday. Record both, and treat the names as the part that goes stale.

**Nobody approves their own request.** Where the natural approver is also the requester, the row
must name the alternate. This is the gap that audit findings are made of.

---

## Section 1 — Financial authority

| Transaction type | Up to [limit] | [limit] to [limit] | Above [limit] | Second approver required | Notes |
|---|---|---|---|---|---|
| Purchase commitment / PO | [role] | [role] | [role] | [above what value] | |
| Payment release | [role] | [role] | [role] | [above what value] | |
| **Bank detail or payment instruction change** | **Never delegated** | — | [role] | **Always — see prompt 080** | Voice callback to an independently sourced number is mandatory at every value, including zero |
| Capital expenditure | [role] | [role] | [role] | [above what value] | Prompt 020 prepares the case |
| Contract execution | [role] | [role] | [role] | [above what value] | Prompt 035 for renewal and notice terms |
| Write-off / credit / refund | [role] | [role] | [role] | [above what value] | |
| Journal entry / accounting adjustment | [role] | [role] | [role] | [above what value] | Prompts 017, 018, 078 prepare; they never post |
| Retention release / final payment | [role] | [role] | [role] | [above what value] | Prompt 092 |

State whether limits are **per transaction or per counterparty per period** — splitting a purchase
to stay under a limit is the oldest control failure there is, and prompt 082 looks for it.

## Section 2 — People authority

| Decision | Approver | Second approver | Must involve | Notes |
|---|---|---|---|---|
| Offer / hire | [role] | [role] | [HR lead] | |
| Compensation change | [role] | [role] | [HR lead, Payroll] | |
| Termination | [role] | [role] | [HR lead, and counsel where [conditions]] | |
| Formal disciplinary action | [role] | — | [HR lead] | No prompt in this library recommends discipline |
| Leave decision beyond policy | [role] | — | [HR lead] | |
| Off-cycle or manual payroll payment | [role] | [role] | [Payroll] | Always two people |
| Headcount addition | [role] | [role] | [Finance] | |

## Section 3 — Risk, legal and external

| Decision | Approver | Must involve | Notes |
|---|---|---|---|
| Any external legal position or dispute response | [role] | [counsel] | Prompts 001, 003, 061 prepare only |
| Statement about insurance coverage | [role] | [broker/carrier] | Never made from a certificate — prompts 007, 062 |
| Claim notice to a carrier | [role] | [broker, counsel where [conditions]] | Prompt 009 |
| Response to a government or regulator notice | [role] | [counsel] | Prompt 040 |
| Legal hold / preservation notice | [role] | [counsel] | Prompt 094 — suspend deletion first, approve after |
| Communication to a lender or board | [role] | [Controller confirms every figure] | Prompt 049 |
| Public or press statement | [role] | [counsel] | Prompt 090 |
| New vendor onboarding | [role] | [Controller] | Prompt 091 |

## Section 4 — Technology and access

| Decision | Approver | Second approver | Notes |
|---|---|---|---|
| Grant or change system access | [role] | [system owner] | Prompt 043 produces the reviewed list; it never changes access |
| Privileged / administrator access | [role] | [role] | Always two people |
| Financial or banking system access | [Controller] | [role] | Same-day removal on departure — prompt 093 |
| New software or SaaS adoption | [role] | [counsel for terms] | Prompt 044 |
| Production data change or restore | [role] | [role] | Prompt 095 |
| Enabling an automation that sends, moves, or updates records | [role] | [role] | Prompt 072 — draft-only first release |

---

## Section 5 — Delegation and absence

The section most often missing, and the reason approvals stall or get bypassed.

| Approver role | Delegate | Delegation limit | How delegation is recorded | Expires |
|---|---|---|---|---|
| [role] | [role] | [value or "same"] | [where] | [on return / date] |

Rules to state explicitly:

- Delegation is **recorded before** it is used, not reconstructed afterwards.
- A delegate may not exceed the delegator's limit.
- **Bank detail changes and privileged access are never delegated.** If the approver is unavailable,
  the transaction waits. Urgency is an attacker's tool, not a business requirement.
- When no delegate is available, the escalation is upward, never sideways.

## Section 6 — Current holders

Keep this as the only place names appear, so refreshing it is one edit rather than forty.

| Role | Name | Effective from | Backup |
|---|---|---|---|
| [role] | [name] | [date] | [name] |

Review this section on every personnel change. A matrix naming someone who left is worse than no
matrix, because it looks authoritative.

---

## How this connects to the prompts

The Red-tier prompts prepare work and hand it to a person named here. They never approve, and
nothing in this file changes that — see [ADR 0003](../docs/adr/0003-human-approval-boundary.md).

What this file adds is the answer to *which* person. When a prompt says "flag for the authorized
reviewer," this is the lookup that makes the instruction executable.

---

## Filling this in

- [ ] Every Red-tier prompt's named reviewer role appears in this matrix
- [ ] Every row states approver, limit, and second-approver condition
- [ ] Limits stated as per-transaction or per-counterparty-per-period, explicitly
- [ ] Self-approval prevented, with an alternate named for every role that could request
- [ ] Bank-detail changes marked never-delegated, with voice verification mandatory at any value
- [ ] Privileged access requires two people
- [ ] Delegation rules and expiry recorded
- [ ] Current holders section complete, with backups
- [ ] Tested against the last [N] approvals actually granted: did each go to someone this matrix
      says it should have? Disagreements show you either the wrong row or a real control gap.
- [ ] Saved under the exact name the prompts expect as `@Approval Matrix`
