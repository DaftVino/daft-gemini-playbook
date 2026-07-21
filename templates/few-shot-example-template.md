# Few-Shot Example Template

A worked good-input / good-output pair for one prompt. These teach faster than any amount of
prompt-engineering advice — a new manager learns by imitation, not by theory.

**Every example is synthetic.** Write plausible fictional data. Do not redact a real output;
redaction reliably misses something. See
[`docs/data-handling-rules.md`](../docs/data-handling-rules.md).

Save as `examples/NNN-slug-example.md`, matching the prompt's ID.

---

# Example — NNN [Prompt name]

- **Prompt:** NNN — link to `../prompts/<category>/NNN-slug.md`
- **Surface:** [where this was run]
- **Scenario:** [one line — what situation produced this]
- **Data:** Synthetic

## What was attached

| Source | What it contained |
|---|---|
| `@[Source 1]` | [shape of the data — "12 weeks × 8 sites, one row per site-week"] |
| `@[Source 2]` | [what it added] |

[Note anything that made this run non-obvious: a tab that had to be named explicitly, a merged
header row, a period mismatch between two sources.]

## The prompt as run

```text
[The prompt with its bracketed fields filled in with synthetic values.]
```

## The output

```text
[The output, trimmed to what is instructive. Keep the parts that show the format working; cut
repetition.]
```

## Why this is a good output

- [What it got right that a weaker output would miss — separated a data issue from a performance
  issue, refused to conclude on a thin source, named an owner rather than leaving it implicit.]

## What the reviewer still had to do

- [The human step. Every example must have one; an example with nothing left for a reviewer to do
  teaches the wrong lesson.]

## What went wrong the first time

[Optional but the most valuable section in the file. The first attempt usually fails in a specific,
teachable way: sources not attached, wrong tab, unbounded output, invented cause. Say what it was
and what fixed it.]
