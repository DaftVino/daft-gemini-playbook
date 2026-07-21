# 101 — Form Design for Field Data Collection

- **Category:** Meetings & Collaboration
- **Surface:** Gemini app · Gemini in Docs
- **Risk:** Yellow
- **Owner:** Process owner
- **Last reviewed:** 2026-07-21
- **Required sources:** @Current Process, @Sample Submissions, @Downstream Report or Tracker
- **Core blocks:** Evidence, Data quality

## When to use

Designing a Google Form that sites will complete repeatedly, before the bad data starts arriving.

## Prompt

```text
Design a Google Form for [process], collected by [role] at [frequency], using @Current Process,
@Sample Submissions, and @Downstream Report or Tracker.

Work backwards from the downstream report: every question must produce a field the report actually
uses. Questions that produce data nobody uses are the reason submissions get rushed.

Return:
(1) Question list: Question text | Type | Required | Validation | Options | Why it is needed |
    Downstream field
(2) Question order and sections, grouped the way the work is actually done on site rather than the
    way the report is structured
(3) Validation rules: ranges, formats, and required combinations that prevent the errors visible in
    @Sample Submissions
(4) **Questions to remove** — anything in the current process that the downstream report does not
    consume, is derivable from another answer, or is answered the same way every time
(5) Free-text fields, and for each, why structured options will not work. Free text is where
    analysis dies; justify each one.
(6) The response sheet structure, with field names matching the downstream report
(7) Submission rules: who, when, what a late submission triggers
(8) A completeness check to run against responses — see prompt 073

Do not collect personal, medical, or sensitive information unless the process requires it, and flag
it for review if it does. Do not ask for a value the submitter cannot know at the time they submit.
```

## Validation before use

- Have someone complete the form on a phone, on site, in the real conditions. Length and field
  types that are fine on a desktop are not.
- Confirm every question maps to a downstream field before publishing.
- Changing a form after collection starts breaks the response sheet. Get it right first.

## Example follow-up

`Which questions could be eliminated by deriving the answer from another field or a system we already have?`

## Change log

- 2026-07-21 — Created — Process owner
