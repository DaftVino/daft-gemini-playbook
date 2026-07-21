# 093 — IT Onboarding / Offboarding Provisioning Checklist

- **Category:** Technology, Data & Security
- **Surface:** Gemini in Docs · Gemini in Sheets
- **Risk:** Red
- **Owner:** Technology lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Role Matrix, @System Inventory, @Asset Register, @Access Policy, @Prior Onboarding Records
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

Building or auditing the provisioning process — not for a specific person's departure, which uses
the checklist this produces.

## Prompt

```text
Using @Role Matrix, @System Inventory, @Asset Register, @Access Policy, and @Prior Onboarding
Records, build provisioning checklists for [role or role family].

Return three checklists:

**Onboarding** — System or asset | Access level for this role | Who provisions | Prerequisite |
Target day relative to start | Evidence of completion

**Role change** — What is added, and critically **what is removed**. Access accumulated across
roles is the most common source of excessive privilege, and it accumulates because role changes
add without subtracting.

**Offboarding** — System or asset | Action (disable, transfer, revoke, collect) | Who performs |
Timing relative to the last day | Evidence | Verification by a second person

For offboarding, cover explicitly: identity and single sign-on, email and its forwarding or
delegation, file ownership transfer before the account is disabled, shared and service account
credentials the person knew, physical access and keys, devices, mobile and telephony, third-party
and vendor portals not covered by single sign-on, financial system and banking access, payment
cards, and any personal device holding organizational data.

Then list:
(1) Systems in @System Inventory not covered by any checklist
(2) Systems where provisioning is manual and therefore likely to be missed
(3) Access requiring same-day removal versus access that can follow the normal cycle

Do not change any access. This designs the process. Where the role matrix or the system inventory
does not establish what access a role needs, state "Insufficient evidence to conclude" and list it
as a question for the system owner rather than assuming a level.
```

## Validation before use

- **Authorized reviewer: Technology lead. Financial system, banking, and payment-card access is
  removed same-day and verified by a second person — this is the item that matters most.**
- Transfer file ownership before disabling an account, not after. Recovery afterwards is
  significantly harder.
- Third-party portals outside single sign-on are the most commonly missed category. Enumerate them
  deliberately.
- Audit against prompt 043 quarterly; a checklist is only as good as its compliance rate.

## Example follow-up

`Which offboarding items are currently manual, and what would it take to make each automatic or verified?`

## Change log

- 2026-07-21 — Created — Technology lead
