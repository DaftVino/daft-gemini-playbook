# Examples

Worked good-input / good-output pairs. A new user learns far faster by imitation than from advice
about prompting, and these are the fastest way to make a prompt adoptable.

**Everything here is synthetic.** Plausible fictional data, written for the purpose. Nothing is a
redacted real output — redaction reliably misses something, and this repository is treated as
public. See [`docs/data-handling-rules.md`](../docs/data-handling-rules.md).

## What makes a good example

Not the prettiest output. The **instructive** one:

- It shows the format working, so a user knows what to expect.
- It shows the prompt refusing to conclude on thin evidence — this is the behaviour people do not
  believe until they see it.
- It names what the human reviewer still had to do. Every example must have this section; it is the
  point.
- Where possible, it records what went wrong on the first attempt. That is usually the most useful
  paragraph in the file.

## Adding one

Copy [`templates/few-shot-example-template.md`](../templates/few-shot-example-template.md) to
`examples/NNN-slug-example.md`, matching the prompt's ID.

Aim for one per fast-path prompt first — **051, 052, 053, 057, 060, 064, 068, 075**. Those carry
the most first-time users.

## Index

| Prompt | Example |
|---|---|
| [051 — Daily Operations Dashboard](../prompts/operations-dashboards/051-daily-operations-dashboard.md) | [051-daily-operations-dashboard-example.md](051-daily-operations-dashboard-example.md) |
