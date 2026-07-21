# 103 — Multilingual Frontline Notice & Translation Check

- **Category:** Frontline Enablement
- **Surface:** Gemini in Docs · Gemini in Gmail
- **Risk:** Yellow/Red
- **Owner:** HR lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Source Notice, @Glossary of Approved Terms, @Prior Translated Materials
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

A notice, instruction, or safety message must reach a workforce that does not all read the same
language.

## Prompt

```text
Prepare [notice / instruction] for frontline distribution in [languages], using @Source Notice,
@Glossary of Approved Terms, and @Prior Translated Materials.

Return, for each language:
(1) The translated text
(2) A back-translation into English, produced independently of the source — this is what lets a
    non-speaker check the meaning survived, and it is the whole point of the exercise
(3) A note on every place where the meaning shifted, could not be preserved, or required a choice
(4) Terms taken from @Glossary of Approved Terms, and any term not in the glossary that should be
    added

Then, across all versions:
(5) Any sentence in the source that is hard to translate accurately — usually idiom, negation
    stacking, or an ambiguous pronoun. Recommend a rewrite of the **source**, since fixing it once
    fixes every language.
(6) Statements that carry a legal or safety consequence and must be verified by a qualified human
    translator before distribution
(7) Formatting notes: text expansion, reading direction, and anything that will break the layout

Use the register a frontline reader expects, not formal written register. Do not translate a legal,
safety, pay, or benefits statement without flagging it for human verification.
```

## Validation before use

- **Escalates to Red for any notice covering pay, benefits, safety, legal rights, or discipline.
  Authorized reviewer: HR lead, with a qualified human translator. Machine translation is a draft
  for these, never a deliverable.**
- Have a fluent speaker who does the actual work read it. Register matters as much as accuracy — a
  technically correct notice in the wrong register does not get read.
- Distribute all language versions together. A staggered release reads as a hierarchy.

## Example follow-up

`Rewrite the English source to remove the sentences that were hard to translate, keeping the meaning identical.`

## Change log

- 2026-07-21 — Created — HR lead
