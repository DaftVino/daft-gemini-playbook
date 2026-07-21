# 070 — Email Attachment to Drive Intake Specification

- **Category:** Gmail, Drive & Workflows
- **Surface:** Gemini app · Gemini in Docs
- **Risk:** Yellow/Red
- **Owner:** Technology lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Sample Emails, @Sample Attachments, @Destination Folder Design, @Required Tracker
- **Core blocks:** Evidence

## When to use

The same kind of attachment arrives repeatedly and someone is filing it by hand, inconsistently.

## Prompt

```text
Turn this recurring email-and-attachment process into an intake specification for [workflow]. Use
@Sample Emails, @Sample Attachments, @Destination Folder Design, and @Required Tracker.

Return:
1. Trigger — the exact criteria, not a description
2. Allowed senders, and what happens to attachments from anyone else
3. Attachment and file-name rules, including file types accepted and rejected
4. Destination folder logic
5. Duplicate logic — same file, same name, resend, revised version. Say which is which and what
   happens to each.
6. Naming convention applied on arrival
7. Metadata captured to the tracker
8. Validation — what makes an intake valid, and what makes it an exception
9. Error route and exception queue owner
10. Notification — who is told, and when
11. Record retention
12. Human approval points
13. Audit trail

State explicitly where the **email itself** must be preserved as evidence, not only its attachment.
An invoice attachment without the transmitting email loses the sender, the date, and the
instructions — which is often what actually matters in a dispute.

Never design a workflow that overwrites, moves, or deletes an original record. New versions are new
files.
```

## Validation before use

- **Escalates to Red where the attachments are invoices, payment instructions, legal notices, or
  personal data. Authorized reviewer: Controller for anything financial.**
- Confirm the specification preserves the email where evidence matters.
- Pilot manually for one cycle. Where duplicates and revisions are common, the manual pilot always
  finds cases the specification missed.

## Example follow-up

`What happens in each of these cases: a resend, a corrected version, a wrong-sender submission, and a corrupt file?`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Technology lead
