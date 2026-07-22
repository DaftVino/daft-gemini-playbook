# Data Handling Rules

Two separate questions, often confused:

1. **What may go into a Gemini prompt** when you are doing real work. Governed by your
   organization's data policy and Workspace configuration.
2. **What may go into the library.** Governed by this document. The answer is: nothing real.

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

## Part 2 — What may go into the library

**Nothing real. Ever.** The library is a distributable artifact. Whatever is committed to it should
be safe in the hands of anyone who ends up holding a copy.

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

`scripts/validate-prompts.mjs` scans **every Markdown file in the repository**, not only `prompts/`.
It is a backstop with a high false-negative rate, not a substitute for the author's judgement.

The patterns divide by what they detect, and that division decides what can be waived:

| Class | Patterns | Waivable |
|---|---|---|
| **Identity** | email address, phone number, government ID | **Never**, in any file, for any reason |
| **Figure** | dollar amounts of four or more digits, long digit runs | Yes — see below |

A figure that could have come from a real report is legitimate in a worked example: plausible
fictional data is what makes an example teach, and one whose every number is `$X` teaches nothing.
So a file outside `prompts/` may waive figure findings by carrying, near the top:

```markdown
<!-- synthetic-data: reviewed 2026-07-21 -->
```

That is an attestation by a named reviewer at a named date, not a configuration setting. It waives
figures in that file and nothing else. It never waives an identity pattern — an author's belief
that an address is invented is not evidence that it is. It does not apply inside `prompts/`, where
the standard already requires `[bracketed]` placeholders and `$X`. A marker on a file with nothing
to waive warns, so it does not sit there implying a review that no longer means anything.

Prevention still belongs upstream of all of this. Enable secret scanning and push protection on the
remote, and install a gitleaks pre-commit hook so a credential never reaches history in the first
place. Note what that hook is for: gitleaks finds **credentials**. It will not recognize an entity
name, a vendor, or an internal threshold, which is the exposure this repository actually risks.
Those are caught by review, or not at all.
