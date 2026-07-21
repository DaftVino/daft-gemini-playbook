# 072 — Workspace Automation Requirements: Mail → Drive → Tracker → Escalation

- **Category:** Gmail, Drive & Workflows
- **Surface:** Gemini app · Workspace Studio design
- **Risk:** Yellow/Red
- **Owner:** Technology lead
- **Last reviewed:** 2026-07-21
- **Required sources:** A described process, plus samples of every input it consumes
- **Core blocks:** Evidence

## When to use

Before building anything in Workspace Studio. This produces the specification the build works from.

## Prompt

```text
Design an automation for this repeatable process: [describe process]. It begins when [trigger],
uses [Gmail / Drive / Sheets / Chat / Forms], and should produce [outcome].

Return:
1. Business purpose, and what stays manual
2. Trigger and filter criteria — exact, not descriptive
3. Source of truth for each data element
4. Data captured
5. Steps, in order
6. Decision rules, including the branch for a failed or empty AI step
7. Approvals
8. Exception queue, owner, and target response time
9. Failure notifications
10. Permissions and the identity the flow runs as
11. Audit log — what, where, retained how long
12. Privacy and security constraints
13. Test cases: normal, false positive, incomplete, high-risk
14. Rollback: how it is disabled and how affected items are recovered
15. Success metrics

Mark every external send, file move, record update, and escalation as **automatic**, **draft-only**,
or **approval-required**. For a first release, nothing may be automatic except labels,
notifications, tasks, and controlled copies.

Recommend a manual pilot before production, and say what the pilot must demonstrate.
```

## Validation before use

- **Escalates to Red where the process touches payments, payroll, personal data, legal notices, or
  external communication.**
- The failure branch is the section that gets skipped and the reason flows break silently. Check it
  exists and is specific.
- Confirm the run-as identity is an organizational account, not an individual's.
- Do not build until this specification has been reviewed and the pilot has run.

## Example follow-up

`What is the smallest version worth building, and what does it deliberately leave manual?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Technology lead
