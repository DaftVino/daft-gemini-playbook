# 104 — SOP Writer From Existing Practice

- **Category:** Frontline Enablement
- **Surface:** Gemini in Docs
- **Risk:** Yellow
- **Owner:** Operations lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Process Notes or Interview Transcript, @Related Policy, @System Screenshots, @Existing Partial Documentation
- **Core blocks:** Evidence

## When to use

A process exists only in one person's head, and that person is going on leave, changing role, or
leaving.

## Prompt

```text
Turn @Process Notes or Interview Transcript, @Related Policy, @System Screenshots, and @Existing
Partial Documentation into a standard operating procedure for [process].

Return:
1. Purpose and when this procedure applies
2. Who performs it, and what access or authority they need
3. Frequency and timing
4. Inputs required before starting
5. Steps, numbered, each one a single action with an observable result
6. Decision points: the condition, the options, and who decides
7. **Judgement calls** — the steps where the experienced person decides based on something not
   written down. List these explicitly, with what they weigh. These are what makes the process
   reproducible by someone else, so treat them as required output rather than as an appendix.
8. What can go wrong, how to tell, and what to do about it
9. Outputs and where they go
10. Records to retain
11. When to escalate, and to whom

Then:
(12) Gaps — steps referenced but not explained, and the questions that would close each
(13) Steps that exist only because of a system limitation or a historical reason, flagged as
     candidates for elimination rather than documentation

Write steps 5 to 11 to be followed by someone doing the task for the first time: sentences under 15
words, one action per step, each starting with a verb, everyday words rather than internal jargon.
Roughly a grade-6 reading level. Keep exact system, screen, field, and equipment names as they
appear to the user — the person needs to match your words to what is in front of them.

Do not invent a step to fill a gap in the source. An SOP with a plausible fabricated step is worse
than one with an acknowledged hole.
```

## Validation before use

- Have someone who has never done the task follow the SOP while the expert watches without helping.
  Every gap surfaces in about ten minutes, and nothing else finds them.
- If section 7 is empty, the interview was not deep enough. Ask "how do you know when to do X?"
  until you get an answer other than "you just know."
- Do not document a step you should be eliminating. Check section 13 first.

## Example follow-up

`For each judgement call, what question would I ask to turn it into a written rule?`

## Change log

- 2026-07-21 — Created — Operations lead
- 2026-07-21 — Added explicit reading-level constraint (sentences under 15 words, verb-first steps) — Field leadership
