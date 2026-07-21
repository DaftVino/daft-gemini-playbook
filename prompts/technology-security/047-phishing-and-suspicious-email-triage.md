# 047 — Phishing / Suspicious Email Triage

- **Category:** Technology, Data & Security
- **Surface:** Gemini in Gmail · Gemini in Docs
- **Risk:** Red
- **Owner:** Technology lead
- **Last reviewed:** 2026-07-21
- **Required sources:** The message itself, @Related Thread
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

A message looks wrong, or asks for something financial, and someone is about to act on it.

## Prompt

```text
Analyze this message and any @Related Thread for phishing, fraud, or business email compromise
risk.

Return:
(1) Risk rating: Low / Medium / High / Critical, with the reasoning
(2) Indicators observed — sender domain and display-name mismatch, reply-to divergence, thread
    hijacking, urgency or secrecy pressure, unusual request pattern, payment or credential request,
    link and attachment characteristics, language and formatting anomalies, timing
(3) What NOT to do — stated first and plainly
(4) Safe verification steps using **independently known** contact information — a number from our
    vendor master or a prior verified record, never a number or link in the message itself
(5) Whether to report, quarantine, delete, or escalate, and to whom
(6) A safe reply, only if replying is appropriate at all
(7) Whether this indicates a compromise of an internal account, and what would confirm it

Do not click links, open attachments, follow redirects, or request credentials. Do not judge a
message safe on the basis of a familiar sender name — display names are trivially spoofed and
compromised internal accounts send genuine-looking mail.

If the message requests a payment, a bank-detail change, gift cards, credentials, or urgency around
any of these, rate it High or above regardless of how legitimate it appears.

Where you cannot assess an indicator from the message alone — headers not available, prior
correspondence not attached — state "Insufficient evidence to conclude" for that indicator. Do not
lower the rating because information is missing.
```

## Validation before use

- **Any request touching payment or bank details is verified by voice callback to a number from our
  records, by a second person, before any action. No exceptions, and no verification through the
  message itself.** See prompt 080.
- Report suspected phishing through the reporting path even if it was not acted on. Volume is the
  signal.
- If an internal account may be compromised, escalate to the Technology lead immediately rather
  than replying to the sender to ask.

## Example follow-up

`Draft the alert to the team describing this pattern, without reproducing the links or the sender address.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Technology lead
