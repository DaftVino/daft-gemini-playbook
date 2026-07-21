# 096 — Backup & Recovery Readiness Review

- **Category:** Technology, Data & Security
- **Surface:** Gemini in Docs · Gemini in Sheets
- **Risk:** Red
- **Owner:** Technology lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @System Inventory, @Backup Configuration, @Restore Test Records, @Vendor Documentation, @Recovery Requirements
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

Annually, after any material system change, and before you find out the hard way.

## Prompt

```text
Review @System Inventory, @Backup Configuration, @Restore Test Records, @Vendor Documentation, and
@Recovery Requirements.

Return, per system:
System | Data criticality | Backed up? | Method | Frequency | Retention | Location | Encrypted? |
**Last successful restore test and its date** | Recovery time objective | Recovery point objective |
Gap

Then identify:
(1) **Systems never restore-tested, or not tested within [N] months.** An untested backup is an
    assumption, not a backup, and this is the single finding that matters most in this review.
(2) Systems with no backup at all, or where the backup is the vendor's default and nobody has read
    what it covers
(3) Backups stored only in the same environment as the production data — which does not survive the
    scenario backups exist for
(4) SaaS systems assumed to be backed up by the vendor: what the vendor actually commits to,
    quoted, versus what we assume. Retention of deleted data is usually far shorter than people
    expect.
(5) Recovery objectives that have never been validated against an actual restore time
(6) Dependencies: systems that cannot be restored independently, and the required restore order
(7) Who can perform a restore, and what happens if that person is unavailable

Do not assert that a system is recoverable on the basis of configuration alone. Configuration is
intent; a restore test is evidence. Where the records do not establish whether a system is backed
up or when it was last tested, state "Insufficient evidence to conclude" and treat the system as
untested.
```

## Validation before use

- **Authorized reviewer: Technology lead. Any system with no successful restore test is treated as
  unrecoverable until one is performed.**
- Restore tests are run to a separate environment, never over production.
- Verify vendor retention commitments against the contract, not the marketing page — see prompt 044.
- Confirm at least two people can perform each restore.

## Example follow-up

`List systems with no successful restore test in the last 12 months, ordered by data criticality.`

## Change log

- 2026-07-21 — Created — Technology lead
