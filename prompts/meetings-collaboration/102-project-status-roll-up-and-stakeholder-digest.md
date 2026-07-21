# 102 — Project Status Roll-Up & Stakeholder Digest

- **Category:** Meetings & Collaboration
- **Surface:** Gemini in Sheets · Gemini in Docs
- **Risk:** Yellow
- **Owner:** Project owner
- **Last reviewed:** 2026-07-21
- **Required sources:** @Project Tracker, @Prior Status Report, @Milestone Plan, @Risk Register
- **Core blocks:** Evidence, Data quality

## When to use

A periodic status update across several projects, where the goal is escalation rather than
reassurance.

## Prompt

```text
Using @Project Tracker, @Prior Status Report, @Milestone Plan, and @Risk Register, produce a status
roll-up for [portfolio / period].

Return:
(1) Portfolio summary: Project | Owner | Status | Next milestone | Due | Confidence | Change since
    last report
(2) **Projects whose status has not changed since the last report** — for two or more periods, this
    usually means stalled rather than steady, and it is invisible in a status colour
(3) Milestones missed, with how many times each has moved. A date that has moved three times is a
    planning problem, not a scheduling one.
(4) Projects where the reported status is inconsistent with the underlying task data
(5) Escalations needed: what is blocked, on whom, and for how long
(6) Risks that have materially changed
(7) A stakeholder digest under 300 words: what moved, what is at risk, what is needed from the
    reader
(8) Projects with no update at all this period

Report status from the task data, not from the summary field. Where a self-reported status
disagrees with the evidence, present both. Do not smooth over a slip.
```

## Validation before use

- Confirm section 4 with each project owner before circulating. A status that disagrees with its
  own task data is usually a reporting habit, not a deception.
- Missing updates are not "green." Chase them before publishing.
- The digest is for stakeholders; check it names what is needed from them, or they will not act.

## Example follow-up

`Which projects are stalled rather than steady, and what evidence distinguishes the two?`

## Change log

- 2026-07-21 — Created — Project owner
