<!-- synthetic-data: reviewed 2026-07-22 -->

# Example — 057 Cash, Deposit & Paid-Out Exception Handoff

- **Prompt:** [057](../prompts/operations-dashboards/057-cash-deposit-and-paid-out-exception-handoff.md)
- **Surface:** Gemini in Sheets
- **Scenario:** Weekly cash review for one site, where four consecutive days are short by the same amount.
- **Data:** Synthetic

This is the first example in the library to carry **acceptance criteria** — a statement of what a
correct run must contain, written before the output is read. See [issue #11](https://github.com/DaftVino/daft-gemini-playbook/issues/11)
for why, and *Adding one* in [`README.md`](README.md) for what is not yet standardized.

## What was attached

| Source | What it contained |
|---|---|
| `@Cash Summary` | 7 rows, one per day. Expected cash by daypart, closing shift ID. |
| `@Deposit Log` | Site-recorded deposits: date, amount, bag number, who prepared it. |
| `@Bank Detail` | Bank-side credits with posting dates. Sunday's deposit is absent. |
| `@Safe Count` | Opening and closing safe counts. The Friday sheet was not submitted. |
| `@Paid-Out Detail` | 6 paid-outs, one with no receipt reference. |

Two things made this run non-obvious. The bank posts weekend deposits on the following business
day, so an absent Sunday credit is expected rather than a difference. And the missing Friday safe
count affects only the safe reconciliation — the Friday deposit difference is still independently
evidenced by the bank detail, so a model that greys out all of Friday has over-applied the rule.

## The prompt as run

```text
Review @Cash Summary, @Deposit Log, @Bank Detail, @Safe Count, and @Paid-Out Detail for Site A,
week ending [date]. Create an exception handoff for the site manager and the accounting reviewer.

Return:
Date | Status | Expected cash or deposit | Actual | Difference | Age (days) | Supporting record
missing | Required verification | Site owner | Accounting owner | Escalation date

Set Status by amount and age against the thresholds in the cash-handling policy: **Red** past the
escalation threshold, or any item in a recurring pattern, **Amber** outside tolerance but inside
the threshold, **Green** within tolerance, **Grey** where the supporting record has not yet been
located and the difference may not be real. Do not colour an item Red on amount alone if it is a
known deposit in transit.

Then separate into:
(1) Timing differences — deposits in transit, weekend and holiday effects
(2) Documentation gaps — a difference that may not be a difference once the record is found
(3) Unexplained differences, ordered by amount and age
(4) Paid-outs without supporting documentation or outside policy
(5) Patterns: the same site, the same day of week, the same shift, or the same amount recurring

Do not propose or post accounting entries. Do not attribute a difference to any individual. Flag
possible loss, duplicate, or timing items for review, and state which they are.
```

## Acceptance criteria

What a correct run must do. Written from the sources before the output is read, so the review is a
check rather than an impression. A run that misses any **must** is a failure regardless of how well
the rest reads.

### Facts it must extract

| # | Requirement | Why it matters |
|---|---|---|
| F1 | Identify all four short days — Wed, Thu, Fri, Sat — each $60.00 under | Missing one breaks the pattern and downgrades the finding |
| F2 | Report the total unexplained difference as **$240.00** | The single number a reviewer will act on |
| F3 | Classify Sunday's absent bank credit as a **timing** difference, not unexplained | It is the prompt's one named exception |
| F4 | Flag the paid-out with no receipt reference under paid-outs, not under cash differences | Different owner, different remedy |
| F5 | Name a site owner and an accounting owner for every row | An unowned exception is not a handoff |

### Facts it must mark unknown

| # | Requirement |
|---|---|
| U1 | The **cause** of the recurring shortfall. The sources support a pattern, not an explanation |
| U2 | The Friday safe reconciliation — Grey, supporting record not located |
| U3 | Whether the pattern represents loss, error, or process failure. All three remain open |

### Conditions it must escalate

| # | Requirement |
|---|---|
| E1 | Route the pattern to the **Controller directly**, not through the site manager |
| E2 | State that the output must not be used in a conversation about conduct |

### Arithmetic

| Check | Correct | A specific wrong answer to watch for |
|---|---|---|
| Total unexplained | **$240.00** | **$1,695.00** — Sunday's $1,455.00 in-transit deposit swept into the unexplained total. The most likely failure, and it inflates the finding sevenfold |
| Pattern span | 4 consecutive days | 5 days, if Sunday is counted as short |

### Must not

- Name, describe, or identify any individual, including by shift role.
- Propose or post an accounting entry.
- Assign a cause the sources do not support.
- Colour the Sunday item Red on amount alone.

### Run record

Not yet run against live sources. To be completed by the Controller on first use.

| Date | Run by | F1–F5 | U1–U3 | E1–E2 | Arithmetic | Must not | Verdict |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

## The output

```text
BUSINESS EXCEPTIONS

TIMING DIFFERENCES
Sun | Grey→Timing | $1,455.00 deposit | not yet credited | — | 1 | Bank credit
    | Confirm Monday posting. Weekend deposits post the following business day; this is expected.
    | Site manager | Accounting reviewer | If uncredited by Tue, escalate

DOCUMENTATION GAPS
Fri | Grey | Safe reconciliation | cannot be completed | — | 3 | Friday safe count sheet
    | Locate or re-create the count sheet. The Friday deposit difference below is separately
    | evidenced by the bank detail and is not affected by this gap.
    | Site manager | Accounting reviewer | —

UNEXPLAINED DIFFERENCES
Wed | Red | $1,976.20 | $1,916.20 | -$60.00 | 5 | — | Verify against bank credit | Site manager
    | Accounting reviewer | Immediate — see pattern
Thu | Red | $2,240.00 | $2,180.00 | -$60.00 | 4 | — | Verify against bank credit | Site manager
    | Accounting reviewer | Immediate — see pattern
Fri | Red | $2,610.40 | $2,550.40 | -$60.00 | 3 | — | Verify against bank credit | Site manager
    | Accounting reviewer | Immediate — see pattern
Sat | Red | $3,120.85 | $3,060.85 | -$60.00 | 2 | — | Verify against bank credit | Site manager
    | Accounting reviewer | Immediate — see pattern

Total unexplained difference: $240.00 over four days. The Sunday item above is a timing
difference and is excluded from this total.

PAID-OUTS
Tue | Amber | $185.00 paid-out | recorded | — | 6 | Receipt or vendor reference
    | Locate the receipt. Outside policy without one, but this is a documentation exception, not a
    | cash difference. | Site manager | Accounting reviewer | 5 days

PATTERNS
Four consecutive days short by an identical $60.00, all on the same closing shift. An identical
recurring amount is not consistent with a counting error, which varies. The data establishes the
pattern; it does not establish a cause, and loss, process failure, and a systematic recording
error all remain open.

Route to the Controller directly. Do not discuss with the site team. This is a verification list,
not a finding about any person, and it must not be used in a conversation about conduct.
```

## Why this is a good output

- **It kept the $1,455.00 out of the total.** This is the whole test. A model that reports $1,695.00
  produces a number seven times too large, and it is a plausible enough figure that a reviewer in a
  hurry will carry it into a conversation with the Controller.
- It greyed the Friday *safe reconciliation* without greying the Friday *deposit difference*. One
  missing record does not invalidate an independently evidenced fact.
- It stated what an identical recurring amount rules out — a counting error — while refusing to say
  what it rules in.
- It routed away from the site, unprompted by anything except the prompt's own instruction.

## What the reviewer still had to do

- Re-added the four differences by hand. Gemini's arithmetic across a filtered range is not
  something to take on trust, and $240.00 is the number that starts a conversation with the
  Controller.
- Confirmed the Sunday credit posted on Monday. Until that is checked, "timing" is a hypothesis.
- Retrieved the Friday safe count before treating the safe reconciliation as anything.
- Confirmed the closing-shift identifier actually maps to one shift and not to a default value the
  scheduling export writes when the field is blank — which would dissolve the pattern entirely.

## What went wrong the first time

The first run reported a total of $1,695.00 and listed five days as unexplained, having swept the
uncredited Sunday deposit into the pattern. It also gave the same weight to the missing Friday safe
count as to the four differences, so the handoff read as five separate problems of equal size
rather than one pattern with a documentation gap beside it.

The fix was in the sources, not the prompt: `@Bank Detail` had been attached as a filtered view
that hid pending credits, so from Gemini's position the Sunday deposit genuinely had not posted.
The prompt's timing rule cannot fire on evidence that is not there.

That is the general lesson, and it is why the acceptance criteria above name a specific wrong
answer rather than only the right one. The most dangerous failure in this prompt is not a refusal
or an obvious error — it is a confident, correctly formatted total that is wrong because a source
was attached in a state nobody checked.
