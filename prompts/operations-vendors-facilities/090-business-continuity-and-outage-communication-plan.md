# 090 — Business Continuity & Outage Communication Plan

- **Category:** Operations, Vendors & Facilities
- **Surface:** Gemini in Docs
- **Risk:** Yellow/Red
- **Owner:** Operations lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Site List, @Critical Systems and Vendors, @Escalation Directory, @Prior Incident Records, @Insurance Summary
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

Building the plan before it is needed, or during a live disruption when the plan does not exist.

## Prompt

```text
Using @Site List, @Critical Systems and Vendors, @Escalation Directory, @Prior Incident Records,
and @Insurance Summary, build a continuity and communication plan for [disruption type] affecting
[scope].

Return:
1. Impact assessment: what stops, what degrades, what continues — by function and by site
2. Manual fallback for each critical dependency, and how long it is sustainable. "Manual process"
   is not a fallback unless someone has written down what people actually do.
3. Decision points: who decides to close, to reduce hours, to divert, to invoke a vendor's
   contingency — with the criteria for each, decided now rather than under pressure
4. A communication matrix: Audience | Message owner | Channel | Timing | Approval required |
   What must not be said
   Audiences to include: staff on site, field leadership, executives, customers, vendors,
   landlords, insurers, and — where relevant — regulators
5. Draft holding messages for each audience, factual and commitment-free
6. Evidence and cost tracking to start immediately, for a potential claim — see prompt 009
7. Recovery criteria: what must be true to resume, and who confirms it
8. Post-event review triggers

Do not draft any external statement that admits cause, accepts liability, estimates a resumption
time we cannot support, or characterizes the event. Mark every external communication as requiring
approval.
```

## Validation before use

- **Escalates to Red for any external, customer, regulator, or insurer communication. Authorized
  reviewer: Executive, with counsel where liability or a regulator is involved.**
- Verify the escalation directory is current. A continuity plan with stale contacts is decorative.
- Start cost and evidence tracking on day one. Reconstructing it later is the most common reason
  claims underpay.
- Test the manual fallbacks before you rely on them.

## Example follow-up

`Give me the first hour: what happens, who decides what, and who is told, in order.`

## Change log

- 2026-07-21 — Created — Operations lead
