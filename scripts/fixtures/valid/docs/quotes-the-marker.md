# Documentation That Quotes The Marker

Any document explaining the attestation has to show it. Shown in a fence:

```markdown
<!-- synthetic-data: reviewed 2026-07-21 -->
```

And inline, in the generic form a reference would use:
`<!-- synthetic-data: reviewed YYYY-MM-DD -->`.

Neither may be read as a declaration. If the fenced one granted a waiver, documentation would waive
findings; if the inline one were checked for a real date, every reference to the feature would
report itself as malformed. This file must validate clean.
