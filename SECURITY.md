# Security policy

This repository is a library of Markdown documents. It ships no application, no service, and no
executable that anyone runs in production — `scripts/` holds development tooling for this
repository alone. A conventional vulnerability policy would therefore be misleading, so this one
covers the exposure that is actually real here.

## What to report

**Real business data.** The README, [`docs/data-handling-rules.md`](docs/data-handling-rules.md),
and [`CONTRIBUTING.md`](CONTRIBUTING.md) all assert that nothing in this repository comes from a
real organization. If you find something that looks like it does, that assertion is wrong and we
want to know. Examples of what counts:

- An organization, entity, site, vendor, landlord, or person's name.
- An address, phone number, email address, or account identifier.
- A figure that appears to have been taken from a real report rather than invented.
- Contract or lease terms, internal thresholds, or approval limits that look specific to one
  organization.
- Anything resembling a credential, token, or key.

Report it even if you are unsure. A false alarm costs a few minutes; a real one that nobody
mentioned stays published indefinitely.

Also worth reporting: a prompt that instructs Gemini to **take an action** rather than prepare one
— send, delete, archive, pay, post, approve, grant access, or contact someone outside the
organization. That boundary is the library's central safety property
([ADR 0003](docs/adr/0003-human-approval-boundary.md)) and a prompt that crosses it is a defect in
the same class as a data leak, whatever the validator thinks.

## How to report it

Use GitHub's private vulnerability reporting on this repository: **Security → Report a
vulnerability**. That keeps the report out of public view until it is resolved.

**Do not paste the data into the report.** Name the file, the line, and the class of information.
A private advisory is still a copy, and a public issue is a second publication of the exact thing
being reported.

Do not open a public issue or pull request for this. Anything else — a broken link, a prompt that
does not work, a validator false positive — is a normal issue and belongs in the open.

## What happens next

The procedure is in
[`docs/data-handling-rules.md`](docs/data-handling-rules.md#if-real-data-does-land-in-the-repository)
and is not duplicated here. In summary: anything exposed is treated as disclosed, a credential is
rotated before anything else happens, the content is removed in a PR, and because this repository
is public, history is rewritten on the assumption that the original is already cached somewhere.

You can expect an acknowledgement within a few days. This is a small library maintained alongside
other work, not a staffed security programme — that is a statement of capacity, not of intent.

## Scope

| In scope | Out of scope |
|---|---|
| Real data of any kind in this repository, including its history | Google Gemini or Google Workspace themselves — report those to Google |
| A prompt that instructs an action rather than preparing one | The output any particular Gemini run produces from these prompts |
| A validator rule that fails to catch what it claims to catch | Advice you disagree with — open an issue and argue it in public |

On that second exclusion: nothing here can constrain what a model returns. The library's safety
argument does not rest on the output being correct. It rests on every prompt being reviewable by a
named human before anything happens, which is why *Prompts prepare. People decide.* is the first
thing in the README and the only rule that is not waivable.
