# KPI Definitions & Targets — Template

<!--
Copy this into your Shared Drive reference folder, fill in every [bracketed] value, and name it so
it matches the @KPI Definitions reference in prompts 051 and 059.

Do not commit a filled-in copy back to this repository — it will contain your targets, thresholds,
and site groupings. See docs/data-handling-rules.md.

This is the highest-leverage reference file in the set. Prompts 051, 052, 055, and 057 read
thresholds from it to set their RAG Status bands; without it those columns come back blank, which
is correct behaviour and also means the prompts are doing half their job.
-->

- **Owner:** [Finance lead] with [Operations lead]
- **Approved by:** [role]
- **Last reviewed:** [YYYY-MM-DD]
- **Review cadence:** Quarterly, and whenever a target changes mid-year

---

## How to use this

One row per KPI. A metric that is not in this file has no agreed definition, which means two people
reporting it will disagree and both will be right.

The columns exist for specific reasons:

- **Definition as implemented** is what the formula actually computes, not what the name suggests.
  Where they differ, the formula wins and the row is a defect to fix — see prompt 059.
- **Denominator** is broken out because it is the single most common source of two people getting
  different numbers from the same data. State it explicitly even when it seems obvious.
- **Target** is what good looks like. **Escalation threshold** is the point at which someone must
  act. They are different numbers and conflating them produces either alert fatigue or silence.
- **Comparable across** stops the trend analysis nobody should be doing — a metric whose
  denominator changed mid-year cannot be compared to last year, however tempting the chart is.

---

## The definitions table

| KPI | Definition as implemented | Denominator | Source (system, report, tab) | Refresh timing | Target | Escalation threshold | Comparable across | Owner |
|---|---|---|---|---|---|---|---|---|
| [Metric name] | [The actual formula in words] | [What it divides by] | [System → report → tab] | [Daily 06:00 / on close / manual] | [Value] | [Value or condition] | [Sites / periods / neither, and why] | [role] |
| | | | | | | | | |

Fill one row per metric your prompts reference. At minimum, cover every metric that appears on the
dashboards used by 051, 052, and 055.

### Worked row, for shape only — replace entirely

| KPI | Definition as implemented | Denominator | Source | Refresh | Target | Escalation | Comparable across | Owner |
|---|---|---|---|---|---|---|---|---|
| Labor cost % | Total labor cost including taxes and benefits, divided by net sales for the same period | Net sales, **not** gross — excludes discounts and returns | [System] → [report] → tab `[name]` | Daily, [time], for the prior business day | [target] | [threshold], or [N] consecutive periods off target | Sites of the same [format/size band]; **not** comparable to periods before [date] when benefits were added to the numerator | [role] |

---

## Threshold-setting notes

Getting these two numbers right matters more than the definitions, because they drive what the
prompts actually surface.

**Target** — what the business is aiming at. It can be aspirational.

**Escalation threshold** — the point where an exception is genuinely worth a manager's attention
today. It cannot be aspirational. Set it by asking: *if every site sitting past this line got a
call this week, would that be a reasonable number of calls?* If the answer is "we'd be calling
everyone," the threshold is too tight and the prompts will produce noise that trains people to
ignore them.

A useful second form: **[N] consecutive periods off target** rather than a single-period value.
Direction and persistence catch deteriorating sites earlier than a single-period breach, which is
the pattern prompt 058 is built around.

**Where a metric has no meaningful threshold, say so explicitly** — write `No threshold — report
only`. Prompt 051 is instructed to leave Status blank rather than invent a band, and an explicit
"no threshold" is what tells it to.

---

## Site grouping

Prompt 052 compares each site to **its peer group**, not only to the company average. Define the
groups here or that comparison silently falls back to the average, which penalises every site that
is legitimately different.

| Group | Sites in it | What makes them comparable | Which KPIs use this grouping |
|---|---|---|---|
| [Group name] | [count, or the list — keep the list in a separate tab if it is long] | [format, size, age, trading pattern, market type] | [KPIs] |

Sites that fit no group — new openings, remodels, anything trading abnormally — go in an
**excluded** list with the reason and a review date. An excluded site is not a failing site, and
the prompts should not rank it.

| Excluded site | Reason | Excluded from | Review on |
|---|---|---|---|
| [site] | [opened within N weeks / under remodel / temporary trading restriction] | [ranking, trend comparison, or both] | [date] |

---

## Known limitations

The section that saves the most time later. Record anything that makes a metric less trustworthy
than it appears, and prompt 059 will surface it rather than rediscovering it every quarter.

| KPI | Limitation | Effect on interpretation |
|---|---|---|
| [metric] | [e.g. refreshes after the daily report is read, so morning figures are one day behind] | [what a reader should not conclude] |
| [metric] | [e.g. denominator changed on <date>] | [not comparable across that boundary] |

---

## Filling this in

- [ ] Every metric on the dashboards used by 051, 052, and 055 has a row
- [ ] Definition matches the formula that actually runs, verified against the source — not the
      label, and not what it was intended to compute
- [ ] Denominator stated explicitly for every ratio
- [ ] Target and escalation threshold are different values, and the threshold passes the
      "reasonable number of calls" test
- [ ] Metrics with no meaningful threshold marked `No threshold — report only`
- [ ] Peer groups defined, with an excluded list carrying reasons and review dates
- [ ] Refresh timing recorded per source, so a stale figure can be identified as stale
- [ ] Known limitations captured
- [ ] Run prompt 059 against this file and the live dashboard before publishing it — it is built to
      find exactly the disagreements this file is meant to settle
- [ ] Saved under the exact name prompts 051 and 059 expect as `@KPI Definitions`
