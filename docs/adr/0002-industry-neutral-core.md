# 0002 — Industry-neutral core with separate industry packs

- **Status:** Accepted
- **Date:** 2026-07-21

## Context

The source catalog was written for a specific operating context: a multi-entity, multi-state,
multi-unit restaurant organization. That framing appeared in three distinct ways, and they carry
very different costs:

1. **Framing** — "restaurant", "multi-unit", "store" throughout, including in prompts whose logic
   has nothing to do with food service (bank reconciliation, access reviews, contract renewals).
2. **Vocabulary** — "store" for a location, "GM" for a site manager, "daypart" for a time segment.
3. **Genuinely industry-specific logic** — theoretical vs. actual food cost, waste and transfer
   variance, recipe costing, menu pricing, health inspections, delivery marketplaces. These prompts
   are not restaurant-*flavored*; they are restaurant-*shaped*, and generalizing them would destroy
   what makes them useful.

The library is intended to be broadly reusable. Roughly 90% of it — close, AP, cash
forecasting, leases, COI compliance, access reviews, incident triage, inbox architecture — is
generic to any multi-entity, multi-site organization. Leaving it dressed as restaurant material
makes it look inapplicable to readers it would serve well.

## Decision

Split along the seam between (2) and (3).

**The core eleven categories are industry-neutral.** Vocabulary is *entity, site, location, period,
owner, cost of goods, time segment*. Named vendor products are replaced with capability names —
`@Accounting System Import`, `@Point-of-Sale Export`, `@Payroll System`.

**Industry-specific logic moves to an industry pack**, `prompts/industry-multi-unit/`, which keeps
its native vocabulary in full. A second industry would be a sibling folder, never a change to the
core.

Prompt IDs are unaffected by the move. Category membership is metadata; the ID is the identity.

## Consequences

**Good**

- The core library is usable by any multi-site organization without translation.
- Industry prompts keep their precision. "Theoretical vs. actual food cost variance" stays exactly
  that, rather than being flattened into "inventory variance" and losing its meaning.
- The seam is a useful forcing function: if a proposed core prompt cannot be written in neutral
  vocabulary, that is strong evidence it belongs in a pack.
- Adding a second industry is additive and cheap.

**Bad / accepted costs**

- **"Site" is blander than "store."** Neutral vocabulary is slightly less vivid to a reader who
  works in one industry, and vividness aids adoption. Accepted.
- Some prompts sit near the boundary and the placement is a judgement call — cash and deposit
  handling, average-ticket trend analysis. They are in the core because the *logic* generalizes to
  any cash-handling, transaction-based site, even though the vocabulary is retail-inflected.
- Anyone deploying this internally will want to re-skin the vocabulary to their own house terms.
  That is a find-and-replace, and it is the right trade against the alternative.

**Neutral**

- The pack is small today (5–7 prompts). That is expected; the core is where the volume is.

## Alternatives considered

- **Keep the restaurant framing throughout.** Zero rewrite risk, narrowest audience, and it obscures
  that most of the content is general. Rejected.
- **Fully genericize and drop industry-specific prompts.** Loses real, hard-won operational value —
  food cost and waste analysis is among the most useful material in the set. Rejected.
- **Tag industry-specific prompts in metadata but leave them in functional categories.** Keeps
  functional grouping intact, but makes it impossible to hand someone "the core library" as a unit,
  and every core category becomes partly inapplicable to a non-food-service reader. Rejected in
  favour of the physical split, which is legible without tooling.
