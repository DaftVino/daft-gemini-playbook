# 065 — Document Comparison & Change-Risk Summary

- **Category:** Document Intelligence
- **Surface:** Gemini app · Gemini in Docs · NotebookLM
- **Risk:** Yellow/Red
- **Owner:** Whoever owns the document
- **Last reviewed:** 2026-07-21
- **Required sources:** @Version A, @Version B
- **Core blocks:** Evidence, Legal/People/Risk

## When to use

A redline comes back, a policy is reissued, or a renewal arrives with "no material changes."

## Prompt

```text
Compare @Version A and @Version B of [document]. Identify every material addition, deletion, or
changed obligation affecting: money, term, risk allocation, insurance, repair and maintenance, data
and privacy, renewal, termination, notice, approval rights, indemnity, or liability.

Return:
Topic | Old language / position | New language / position | Practical impact on us | Risk |
Required reviewer

Cite each change by document, page, and clause, quoting the changed text on both sides.

Then:
(1) Changes that shift risk or cost toward us, listed first
(2) Deletions — what was removed. Removed protections are harder to notice than added obligations
    and are frequently the more important change.
(3) Definitional changes — a changed definition alters every clause that uses the term, and this is
    the most under-detected category of material change
(4) Changes you are unsure are material, listed for a human to judge

Do not characterize a change as minor without explaining why. Do not report only the changes that
appear in tracked changes — compare the substance.
```

## Validation before use

- **Escalates to Red for any contract, lease, insurance, or policy document going to signature.
  Authorized reviewer: counsel.**
- Verify the two versions are the ones you think they are, including date and revision.
- Check the definitions section specifically, even if the comparison did not flag it.

## Example follow-up

`List only what was removed from Version A, and what protection each removal costs us.`

## Change log

- 2026-07-21 — Created from library v1.0 catalog — Document owner
