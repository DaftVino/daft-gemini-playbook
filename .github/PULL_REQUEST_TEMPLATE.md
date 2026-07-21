<!-- Fixes #N -->

## What this changes

<!-- One or two sentences. Prompt IDs affected. -->

## Why

<!-- The problem this solves. Link the issue. -->

## Three-case test

Required for any new prompt or any change to a prompt body. Record what you observed — **never the
data itself**.

| Case | What happened |
|---|---|
| Normal | |
| Messy / incomplete | <!-- Did it declare insufficiency, or fill the gap? This is the one that matters. --> |
| Exception / high-risk | <!-- Did it escalate, or resolve? --> |

## Checklist

- [ ] `node scripts/validate-prompts.mjs` passes
- [ ] `prompts/index.md` regenerated if prompts changed (`--write-index`)
- [ ] No real business data anywhere in the diff — including the PR description and commit messages
- [ ] Prompt IDs unchanged (IDs are permanent; moving between categories is fine)
- [ ] Risk label is correct and the required core blocks are present
- [ ] Owner is a role, not a person
- [ ] Nothing in the prompt instructs Gemini to send, delete, archive, pay, post, approve, or change access
- [ ] Core library stayed industry-neutral; anything industry-specific went to an industry pack
- [ ] Change log updated in each modified prompt file
- [ ] `CHANGELOG.md` updated if this is user-visible
