# Data Handling Rules

Two separate questions, often confused:

1. **What may go into a Gemini prompt** when you are doing real work. Governed by your
   organization's data policy and Workspace configuration.
2. **What may go into this repository.** Governed by this document. The answer is: nothing real.

---

## Part 1 — What may go into a prompt

### Never paste or attach

| Category | Examples |
|---|---|
| Credentials | Passwords, API keys, tokens, MFA codes, security questions, recovery codes |
| Payment instruments | Full bank account and routing numbers, card numbers, CVV, wire instructions |
| Government identifiers | Social security or national insurance numbers, driver's licence numbers, passport numbers |
| Medical information | Diagnoses, treatment records, workers' compensation medical detail, accommodation specifics |
| Unnecessary personal data | Home addresses, personal phone numbers, dates of birth, dependants, immigration detail |
| Third-party confidential material | Anything received under an NDA whose terms you have not checked |

If a source document contains these and you need the rest of it, redact first or reference only the
relevant excerpt. A lease is fine; a lease with a guarantor's national ID number in an exhibit is
not, until that page is removed.

### Use with care

- **Employee-identifiable performance, leave, or conduct information.** Permitted for the HR or
  payroll owner inside an approved workflow. Never in a shared Gem's persistent Knowledge, and never
  in output that circulates beyond the people entitled to see it.
- **Whole-population exports.** Prefer the narrowest extract that answers the question. One site's
  payroll register beats the company file.
- **Draft legal or claim positions.** Prepare the question, not the position.

### Output handling

- Output inherits the sensitivity of its inputs. A summary of a payroll register is a payroll record.
- Do not paste output into a wider-audience channel than the source permitted.
- Where a prompt is told not to reproduce sensitive detail — the personnel-file completeness audit,
  for example — verify that it complied before circulating. Models sometimes helpfully include the
  very field you excluded.

### Grounding and configuration

- `@`-referencing Drive and Workspace content requires Workspace smart features and personalization
  to be enabled for the user. See [`workspace-setup.md`](workspace-setup.md).
- Reference material rather than pasting it wherever possible. An `@` reference keeps the original
  access controls attached; a paste does not.
- Consumer and enterprise Google accounts carry different data terms. Do organizational work only
  in the organizational account.

---

## Part 2 — What may go into this repository

**Nothing real. Ever.** This repository is written to be publishable, and is treated as if it
already were.

### Prohibited in any tracked file — including examples, tests, issues, and commit messages

- Organization, entity, subsidiary, brand, or trade names
- Site names, numbers, or addresses; region or district names
- Personal names — employees, managers, vendors, landlords, brokers, counsel, customers
- Email addresses, phone numbers, physical addresses
- Vendor, landlord, insurer, lender, or software-provider names
- Account numbers, invoice numbers, policy numbers, claim numbers, licence numbers
- Real dollar amounts, real KPI values, real rates, real headcounts
- Lease terms, contract terms, pricing, or any negotiated position
- Screenshots, exports, or attachments of real reports
- Credentials of any kind

### Use these instead

| Instead of | Write |
|---|---|
| A real site | `[site]`, or `Site A` / `Site B` in examples |
| A real entity | `[entity]`, or `Entity 1` |
| A real vendor | `[vendor]`, or `Vendor 1` |
| A real person | `[role]` — the site manager, the Controller |
| A real amount | `$X`, `$[amount]`, or an obviously synthetic round number |
| A real system | `@Accounting System`, `@Payroll System`, `@Point-of-Sale Export` |
| A real date | `[period]`, `[week ending date]`, or a clearly synthetic date |

### Why the rule is absolute rather than "be careful"

A prompt library is copied, forked, shared with new hires, and pasted into chat. Every one of those
paths defeats "we will sanitize it later." The only durable control is that the source never
contains anything worth sanitizing.

There is a second reason, and it is the practical one: prompts containing real specifics stop
working. A prompt that says "compare against the Q3 numbers from the Northeast file" is useless to
anyone without that file. Placeholders are not merely safer — they are what makes a prompt reusable.

### Examples

Sanitized worked examples live in [`examples/`](../examples/). They are **synthetic** — written to
look plausible, generated for the purpose. They are not redacted real outputs, because redaction
reliably misses something.

### If real data does land in the repository

1. Treat it as disclosed. If it included a credential, **rotate it first** — history rewriting is
   cleanup, not remediation.
2. Open an issue naming the class of data and the affected files. Do not paste the data into the
   issue.
3. Remove it in a PR. If the repository is public, or has ever been pushed to a public remote,
   rewrite history as well, and assume the original is cached somewhere regardless.

### Enforcement

`scripts/validate-prompts.mjs` flags likely leaks — email addresses, long digit runs, dollar amounts
of four or more digits, phone-number patterns. It is a backstop with a high false-negative rate, not
a substitute for the author's judgement. Enable GitHub secret scanning and push protection, and
install the gitleaks pre-commit hook, per repo standards §2.1.
