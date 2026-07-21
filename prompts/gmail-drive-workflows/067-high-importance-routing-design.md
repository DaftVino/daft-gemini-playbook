# 067 — "Never Miss It" High-Importance Routing Design

- **Category:** Gmail, Drive & Workflows
- **Surface:** Gemini in Gmail · Gemini app
- **Risk:** Red
- **Owner:** Technology lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Representative Emails, plus the role's responsibilities
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

Something consequential was missed in an inbox, and the response should not be "check email more
often."

## Prompt

```text
Using @Representative Emails and the responsibilities of [mailbox / team], design a
high-importance routing rule set.

Define high importance as: **time-sensitive, consequential, and requiring human action.** It does
not mean "sent by a senior person" — seniority-based rules are the most common design error here and
they train people to ignore the signal.

Return:
Trigger pattern | Why it qualifies | Route (keep in Inbox / label / star / create task / Chat
escalation / manual review) | False-positive risk | Human owner | Maximum response time | Test
examples

Include a **separate, explicit escalation path** for each of: payment or bank-detail change
requests, tax and government notices, insurance and claims correspondence, lease and landlord
notices, HR and legal matters, security alerts, and customer or business interruption.

Every automatic action must be reversible. No rule may send, archive, delete, or forward. Human
review is required before any external communication or financial action.

Finally, state the expected daily volume of each rule. A rule that fires 40 times a day is not a
high-importance rule.
```

## Validation before use

- **Authorized reviewer: Technology lead. Payment and bank-detail routing must additionally be
  reviewed by the Controller — see prompt 080.**
- Test with real historical mail before enabling. Measure the false-positive rate; above roughly
  one in ten, the signal is worthless.
- Notification is the outcome. A high-importance rule that handles the message defeats its purpose.
- Review quarterly. Sender patterns change and rules silently stop matching.

## Example follow-up

`Which of these rules would have caught the message we missed, and which would have added noise?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Technology lead
