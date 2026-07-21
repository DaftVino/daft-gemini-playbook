# 075 — Plain-Language "What Do I Do Next?" Interpreter

- **Category:** Frontline Enablement
- **Surface:** Gemini app · Gemini in Docs · Gemini in Gmail
- **Risk:** Green/Yellow
- **Owner:** Field leadership
- **Last reviewed:** 2026-07-21
- **Required sources:** @Policy, @Process, @Email Thread, or @Dashboard — whichever is the source
- **Core blocks:** Evidence

## When to use

Someone has been sent a policy, a thread, or a report and cannot tell what they are supposed to do
about it. This is the most useful prompt in the library for people who use AI least.

## Prompt

```text
Using @Policy, @Process, @Email Thread, or @Dashboard, explain what [role] should do next about
[topic]. Use short sentences and the words our team already uses.

Return only these headings, nothing else:

What happened
Why it matters
Do this now
Do this by [date]
Send or escalate to
What evidence to keep
When to stop and ask for help

Cite the source of each instruction — the policy section, the message date, the tab.

If the source does not answer the question, say "The source does not cover this" and name who to
ask. Do not fill the gap with a reasonable-sounding answer. Someone will follow it.
```

## Validation before use

- Check the instructions against the source. Plain language is where accuracy quietly degrades —
  the simplification that makes a policy readable is often the simplification that changes it.
- Confirm the escalation contact is current.
- "The source does not cover this" is the most valuable answer this prompt gives. Treat a complete
  answer to a partially documented question with suspicion.

## Example follow-up

`Now write it for someone who has been here two weeks and has not seen this policy before.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Field leadership
