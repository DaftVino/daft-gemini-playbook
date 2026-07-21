# 044 — New Software / SaaS Risk Review

- **Category:** Technology, Data & Security
- **Surface:** Gemini in Docs
- **Risk:** Red
- **Owner:** Technology lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Vendor Proposal, @Security Documentation, @Contract, @Data Flow, @Integration Plan, @Current-State Process
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

Someone wants to buy or adopt a new system, ideally before they have already started using it.

## Prompt

```text
Assess [software / service] using @Vendor Proposal, @Security Documentation, @Contract, @Data Flow,
@Integration Plan, and @Current-State Process.

Return:
(1) A recommendation: Approve / Approve with Controls / Pilot / Decline / Need Information
(2) A risk register: Risk | Likelihood | Impact | Existing control | Required control | Owner
(3) Data assessment: what categories of data the service will hold, whether any of it is personal,
    financial, or regulated, where it is stored, who at the vendor can access it, and how it is
    deleted on exit
(4) Contractual controls present and absent: security obligations, breach notification and its
    timeframe, audit rights, data ownership, subprocessors, indemnity, limitation of liability,
    data return and deletion on termination
(5) Access and authentication requirements: single sign-on, multi-factor, provisioning and
    deprovisioning
(6) Implementation checklist
(7) Data-owner responsibilities after go-live
(8) The approval matrix path

Mark every criterion the documentation does not address as "Not addressed" and list it as a
question. Do not infer a security control from a marketing claim. Do not treat a compliance
certification as covering a control it does not cover.
```

## Validation before use

- **Authorized reviewer: Technology lead, with counsel for contract terms and the data owner for
  data classification.**
- Exit terms matter more than they appear at purchase. Confirm data return format and deletion
  obligations before approval, not at renewal.
- Where the service touches payment, payroll, or personal data, treat "Not addressed" as a blocker
  rather than a question.
- Shadow adoption is common: check whether the service is already in use before assessing it.

## Example follow-up

`Draft the security questionnaire covering only the items marked Not addressed.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Technology lead
