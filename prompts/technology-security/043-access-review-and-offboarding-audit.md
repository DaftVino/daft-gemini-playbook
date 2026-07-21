# 043 — Access Review & Offboarding Audit

- **Category:** Technology, Data & Security
- **Surface:** Gemini in Sheets
- **Risk:** Red
- **Owner:** Technology lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @User or Role Roster, @System Access Export, @Termination and Transfer List, @Role Matrix, @Access Policy
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

Quarterly access review, after a wave of departures, or before an audit.

## Prompt

```text
Review @User or Role Roster, @System Access Export, @Termination and Transfer List, @Role Matrix,
and @Access Policy for [scope].

Return:
User ID / role | System | Current access | Required access per role matrix | Exception | Risk |
Owner | Removal or review date | Evidence

Prioritize in this order:
(1) Terminated users with active access — every one is an immediate finding, listed first with the
    termination date and days elapsed
(2) Transferred users retaining access from a prior role
(3) Privilege exceeding the role matrix
(4) Shared or generic accounts, and who uses them
(5) Stale administrative rights — admin access unused for [N] days
(6) Segregation-of-duties conflicts, stated as the specific combination that creates the conflict
(7) Accounts in the access export with no matching roster entry

Do not change access. Do not disable anything. This produces a reviewed removal list for an
authorized administrator to execute. Where the role matrix does not define the required access for a
role, or an account cannot be matched to a person or a service, state "Insufficient evidence to
conclude" and list it for review rather than inferring what the access should be.
```

## Validation before use

- **Authorized reviewer: Technology lead. Removals are executed by an administrator against the
  reviewed list, never directly from this output.**
- Verify terminated-user findings against HR records before any removal — an incorrect termination
  date in the source removes access from a current employee.
- Check for service and integration accounts before treating an unmatched account as orphaned.
  Disabling one breaks a running process, usually at the worst moment.
- Retain the completed review as the audit record.

## Example follow-up

`List only terminated users with active access, ordered by days elapsed, with the system and the risk for each.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Technology lead
