# 099 — Leadership Deck Builder

- **Category:** Meetings & Collaboration
- **Surface:** Gemini in Slides · Gemini in Docs
- **Risk:** Yellow/Red
- **Owner:** Executive
- **Last reviewed:** 2026-07-21
- **Required sources:** @Source Analysis (a finished Doc or Sheet), @KPI Pack, @Prior Deck
- **Core blocks:** Evidence, Finance

## When to use

Turning a completed analysis into a presentation. **Not** for producing analysis — a number should
never appear first in a deck.

## Prompt

```text
Build a [N]-slide deck for [audience] from @Source Analysis, @KPI Pack, and @Prior Deck.

Every figure must come from the attached sources. Do not calculate, estimate, round, or derive a
new number. If something needed for the story is not in the sources, add a slide note saying what
is missing rather than supplying it.

Return, per slide:
Slide number | Headline — a full sentence stating the point, not a topic label | Content | Source
for every figure | Speaker note

Structure:
1. The single message, stated in one sentence
2. Where we are — the numbers, with the comparison basis stated
3. What changed and why
4. Risks and what would change them
5. Decisions requested, with the options and the recommendation
6. What happens next, with owners and dates

Then:
(1) An appendix list — the supporting detail to have ready but not to present
(2) The three questions this deck invites, with the evidence-based answer to each
(3) Every claim in the deck not directly supported by an attached source

Do not use a headline that states a conclusion the source does not support. Do not present a range
as a point estimate.
```

## Validation before use

- **Escalates to Red for board, lender, or any external audience. Authorized reviewer: Executive,
  with the Controller confirming every figure — see prompt 049.**
- Check section 3 before presenting. Unsupported claims are the ones that get questioned.
- Verify comparison bases are stated. A number without its basis is the most common way a deck
  misleads without anyone lying.

## Example follow-up

`Rewrite every headline as a complete sentence that states the point, and flag any I cannot support.`

## Change log

- 2026-07-21 — Created — Executive
