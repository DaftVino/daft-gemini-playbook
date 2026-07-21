# 048 — Executive Synthesis of Long Documents

- **Category:** Executive Leadership
- **Surface:** NotebookLM · Gemini app · Gemini in Docs
- **Risk:** Yellow
- **Owner:** Executive
- **Last reviewed:** 2026-07-21
- **Required sources:** @Source Materials — the authoritative set, and only that set
- **Core blocks:** Evidence

## When to use

A decision depends on material nobody has time to read end to end.

## Prompt

```text
Synthesize @Source Materials for [decision / topic].

Return, in this order:
1. Core argument — what the material collectively supports, in five sentences
2. Financial implications, with the figures and their sources
3. Operational implications
4. Risks and unknowns — including what the sources do not address
5. Key decisions needed, each phrased as a question with the options
6. Decision deadline, and what sets it
7. Recommended next step
8. Source list — for each material conclusion, the document and page it rests on

Keep the main brief to one page. Make an explicit distinction between what the sources establish
and what you are inferring: mark every inference as an inference. Where sources disagree, present
the disagreement rather than resolving it.
```

## Validation before use

- Spot-check the citations for the two or three conclusions that most affect the decision. This is
  the single most useful thing a reviewer does with this output.
- Confirm the source set is genuinely authoritative and complete. A synthesis of the wrong five
  documents is confidently wrong.
- Where sources disagree, resolve it with the document owners, not by choosing the more convenient
  version.

## Example follow-up

`What are the three facts most likely to change this conclusion, and which source would settle each?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Executive
