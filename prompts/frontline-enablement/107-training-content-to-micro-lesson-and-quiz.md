# 107 — Training Content to Micro-Lesson & Quiz

- **Category:** Frontline Enablement
- **Surface:** Gemini in Docs · Gemini app
- **Risk:** Yellow
- **Owner:** HR lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Source Training Material, @Related Policy or SOP, @Performance Standards
- **Core blocks:** Evidence

## When to use

Training material exists, is too long to be used, and the knowledge it contains is needed on shift.

## Prompt

```text
Convert @Source Training Material, @Related Policy or SOP, and @Performance Standards into
micro-lessons for [role] on [topic].

Return, for each lesson:
1. Title, and the single thing someone can do after it that they could not before
2. Content — under 300 words, or 90 seconds of reading
3. One worked example from realistic day-to-day work
4. The most common mistake, and how to recognize it
5. Three check questions, each testing whether the person could **apply** the knowledge rather than
   recall it. "What would you do if…" beats "what is the policy on…" — the second is passed by
   people who cannot do the job.
6. The correct answer to each, with why the plausible wrong answers are wrong
7. The source section this lesson comes from

Then across the set:
(8) The sequence, and which lessons are prerequisites for others
(9) Content in the source that cannot be reduced without losing accuracy — usually safety, legal,
    or compliance material. Leave these at full length and say why.
(10) Content in the source that is no longer accurate against the current policy or SOP

Do not simplify a compliance or safety requirement into something easier to remember but wrong.
Where accuracy and brevity conflict, accuracy wins and the lesson gets longer.
```

## Validation before use

- HR verifies compliance and safety lessons against the source. Compression is where these fail.
- Section 10 is a finding about the source material and should be fixed there, not just in the
  lessons.
- Test the check questions on someone who does the job. Questions that everyone passes or everyone
  fails are not testing anything.

## Example follow-up

`Rewrite the check questions so someone who has memorized the policy but cannot do the job would fail.`

## Change log

- 2026-07-21 — Created — HR lead
