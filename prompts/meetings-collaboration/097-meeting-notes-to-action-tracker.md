# 097 — Meeting Notes to Action Tracker

- **Category:** Meetings & Collaboration
- **Surface:** Gemini in Meet · Gemini in Docs
- **Risk:** Yellow
- **Owner:** Meeting owner
- **Last reviewed:** 2026-07-21
- **Required sources:** @Meeting Notes or transcript, @Prior Meeting Actions, @Agenda
- **Core blocks:** Evidence

## When to use

Straight after any recurring meeting. This closes the most common gap in the whole library: work is
discussed, agreed, and never tracked.

## Prompt

```text
Convert @Meeting Notes or transcript, @Prior Meeting Actions, and @Agenda for [meeting / date] into
an action tracker.

Return four separate sections. Do not merge them.

**Decisions made** — Decision | Who decided | Rationale stated | Effective date
**Actions agreed** — Action | Owner | Due date | Success criterion | Dependency
**Open questions** — Question | Who can answer | Needed by
**Discussed, not decided** — Topic | Why it is unresolved | What would resolve it

Then:
(1) Prior actions from @Prior Meeting Actions: status, and for anything overdue, how many meetings
    it has now carried
(2) Actions with no owner or no date, listed as TBD for assignment — do not invent either
(3) Anything that was described as a decision but had no decision-maker present with the authority
    to make it. This is the most useful check the prompt performs and the reason agreed work does
    not get done.

Do not record a suggestion as a commitment. Do not attribute a view to someone unless the notes
show they said it. Where the notes are ambiguous about who owns something, say so.
```

## Validation before use

- Assign every TBD before circulating. A tracker full of TBDs trains people to ignore it.
- Confirm decisions with the person recorded as deciding, particularly where the meeting was large.
- Transcripts capture thinking aloud as if it were commitment. Check anything that reads as a firm
  commitment against what was actually agreed.
- Check whether recording and transcription were disclosed to attendees.

## Example follow-up

`Draft a short message to each owner listing only their actions and dates.`

## Change log

- 2026-07-21 — Created — Meeting owner
