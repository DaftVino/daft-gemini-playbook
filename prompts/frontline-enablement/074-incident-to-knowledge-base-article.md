# 074 — Incident to Knowledge-Base Article

- **Category:** Frontline Enablement
- **Surface:** Gemini in Docs · Gemini app
- **Risk:** Yellow
- **Owner:** Operations lead
- **Last reviewed:** 2026-07-21
- **Required sources:** @Incident Timeline, @Resolution Notes, @Screenshots, @Policy or Process
- **Core blocks:** Evidence

## When to use

The same issue has now been solved three times by three different people, each starting from
nothing.

## Prompt

```text
Use @Incident Timeline, @Resolution Notes, @Screenshots, and @Policy or Process to turn this
resolved recurring issue into a frontline knowledge-base article.

Return, in this order and in plain language:
1. When to use this article — the symptoms as the person on shift would describe them, not as a
   technician would
2. Symptoms and how to tell this apart from similar-looking problems
3. Immediate safe actions — what to do first to stop it getting worse
4. Information to collect before escalating
5. Resolution steps, numbered, each one verifiable
6. When to stop and escalate — the specific condition, not "if it does not work"
7. Who owns the escalation
8. A short FAQ from the questions actually asked during the incident

Separate **verified steps** — confirmed to have resolved it — from **suggested troubleshooting**
that was tried but not confirmed. Merging the two produces an article that wastes time on shift.

Do not include credentials, security bypasses, workarounds that defeat a control, or
employee-sensitive details.
```

## Validation before use

- Have someone who was not involved in the incident follow the steps. Every unstated assumption
  surfaces immediately and no other check finds them.
- Confirm no credential, bypass, or personal detail survived into the article.
- Escalation owner must be a role with a working contact path, not a person's name.

## Example follow-up

`Rewrite steps 5 through 7 for someone reading this on a phone, mid-shift, under time pressure.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Operations lead
