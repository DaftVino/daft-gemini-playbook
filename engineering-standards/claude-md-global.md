# CLAUDE.md — Global Instructions

<!-- Install at ~/.claude/CLAUDE.md. Applies to every project. Per-repo CLAUDE.md files add project-specific constraints and commands; they never override the gates below. -->

You are working with James M. Baker: solo developer, AI-heavy workflow, VS Code + Claude Code. Conventions are defined in the `engineering-standards` repo (`repo-standards.md`); the skill pipeline is defined in `coding-workflow.md`. When those documents and habit disagree, the documents win.

## Non-negotiable gates

These are hard rules. If a request would violate one, stop and say which gate blocks it — do not work around it silently.

1. **No code before a failing test.** `test-driven-development` (superpowers) governs all implementation, including one-liners. Code written before a failing test exists gets deleted and restarted.
2. **No implementation before an approved plan** for non-trivial work (multi-PR, persisted-data changes, risky, or agent-executed). Plan must pass `/plan-eng-review` — the one required review gate.
3. **Never commit to `main`.** Branch `type/N-slug` off main, Conventional Commits, PR with `Fixes #N`, squash-merge, delete branch.
4. **Artifacts go to their canonical home.** Bugs → GitHub Issues (`gh issue …`). Plans/design docs → `docs/designs/YYYY-MM-DD-slug.md`. Lasting decisions → `docs/adr/NNNN-slug.md`. Fixes → PRs. Tests → `tests/`. Never create stray markdown notes, `todo.md`, or `docs/bugs/`.
5. **Never commit secrets.** Real keys live only in gitignored files with committed `*.example` twins. A leaked secret means immediate disclosure + rotation — scrubbing history is cleanup, not remediation.
6. **Check `docs/adr/` before proposing architectural changes.** Conflicting proposals must explicitly supersede the ADR, not bypass it.
7. **One closer per repo.** Versioned product → gstack `/ship`. Quick worktree task → superpowers `finishing-a-development-branch`. Never both on the same branch.

## The pipeline

Default path for any non-trivial change. Stages marked ★ are required; others scale with risk.

| Stage | Lead skill | Notes |
|---|---|---|
| Brainstorm | superpowers `brainstorming` | `/office-hours` ONLY for market-validation questions. Save the resulting design doc to `docs/designs/YYYY-MM-DD-slug.md`. |
| Plan | superpowers `writing-plans` | `/spec` instead when a filed GitHub issue or fresh-agent worktree is the goal. |
| Plan review ★ | gstack `/plan-eng-review` | Add `/plan-ceo-review`, `/plan-design-review`, `/plan-devex-review` as relevant, or `/autoplan` for all. |
| Isolate | superpowers `using-git-worktrees` | After plan approval, before any code. |
| Implement ★ | superpowers `test-driven-development` | + `subagent-driven-development` (parallel) or `executing-plans` (batched). `requesting-code-review` fires between tasks. |
| Security | gstack `/cso` | Daily mode routinely; comprehensive monthly. |
| Live QA | gstack `/qa` / `/qa-only` | Different axis from TDD — run for anything with a UI. |
| Final review | gstack `/review` + `/codex` (challenge) | Do NOT also run `requesting-code-review` here — it already ran mid-flight. |
| Close ★ | `/ship` or `finishing-a-development-branch` | Per gate 7. `/ship` bumps VERSION + CHANGELOG; release still needs its `vX.Y.Z` tag. |
| Deploy | `/land-and-deploy` → `/canary` | |
| Wrap up | `/learn`; `/revise-claude-md` if anything non-obvious was discovered | `/retro` weekly. |

**Shortcuts:** Bug fix → `/investigate` (root cause first, no exceptions) → TDD regression test → `requesting-code-review` → `/qa-only` → close. Small change → TDD → `requesting-code-review` → close; skipping planning is correct ONLY here.

## Routing corrections (override any per-repo routing that disagrees)

- Product ideas / "I want to build X" → `brainstorming`, not `/office-hours`.
- Debugging → `/investigate`, never both it and superpowers' debugging skill.
- Mid-flight review → `requesting-code-review`; pre-ship review → `/review`. Never both in the same pass.

## Conventions (summary — full detail in repo-standards.md)

- Naming: lowercase-kebab for repos, folders, docs, branch slugs. UPPERCASE only for canonical root files.
- Commits: `type(scope): imperative summary`, ≤72 chars; body when the why isn't obvious; `Fixes #N` footer.
- Releases: SemVer. CHANGELOG entry + annotated `vX.Y.Z` tag + GitHub Release, always together.
- LICENSE: MIT, `Copyright (c) YEAR James M. Baker`.

## CLAUDE.md hygiene

- End of any session with a non-obvious discovery: run `/revise-claude-md` (or `#` mid-session).
- Personal preferences go in `.claude.local.md` (gitignored), never the shared CLAUDE.md.
- Per-repo CLAUDE.md files stay under ~60 lines: project summary, commands, repo-specific constraints, pointer to standards. Workflow rules live HERE, not there.
