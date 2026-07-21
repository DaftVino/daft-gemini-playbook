# 100 — Chat Space Escalation & Handoff Summary

- **Category:** Meetings & Collaboration
- **Surface:** Google Chat · Gemini app
- **Risk:** Yellow
- **Owner:** Space owner
- **Last reviewed:** 2026-07-21
- **Required sources:** The Chat space or thread, @Related Tickets
- **Core blocks:** Evidence

## When to use

A shift or on-call handoff, or when a long space conversation needs to become a record before it
scrolls away.

## Prompt

```text
Review the Chat space or thread for [space / period] and @Related Tickets. Produce a handoff
summary.

Return:
(1) Current state — what is happening right now, in three sentences
(2) Open items: Item | Raised by | Raised when | Current owner | Status | Blocked on | Next step
(3) **Items raised and never answered.** In a busy space these scroll past and are lost, and they
    are the reason handoffs fail.
(4) Decisions made in the space, with who made them. Note that a decision made in chat and recorded
    nowhere else is at risk — flag any that should be recorded elsewhere.
(5) Commitments made, with owner and timing
(6) Anything that should be a ticket rather than a chat thread
(7) What the incoming person needs to know first

Do not treat a message with reactions as agreement. Do not summarize away a disagreement. Where it
is unclear whether something was resolved, list it as unresolved.
```

## Validation before use

- Confirm section 3 with the people who raised those items; unanswered does not always mean
  unresolved.
- Decisions recorded only in chat should be moved to a durable record before the space rotates.
- Chat is informal. Read the summary for anything that reads as a commitment but was speculation.

## Example follow-up

`List only the items with no owner and no answer, with who should pick each one up.`

## Change log

- 2026-07-21 — Created — Space owner
