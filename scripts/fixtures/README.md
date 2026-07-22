# Validator fixtures

Input for [`../test-validator.mjs`](../test-validator.mjs). Not part of the library — nothing here
is a real prompt, and `scripts/validate-prompts.mjs` never walks this directory during a normal run.

Two roots, each shaped like a miniature repository:

- `valid/` — files that must validate clean. Includes the negation cases, which prove that
  `Do not send it` is *permitted* where `Send it` is not. A rule that cannot tell those apart would
  make every safety instruction in the library unwritable.
- `invalid/` — one file per rule, each violating **exactly one** thing. The test asserts the precise
  set of error codes per file, so a fixture that starts failing for a second reason fails the suite
  rather than passing for the wrong one.

Fixture IDs start at 900 so they can never collide with a library prompt. Each root also carries a
`docs/` folder, because the sanitization scan reads every Markdown file rather than only `prompts/`
and those rules need somewhere non-prompt to be exercised.

`scripts/validate-prompts.mjs` never scans this directory during a normal run — several fixtures
carry deliberate leak patterns, all of them invented.

## Adding a rule to the validator

Add its code to `ERROR_CODES` or `WARNING_CODES` and add a fixture that triggers it. The suite
asserts that every declared code is covered, so a new rule without a fixture fails the build.
