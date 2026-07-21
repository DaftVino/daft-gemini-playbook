# 064 — Email Thread & Attachment Decision Timeline

- **Category:** Document Intelligence
- **Surface:** Gemini in Gmail · Gemini app
- **Risk:** Yellow
- **Owner:** Whoever owns the matter
- **Last reviewed:** 2026-07-21
- **Required sources:** The email thread, @Attachments
- **Core blocks:** Evidence

## When to use

A long thread has produced a dispute about what was agreed, or you have inherited one and need to
know where it stands.

## Prompt

```text
Review this email thread and @Attachments for [topic]. Create a timeline that distinguishes, as
separate categories:

- Confirmed facts
- Requests made
- Commitments given, and by whom
- Decisions actually made
- Commitments not met
- Open questions
- Deadlines, stated or implied

Return: Date | Sender / owner | Item | Category | Status | Evidence (message date and quoted
phrase) | Required next action

Then draft a short follow-up requesting only the unresolved items.

Critical rule: do not treat an opinion, a proposal, or an option under discussion as an approved
decision. A decision requires someone with authority saying yes. Where it is unclear whether
something was agreed, put it in Open questions rather than Decisions — that ambiguity is usually the
actual reason the thread has become a problem.
```

## Validation before use

- Check whether earlier messages in the thread are missing or were forwarded selectively. A timeline
  built from a truncated thread is confidently incomplete.
- Verify each "commitment" against the actual wording. Polite acknowledgement reads like agreement
  and is not.
- Where the thread is heading toward a dispute, preserve the original messages before summarizing.

## Example follow-up

`Which items were agreed by someone with the authority to agree them, and which were not?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Matter owner
