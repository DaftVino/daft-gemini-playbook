# Incident Severity Matrix — Template

<!--
Copy this into your Shared Drive reference folder, fill in every [bracketed] value, and name it so
it matches the @Severity Matrix reference in prompt 041.

Do not commit a filled-in copy back to this repository — it will contain site counts, response
commitments, and escalation roles specific to your organization. See docs/data-handling-rules.md.

Values marked "starting point" are drafting defaults, not measurements. The Technology lead sets
the real ones. A matrix nobody adjusted is a matrix nobody owns.
-->

- **Owner:** [Technology lead]
- **Approved by:** [role]
- **Last reviewed:** [YYYY-MM-DD]
- **Review cadence:** Quarterly, and after any Sev 1 or any incident whose severity was disputed

---

## How to use this

Severity answers one question: **how much of the business is impaired right now?**

It does not describe the cause, the difficulty of the fix, how long it has been going on, or whose
fault it is. Those are all real questions and none of them belong here — a hard fix for a minor
problem is still minor, and a trivial fix for a total outage is still Sev 1.

Assign severity in three steps:

1. Find the row in **Section 1** matching the scope and the function impaired.
2. Apply any **Section 2** override. Overrides always win, regardless of scope.
3. Apply the **Section 3** obligations for that level, and do them.

**When two rows could apply, take the higher.** When you cannot tell, take the higher and downgrade
later with evidence. Under-declaring is the failure mode that costs money; over-declaring costs one
uncomfortable conversation.

---

## Section 1 — The grid

Read scope across, function down. `[Adjust]` marks a cell where your operating reality may differ.

| Function impaired ↓ / Scope → | **All sites / enterprise** | **Region or multiple sites** | **Single site** | **Individual users** |
|---|---|---|---|---|
| **Cannot transact** — orders, payments, or service delivery stopped | Sev 1 | Sev 1 | Sev 2 `[Adjust]` | Sev 3 |
| **Degraded service** — can operate, but manually, slowly, or at risk | Sev 2 | Sev 2 | Sev 3 | Sev 4 |
| **Back office blocked** — payroll, payments, close, reporting cannot proceed | Sev 2 | Sev 2 | Sev 3 | Sev 3 |
| **Non-blocking** — inconvenience, cosmetic, workaround is normal practice | Sev 3 | Sev 3 | Sev 4 | Sev 4 |

**Single-site "cannot transact" is Sev 2, not Sev 3.** If a site cannot take payment it is
effectively closed, and closure is a revenue and reputation event regardless of how few sites are
involved. Raise it to Sev 1 if the site is [flagship / high-volume / a site whose closure triggers
external notification]. `[Adjust]`

**Scope is measured now, not at peak.** An incident spreading across sites is re-assessed as it
spreads. Say so explicitly in the update rather than leaving the original level standing.

---

## Section 2 — Overrides

These bypass the grid entirely. Scope is irrelevant; one affected user is enough.

### Immediate Sev 1

| Trigger | Why it overrides |
|---|---|
| Any indication of **unauthorized access** or credential compromise | Scope is unknown until investigated, and unknown scope is treated as maximum scope |
| Suspected or confirmed **exposure of personal, payroll, or payment data** | Notification clocks may already be running |
| **Payment card or banking system** compromise, or a suspected fraudulent payment instruction | Money moves faster than triage — see prompt 080 |
| **Safety or life-safety system** failure — fire, security, refrigeration where product safety depends on it, emergency communications | Consequence is not financial |
| **Evidence is being lost in real time** — logs rotating, footage overwriting, a system about to be rebuilt | Preservation cannot be done retroactively |
| A **regulator, law-enforcement, or legal hold** notice arrives that relates to a live incident | See prompt 094 |

For any of these, **preserve evidence before remediating.** Rebuilding the affected system destroys
the record of what happened. If the two conflict, the Technology lead decides, not the responder.

### Minimum Sev 2

| Trigger |
|---|
| **Payroll cannot run** on schedule, or payroll data integrity is in question |
| A **statutory, contractual, or filing deadline** is put at risk |
| **Period close** is blocked and the close date is within [N] business days `[Adjust]` |
| An **external commitment** — customer, landlord, lender, board — is put at risk |
| A **vendor declares an incident** on a system we depend on, before we have assessed our own impact |
| The incident is **visible to customers** or has been mentioned publicly |

