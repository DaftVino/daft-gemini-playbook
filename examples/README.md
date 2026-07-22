<!-- synthetic-data: reviewed 2026-07-22 -->

# Examples

Worked good-input / good-output pairs. A new user learns far faster by imitation than from advice
about prompting, and these are the fastest way to make a prompt adoptable.

**Everything here is synthetic.** Plausible fictional data, written for the purpose. Nothing is a
redacted real output — redaction reliably misses something.
See [`docs/data-handling-rules.md`](../docs/data-handling-rules.md).

## What makes a good example

Not the prettiest output. The **instructive** one:

- It shows the format working, so a user knows what to expect.
- It shows the prompt refusing to conclude on thin evidence — this is the behaviour people do not
  believe until they see it.
- It names what the human reviewer still had to do. Every example must have this section — one that
  shows a flawless output with nothing left to check teaches the wrong lesson.
- Where possible, it records what went wrong on the first attempt. That is usually the most useful
  paragraph in the file.

## Adding one

Copy [`templates/few-shot-example-template.md`](../templates/few-shot-example-template.md) to
`examples/NNN-slug-example.md`, matching the prompt's ID.

An example that carries specific figures — the kind that make it worth reading — needs a line at
the top attesting that they are invented:

```markdown
<!-- synthetic-data: reviewed 2026-07-21 -->
```

The sanitization check scans this directory. Without that line it will flag your figures, which is
the intended friction: the marker is a small, dated, reviewable claim that you wrote the numbers
rather than pasted them. It does not waive an address or a phone number — nothing does.
See [`docs/data-handling-rules.md`](../docs/data-handling-rules.md).

Aim for one per fast-path prompt first — **051, 052, 053, 057, 060, 064, 068, 075**. Those carry
the most first-time users.

## Acceptance criteria

One example so far — [057](057-cash-deposit-and-paid-out-exception-handoff-example.md) — carries an
**acceptance criteria** section: what a correct run must extract, what it must mark unknown, what it
must escalate, and the arithmetic with its answer. Written from the sources *before* the output is
read, so reviewing a run is a check rather than an impression.

The section that earns its place is **the named wrong answer**. It is easy to write down what a
correct output contains; the useful thing is the specific plausible failure — for 057, a total of
$1,695.00 instead of $240.00, arrived at by sweeping an in-transit deposit into the unexplained
column. A reviewer who has read that sentence catches it in seconds. One who has only read a list
of correct facts often does not, because the wrong total is correctly formatted and looks fine.

This is **not yet a required section** and is deliberately absent from
[`templates/few-shot-example-template.md`](../templates/few-shot-example-template.md). The shape has
not survived a real cycle with an owning role, and a convention standardized before it has been run
is one that gets worked around. [Issue #11](https://github.com/DaftVino/daft-gemini-playbook/issues/11)
tracks whether it generalizes.

Note what this is not: nothing here runs automatically. There is no way to drive
Gemini-in-Workspace from CI, so these are a human protocol with a scoring sheet — run by the owning
role, recorded in the file's run record.

## Index

| Prompt | Example | Acceptance criteria |
|---|---|---|
| [051 — Daily Operations Dashboard](../prompts/operations-dashboards/051-daily-operations-dashboard.md) | [051-daily-operations-dashboard-example.md](051-daily-operations-dashboard-example.md) | — |
| [057 — Cash, Deposit & Paid-Out Exception Handoff](../prompts/operations-dashboards/057-cash-deposit-and-paid-out-exception-handoff.md) | [057-cash-deposit-and-paid-out-exception-handoff-example.md](057-cash-deposit-and-paid-out-exception-handoff-example.md) | Yes — not yet run |
