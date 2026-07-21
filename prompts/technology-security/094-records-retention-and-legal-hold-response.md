# 094 — Records Retention, Legal Hold & Information Request Response

- **Category:** Technology, Data & Security
- **Surface:** Gemini in Docs
- **Risk:** Red
- **Owner:** Technology lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Retention Schedule, @System Inventory, @Data Map, @Request or Hold Notice, @Access Policy
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

A legal hold, a subpoena, an audit request, or a data-subject request has arrived — or you are
building the retention schedule before one does.

## Prompt

```text
Using @Retention Schedule, @System Inventory, @Data Map, @Request or Hold Notice, and @Access
Policy, respond to [request or hold] covering [scope].

Return:
(1) Scope interpretation: what the request appears to cover, what it does not, and **what is
    ambiguous**. Do not resolve the ambiguity — list it for counsel. Over-collection and
    under-collection are both problems, and only counsel can set the line.
(2) A location map: for each category in scope — System | Custodian | Format | Date range held |
    Retention rule | Deletion or overwrite risk | How it is exported
(3) **Sources with an automatic deletion or overwrite cycle**, listed first with the time remaining.
    Mail retention, chat history, video, log rotation, and backup cycles destroy evidence on a
    schedule and are the reason holds fail.
(4) A preservation action list: what must be suspended, who executes it, by when, and how the
    suspension is evidenced
(5) Custodians to notify, and a draft hold notice — factual, with no characterization of the matter
(6) Collection sequence and the chain-of-custody record to keep
(7) Questions for counsel

Do not delete anything. Do not resume any suspended deletion. Do not assess the merits of the
request, whether it is valid, or whether an objection exists. Do not produce anything to any third
party. Where the data map does not establish whether a system holds material in scope, state
"Insufficient evidence to conclude" and treat it as in scope for preservation purposes until
counsel decides otherwise.
```

## Validation before use

- **Authorized reviewer: counsel, before any preservation notice is sent and before anything is
  produced. Nothing leaves the organization on the basis of this output.**
- Suspend automatic deletion first, before any other step. Everything else can be redone; destroyed
  records cannot.
- Backups are usually overlooked and usually in scope. Confirm the backup retention cycle
  explicitly.
- Log the suspension and its date. Proving preservation began promptly matters as much as
  preserving.

## Example follow-up

`List only the systems with automatic deletion in the next 30 days, with the suspension step and owner for each.`

## Change log

- 2026-07-21 — Created — Technology lead