---

## Section 3 — What each level obliges

Values below are **starting points.** Set them to what you can actually sustain — a commitment that
is missed every time is worse than a longer one that is met.

| | **Sev 1** | **Sev 2** | **Sev 3** | **Sev 4** |
|---|---|---|---|---|
| Plain meaning | Business stopped, or unknown-scope security event | Significant impairment, or a deadline at risk | Localized or degraded, workaround exists | Minor, scheduled |
| Acknowledge within | [15 min] | [1 hour] | [4 business hours] | [1 business day] |
| Update cadence | [Every 30 min] | [Every 2 hours] | [Daily] | [At change] |
| Out-of-hours response | Yes, immediately | Yes if during or before trading hours `[Adjust]` | Next business day | Next business day |
| Who is notified at declaration | [Technology lead, Executive, affected function owners] | [Technology lead, affected function owner] | [Technology lead] | [Queue owner] |
| Who may declare | Anyone | Anyone | [Technology lead or function owner] | [Queue owner] |
| Who may downgrade or close | [Technology lead] only | [Technology lead] only | [Assigned owner] | [Assigned owner] |
| Evidence preservation | Required before remediation | Required | If security-adjacent | No |
| Written incident record | Required — prompt 036 | Required | If recurring | No |
| Post-incident review | Always | If deadline missed or recurring | If third recurrence | No |

**Anyone may declare Sev 1.** Restricting declaration to senior roles means the person who sees it
first waits for someone who is asleep. Restricting *downgrade* is what prevents inflation.

---

## Section 4 — Downgrading and closing

Severity drops when **impact** drops. Not when the cause is understood, not when a fix is deployed,
and not because the incident has gone on a long time and lost its urgency.

Requirements to downgrade:

- Stated evidence that impact has genuinely reduced — a measurement, not an assurance.
- Named person authorizing it, per Section 3.
- Recorded in the incident record with a timestamp.
- **A workaround is not a resolution.** An incident running on a manual workaround is at most one
  level lower, never closed, because the workaround is itself fragile and usually undocumented.

For Sev 1 security overrides, severity does not drop until scope has been **established**, not
merely until nothing further has been observed. Absence of evidence is not evidence of containment.

---

## Section 5 — What this matrix does not decide

- **Vendor response obligations.** Those come from the contract, and a vendor's severity scale is
  usually not ours. Where they differ, track both and cite the contractual one when escalating —
  see prompt 031.
- **Root cause.** Do not assign severity from a suspected cause. Causes change during an incident;
  impact is observable now.
- **Fault or accountability.** Nothing in this document supports a conversation about performance.
- **Whether to communicate externally.** That is a separate decision with its own approver — see
  prompt 090.

---

## Section 6 — How this goes wrong

The failure modes this matrix exists to prevent, worth reading once before you need it:

- **Assigning severity from how hard the fix looks.** The most common error. Difficulty is a
  resourcing question, not an impact one.
- **Nobody declares.** Everyone assumes someone more senior already has. This is why anyone may
  declare Sev 1.
- **Severity set once and never revisited** as an incident spreads or contracts.
- **A single site dismissed as minor** when that site is closed as a result.
- **Downgrading because it has been quiet**, rather than because impact was measured.
- **Treating a vendor's "resolved" as our resolution** without verifying from our own monitoring.
- **Security events triaged on observed scope** rather than unknown scope. Unknown is maximum until
  investigated.

---

## Filling this in

- [ ] Every `[bracketed]` value replaced, including all of Section 3
- [ ] `[Adjust]` cells reviewed against how your sites actually operate
- [ ] Trading-hours definition stated, including differences by region
- [ ] Escalation roles resolve to a working contact path — check against the escalation directory
- [ ] Section 2 overrides reviewed with the Controller (payment, payroll) and HR (personal data)
- [ ] Named owner and approver recorded at the top
- [ ] Saved to the reference folder under the exact name prompt 041 expects as `@Severity Matrix`
- [ ] Tested against your last three real incidents: does the matrix produce the severity you
      would, in hindsight, have wanted? Disagreements are how you find the cells that are wrong.
