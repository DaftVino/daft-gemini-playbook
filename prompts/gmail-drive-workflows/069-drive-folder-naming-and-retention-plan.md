# 069 — Drive Folder, File-Naming & Retention Plan

- **Category:** Gmail, Drive & Workflows
- **Surface:** Gemini app · Gemini in Docs
- **Risk:** Yellow
- **Owner:** Technology lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Current Folder Inventory, @Sample Files, plus the team workflow
- **Core blocks:** Evidence

## When to use

Nobody can find anything, or a Shared Drive has become an archaeological site.

## Prompt

```text
Review @Current Folder Inventory, @Sample Files, and [team workflow]. Design a Shared Drive
structure that makes current work easy to find while keeping records controlled.

Return:
(1) Top-level folders — as few as possible
(2) Subfolder rules, and the depth limit
(3) A standard file-naming convention, with examples for each document type. Put the date first in
    ISO form so sorting works.
(4) Metadata to capture in a tracker rather than in the filename
(5) Owner and access model per top-level folder
(6) What belongs in a Shared Drive versus a personal Drive — anything the organization needs after
    someone leaves belongs in a Shared Drive, without exception
(7) Archival and retention approach by record type
(8) Duplicate-control rules
(9) A migration sequence that does not break active links: what moves, in what order, and how links
    are preserved

Include a "Do not store here" list covering credentials, payment-card data, government
identification numbers, and unnecessary employee or medical information.

Do not propose moving or deleting anything as part of this output. This is a design.
```

## Validation before use

- Migration breaks links. Confirm the sequence preserves them, and communicate before moving
  anything people use daily.
- Retention periods must be confirmed against actual record-retention requirements, not designed
  from convention — see prompt 094.
- Never delete during a migration. Archive, verify for a period, then delete separately.

## Example follow-up

`Give me a migration sequence in three phases, where each phase is reversible on its own.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Technology lead
