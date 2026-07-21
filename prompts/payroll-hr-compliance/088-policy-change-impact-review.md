# 088 — Policy Change Impact Review

- **Category:** Payroll, HR & Compliance
- **Surface:** Gemini in Docs
- **Risk:** Yellow/Red
- **Owner:** HR lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Current Policy, @Proposed Policy, @Related Policies, @Affected Process Documents, @Training Materials
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

A policy is being revised, and the question is what else breaks.

## Prompt

```text
Compare @Current Policy and @Proposed Policy for [policy], then review @Related Policies,
@Affected Process Documents, and @Training Materials.

Return:
(1) A change table: Provision | Current | Proposed | Practical effect | Who is affected | Risk
(2) **Downstream impacts** — every other policy, process document, form, checklist, system
    configuration, and training material that references or depends on the changed provision. This
    is the output that matters; an updated policy with stale downstream material creates a
    contradiction that is worse than the original problem.
(3) Contradictions the change would create with another policy, quoted side by side
(4) What managers must do differently, stated as actions
(5) What must be communicated, to whom, and by when
(6) Records or evidence requirements that change
(7) Provisions requiring legal review before adoption
(8) An implementation checklist with owners

Do not assess whether the proposed policy is lawful or advisable. Identify what changes, what it
touches, and what needs review.
```

## Validation before use

- **Escalates to Red for any change affecting pay, hours, leave, classification, discipline, or
  termination. Authorized reviewer: HR lead with counsel before adoption.**
- Section 2 is routinely incomplete on the first pass. Search for references to the changed
  provision directly rather than relying on the model to have found them all.
- Effective dates and communication timing may have legal requirements. Confirm with counsel.

## Example follow-up

`List every document that references the changed provision, with what specifically must be updated in each.`

## Change log

- 2026-07-21 — Created — HR lead
