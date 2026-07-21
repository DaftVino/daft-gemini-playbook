# 084 — Recruiting Funnel & Interview Scorecard Builder

- **Category:** Payroll, HR & Compliance
- **Surface:** Gemini in Docs · Gemini in Sheets
- **Risk:** Yellow
- **Owner:** HR lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Job Description, @Applicant Tracking Export, @Prior Interview Notes, @Performance Standards
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

A role is open and interviews are being run from memory and instinct.

## Prompt

```text
Using @Job Description, @Applicant Tracking Export, @Prior Interview Notes, and @Performance
Standards for [role]:

Part 1 — Funnel analysis
Return: Stage | Count | Conversion to next stage | Median days in stage | Drop-off reason where
recorded. Identify the stage where the process is actually losing candidates, and where time is
being lost. Note stages with no data.

Part 2 — Interview scorecard
For each essential duty in the job description, produce:
Competency | Why it matters for this role | Interview question (behavioural, past-tense) |
What a strong answer contains | What a weak answer contains | Rating scale anchors

Rules for the questions:
- Ask about what the candidate has actually done, not what they would do
- Every question must map to a duty in the job description
- Do not generate any question about age, family or caring responsibilities, health or disability,
  pregnancy, religion, national origin, citizenship beyond authorization to work, marital status,
  criminal history where restricted, or salary history where restricted
- Flag any question that touches an area where local law varies, for HR review

Part 3 — A structured debrief template that captures evidence against each competency rather than
overall impressions.
```

## Validation before use

- HR reviews every question before use. Permissible interview questions vary by jurisdiction and
  this prompt cannot know yours.
- The same questions and the same scale are used for every candidate for a role. Consistency is
  what makes a scorecard defensible.
- Interview notes are retained per the records policy; they are discoverable.

## Example follow-up

`Rewrite the questions so each one asks for a specific past example with a measurable outcome.`

## Change log

- 2026-07-21 — Created — HR lead
