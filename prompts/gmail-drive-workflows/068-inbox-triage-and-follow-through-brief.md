# 068 — Inbox Triage & Follow-Through Brief

- **Category:** Gmail, Drive & Workflows
- **Surface:** Gemini in Gmail
- **Risk:** Yellow
- **Owner:** Mailbox owner
- **Last reviewed:** 2026-07-21
- **Required sources:** A date range, label, or search defining the messages
- **Core blocks:** Evidence

## When to use

Returning from time away, or any morning where the inbox has become the day's agenda by default.

## Prompt

```text
Review emails from [date range / label / search] and produce a follow-through brief.

**Do not delete, archive, label, send, or forward anything.** This is a read-only analysis.

Return five sections:
- Do today
- Waiting on others
- Delegate
- Read / reference
- No action

For each item: sender, subject, deadline (stated or implied), business impact, recommended owner,
and a one-sentence next step.

Put at the top, above the sections, anything involving money, legal or compliance, customer impact,
personnel, security, or a deadline inside [N] days.

Then list separately: items where I have committed to something and not yet done it. These are the
ones that damage relationships, and they hide in the middle of a thread.

Draft replies only for the items I explicitly select afterwards.
```

## Validation before use

- Verify nothing was archived or modified. Read-only means read-only, and Gemini in Gmail can act.
- Check the "no action" bucket before dismissing it — misclassification there is the one that costs
  something.
- Deadlines inferred from tone rather than stated should be confirmed.

## Example follow-up

`Draft replies for items 2, 5, and 7 only. Keep each under 80 words and commit to nothing beyond acknowledging.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Mailbox owner
