# 080 — Payment Instruction & Bank-Detail Change Verification

- **Category:** Finance & Accounting
- **Surface:** Gemini in Gmail · Gemini in Docs
- **Risk:** Red
- **Owner:** Controller
- **Last reviewed:** 2026-07-21
- **Required sources:** The request itself, @Vendor Master, @Prior Correspondence, @Contract, @Payment History
- **Core blocks:** Evidence, Finance, Legal/People/Risk

## When to use

**Every single time** anyone requests a change to bank details, remittance instructions, or payee
information — vendor, landlord, employee, or internal. No exceptions, including when the request is
obviously genuine.

## Prompt

```text
Analyze this payment-instruction or bank-detail change request against @Vendor Master, @Prior
Correspondence, @Contract, and @Payment History.

Return:
(1) Risk indicators observed: sender domain and display name versus the record, reply-to
    divergence, whether this is a new thread or a hijacked existing one, urgency or confidentiality
    pressure, a request to bypass normal process, timing relative to a known payment run, changes to
    contact details submitted alongside the bank change, and any grammar or formatting departure
    from prior genuine correspondence
(2) What the record shows: the current instructions, when they were last changed, who requested
    that change, and how it was verified
(3) **The required verification steps**, in order:
    - Voice callback to a number from @Vendor Master or the executed contract — never a number in
      the request, in its signature block, or on a website linked from it
    - Confirmation by a named person known to us at the counterparty
    - Independent confirmation by a second person on our side
    - Written confirmation on the counterparty's letterhead, requested through the verified channel
(4) A verification record template: who called, which number, from which source, who answered, what
    was confirmed, date and time, who else confirmed
(5) The approval path under the approval matrix

Do not conclude the request is legitimate. Do not make any payment or change on the basis of this
analysis. Absence of risk indicators is not evidence of legitimacy — a compromised genuine mailbox
produces a request with no indicators at all. Where the record does not establish a fact you need,
state "Insufficient evidence to conclude" and list what is required.
```

## Validation before use

- **Authorized reviewer: Controller. Voice verification to an independently sourced number is
  mandatory and cannot be waived for urgency — urgency is itself an indicator.**
- Never verify through any channel supplied in the request.
- Hold the next payment to that payee until verification is complete, and tell the payee you are
  doing so through the verified channel.
- Retain the verification record with the vendor master change.
- If the request is fraudulent, treat it as a security incident: preserve the message, notify the
  Technology lead, and check whether an internal mailbox is compromised.

## Example follow-up

`Draft the script for the verification call, including the specific facts to confirm and what to do if the person cannot confirm them.`

## Change log

- 2026-07-21 — Created — Controller
