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
   written down. List these explicitly with what they consider. These are what makes the process
   undocumentable by anyone except them, and capturing them is the entire value of this exercise.
8. What can go wrong, how to tell, and what to do about it
9. Outputs and where they go
10. Records to retain
11. When to escalate, and to whom

Then:
(12) Gaps — steps referenced but not explained, and the questions that would close each
(13) Steps that exist only because of a system limitation or a historical reason, flagged as
     candidates for elimination rather than documentation

Do not invent a step to fill a gap in the source. An SOP with a plausible fabricated step is worse
than one with an acknowledged hole.
```

## Validation before use

- Have someone who has never done the task follow the SOP while the expert watches without helping.
  Every gap surfaces in about ten minutes, and nothing else finds them.
- Section 7 is the point. If it is empty, the interview was not deep enough — ask "how do you know
  when to do X?" until you get something other than "you just know."
- Do not document a step you should be eliminating. Check section 13 first.

## Example follow-up

`For each judgement call, what question would I ask to turn it into a written rule?`

## Change log

- 2026-07-21 — Created — Operations lead
