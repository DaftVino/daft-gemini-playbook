# 098 — Meeting Agenda & Pre-Read Builder

- **Category:** Meetings & Collaboration
- **Surface:** Gemini in Docs · Gemini in Sheets
- **Risk:** Green
- **Owner:** Meeting owner
- **Last reviewed:** 2026-07-21
- **Required sources:** @Prior Meeting Actions, @Relevant Reports, @Open Decisions List
- **Core blocks:** Evidence

## When to use

Before a recurring meeting, to make it about decisions rather than a round of updates.

## Prompt

```text
Using @Prior Meeting Actions, @Relevant Reports, and @Open Decisions List, build an agenda and
pre-read for [meeting] on [date], lasting [duration].

Return:
(1) An agenda where every item is one of three types, labelled: **Decide**, **Discuss**, or
    **Inform**. Assign minutes to each, and **the times must sum exactly to [duration]** — show the
    running total. If they do not sum, cut items rather than compressing everything, and say what
    you cut. Inform items should total no more than a fifth of the meeting; anything else purely
    informational goes in the pre-read and is not discussed.
(2) For every Decide item: the decision, the options, the recommendation, who decides, and what
    they need to know. A decision item with no named decider will not be decided.
(3) A pre-read under two pages: the numbers, the changes since last time, and the open items —
    stated as facts, not as narrative
(4) Prior actions still open, with owner and age
(5) Items that do not need this meeting — resolvable by two people offline. Name them.
(6) What must be prepared before the meeting, by whom

Do not create an agenda item without a purpose and a time. Do not put a decision on the agenda if
the person who can make it is not attending — flag it instead.
```

## Validation before use

- Confirm the decision-makers for each Decide item are actually attending.
- Check section 5. Removing items is usually the highest-value output.
- Send the pre-read far enough ahead that it can be read, and say plainly that it will not be
  presented.

## Example follow-up

`Cut this to 30 minutes. What comes out, and how does each removed item get handled instead?`

## Change log

- 2026-07-21 — Created — Meeting owner
- 2026-07-21 — Agenda times must sum exactly to the meeting duration — Meeting owner
