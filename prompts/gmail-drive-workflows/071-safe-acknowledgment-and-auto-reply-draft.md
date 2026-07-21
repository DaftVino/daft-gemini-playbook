# 071 — Safe Acknowledgment / Auto-Reply Draft

- **Category:** Gmail, Drive & Workflows
- **Surface:** Gemini in Gmail · Workspace Studio design
- **Risk:** Red
- **Owner:** Technology lead
- **Last reviewed:** 2026-07-21
- **Required sources:** The address or group, the allowed purpose, @Sample Messages
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

A shared address receives the same kind of message repeatedly and senders are waiting with no idea
whether anyone received it.

## Prompt

```text
Draft a narrowly scoped acknowledgment for messages sent to [address / group] about [allowed
purpose].

The reply may: confirm receipt, state the expected response time, and say what information the
sender should have ready.

The reply must not: accept liability, approve a payment, confirm coverage, commit to a repair,
agree to a deadline, make an employment decision, confirm a fact about our position, or promise any
outcome. It must not say "we will handle this" — that is a commitment.

Return:
(1) The approved reply text, under 80 words
(2) Explicit exclusions — phrases that must never appear
(3) Sender and subject criteria that qualify for this reply
(4) **Messages that must never receive this reply**: legal notices, government and tax notices,
    insurance and claims correspondence, payment or bank-detail requests, HR and personnel matters,
    security alerts, and anything from counsel
(5) A test set with expected outcomes, including messages that should not trigger it
(6) An approval checklist

Recommend draft-only automation before any automatic send. For a Google Group, distinguish internal
from external auto-replies — an external auto-reply is a communication from the organization.
```

## Validation before use

- **Authorized reviewer: Technology lead, with counsel for any externally visible auto-reply. An
  auto-reply is a statement by the organization to everyone who writes in.**
- Run draft-only for a full cycle first. Read every draft it would have sent.
- Confirm the exclusion list is enforced by the trigger criteria, not by hope.
- An auto-reply confirming receipt also confirms the date of receipt — check that this is acceptable
  for the message types in scope.

## Example follow-up

`Show me every sample message that would trigger this reply but should not, and tighten the criteria.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Technology lead
