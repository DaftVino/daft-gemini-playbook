# 095 — Integration & Data Pipeline Failure Triage

- **Category:** Technology, Data & Security
- **Surface:** Gemini in Sheets · Gemini in Docs
- **Risk:** Yellow
- **Owner:** Technology lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Integration Logs, @Source Export, @Destination Data, @Expected Record Counts, @Schedule and Configuration
- **Core blocks:** Evidence, Data quality

## When to use

Data stopped arriving, or arrived wrong, and the downstream reports are already being used.

## Prompt

```text
Review @Integration Logs, @Source Export, @Destination Data, @Expected Record Counts, and @Schedule
and Configuration for [integration / period].

Return:
(1) Failure characterization: complete failure, partial load, silent partial load, duplicate load,
    stale data served as current, or transformation error. **Distinguish "no data" from "wrong
    data"** — the second is far more dangerous because nothing looks broken and people act on it.
(2) A reconciliation: expected record count, source count, destination count, difference, by period
    and by entity or site
(3) Time window affected — from the last known-good run to now — and how it was detected. If it was
    detected by a person noticing something odd rather than by monitoring, that is the primary
    finding.
(4) Downstream impact: which reports, dashboards, and decisions used the affected data, and who
    consumed them
(5) Likely cause, ranked, with the log evidence for each. Mark as unconfirmed until verified.
(6) Recovery plan: reload, backfill, or manual correction — with the risk of each, particularly
    double-loading
(7) Verification steps proving the recovery worked
(8) Monitoring or control that would have caught this sooner

Do not reload or modify data. Do not state a root cause the logs do not establish.
```

## Validation before use

- Notify downstream consumers before fixing. People acting on wrong data need to know now, not
  after the repair.
- Backfills double-load. Confirm the idempotency of the recovery approach on a copy first.
- Check whether close, payroll, or a payment run used the affected data — see prompts 042 and 077.
- Silent partial loads deserve a control, not just a fix. Section 8 is the durable output.

## Example follow-up

`Which reports produced in the affected window are wrong, who received them, and what should they be told?`

## Change log

- 2026-07-21 — Created — Technology lead
