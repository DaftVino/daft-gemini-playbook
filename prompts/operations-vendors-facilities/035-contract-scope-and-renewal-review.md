# 035 — Contract Scope & Renewal Review

- **Category:** Operations, Vendors & Facilities
- **Surface:** Gemini in Docs · NotebookLM
- **Risk:** Yellow/Red
- **Owner:** Operations lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Contract, @Amendments, @Invoices, @Usage or Performance Data, @Notice Calendar
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

A renewal or auto-renewal date is approaching, or the contract no longer matches what the vendor
actually does.

## Prompt

```text
Review @Contract, @Amendments, @Invoices, @Usage or Performance Data, and @Notice Calendar for
[vendor].

Extract, citing clause and page for each: scope of services, pricing and escalation mechanism,
term, renewal and auto-renewal mechanics, termination rights (for cause and for convenience),
notice deadlines and delivery method, service levels and remedies, data and security obligations,
change-control process, and assignment.

Return:
(1) The extracted commercial summary
(2) **The notice deadline, stated as a specific date, with the calculation shown** — including the
    required delivery method, since a notice sent the correct number of days early by the wrong
    method is not notice
(3) What we are billed for versus what the contract covers, with any difference
(4) A recommendation: Renew / Renegotiate / Re-tender / Terminate / Need More Data
(5) Negotiation priorities, ranked
(6) Owner and a draft communication
(7) Points requiring counsel review

Do not state a termination right without citing the clause. Do not infer a notice period from
convention.
```

## Validation before use

- **Verify the notice date and delivery method against the executed contract personally.** A missed
  notice date auto-renews the agreement, and this is the single highest-consequence output in the
  Operations category.
- Counsel reviews any termination-for-cause position before it is communicated.
- Confirm the amendment set is complete; amendments most often change exactly the terms this
  analysis turns on.

## Example follow-up

`Give me the calendar entries I should set, working backwards from the notice deadline, with owners.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Operations lead
