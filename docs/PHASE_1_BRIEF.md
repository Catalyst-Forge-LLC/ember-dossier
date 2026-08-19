# EmberDossier — Phase 1 architecture brief

_Structured capture of planning and architecture **before** locking Phase 2. Goal: the next session can start from this file + `.forgetrail/workflow_tracking.json` without re-reading the kickoff chat._

**Status:** `draft`  
**Last updated:** 2026-08-19  
**Phase 1 exit:** Do not mark Phase 1 complete in `.forgetrail/workflow_tracking.json` until this brief is **locked** and major commitments are in `decisions[]`.

---

## 1. Problem and outcome

**What we are building (2–4 sentences):**

EmberDossier is a structured prompting pattern and agent skill for current, neutral briefings on a person, organization, place, topic, or event. Most profiles start in the past. This one leads with what is true now, what changed recently, who is in the orbit, and which disputes are still live. Background stays short unless it explains the present. A FilePress site teaches the pattern and how to install the skill.

**Project archetype:** `product`

**What “done” looks like for v1 (measurable where possible):**

- An agent that has the skill produces the seven-section dossier on a subject the user names.
- The public site states the pattern, shows generic examples, and has an install path.
- `pnpm site:build` emits static HTML.
- Sample subjects in the repo are gender-neutral or obviously generic.

---

## 2. Users and hero flow

**Primary user(s):**

Researchers, journalists, operators, and agents who need a current briefing they can share or hand off.

**The single most important workflow (hero flow) end-to-end:**

User says “Give me an EmberDossier on Northwind Analytics” → agent loads the skill → writes the seven sections, recency first → ends with refinements and source types.

**Secondary workflows (if any) for v1:**

- Update an existing dossier for the last N days.
- Read a dossier before answering another question.
- Compare two dossiers (same structure).

---

## 3. Constraints

- **Technical:** TypeScript ESM, pnpm, FilePress static site, Cursor project skill. No PocketBase, no auth, no runtime LLM API in this repo. The *consumer* agent may use search; EmberDossier does not ship a research backend.
- **Business / timeline:** Domain **emberdossier.com**. npm name **`get-ember-dossier`**. `ember-dossier` is taken; `emberdossier` is blocked as too similar.
- **Explicit non-goals for v1:** (see section 10)

---

## 4. Stack and tooling

| Area | Choice | Status | Notes / WHY |
| --- | --- | --- | --- |
| Product shape | Agent skill + FilePress site | confirmed | GENESIS is a pattern, not an app |
| Language | TypeScript (ESM) | proposed | House default |
| Package manager | pnpm | proposed | House default |
| Site engine | FilePress (`getfilepress` from npm, ^0.1.5) | confirmed | Owner: use the published package |
| Public URL | https://emberdossier.com | confirmed | Owner |
| npm package | `get-ember-dossier` | confirmed | `ember-dossier` taken; `emberdossier` blocked by npm similar-name check |
| Voice | aiBreze + overlay | proposed | Owner ask |
| DB / backend | none | proposed | Static site; skill is Markdown |
| Auth / storage | none | proposed | No state that outlives the browser |
| State persistence | n/a (not a web app with user state) | proposed | LocalBerth lease only for `site:dev` |
| Deploy | Cloudflare Pages project `emberdossier` via `pnpm ship` | confirmed | Matches house FilePress ship script |
| Local preview | LocalBerth `ember-dossier-site` on **5189** | proposed | Avoid the shared 5173 pool |
| Lifecycle | ForgeTrail MCP, `.forgetrail/` | proposed | Owner ask |

---

## 5. Data model (sketch)

**Core entities:**

- **Subject** — whatever the user named (org, place, topic, event, or person).
- **Dossier** — one Markdown briefing with seven sections plus source types.
- **Refinement** — a follow-up query suggested at the end.

**Relationships:**

One subject → one current dossier. Updates replace or annotate recent-developments. Comparisons are two dossiers side by side, not a new schema.

**Existing data / migration:** none. Spec is `GENESIS.md`.

---

## 6. Integrations and external systems

| Integration | Purpose | Auth / secrets | Risk notes |
| --- | --- | --- | --- |
| Consumer-agent search | Fresh facts when the *user’s* agent has search | Lives in the host agent | EmberDossier is not a research service |
| FilePress / Cloudflare Pages | Public explainer | Wrangler / Pages project | Origin: emberdossier.com |
| LocalBerth | Stable local port | none | Fallback 5189 if CLI missing |

## 6a. Content-generation pattern

Skip. Site and skill are hand-authored. Dossiers are produced by the *consumer* agent, not by this repo.

---

## 7. Hardest problems and risks

1. People treat EmberDossier as a research agent. It is a format. The skill must say that.
2. Examples that name real people go stale and pick sides. Generic subjects only in shipped docs.
3. Landing copy and skill text can drift. The seven section names are the contract.

---

## 8. Architectural decisions (numbered)

**D1.** Skill + FilePress site. Not a PocketBase app. WHY: the product is the pattern.

**D2.** Generic or gender-neutral examples only. WHY: owner instruction; avoids stale or biased samples.

**D3.** aiBreze on publishable prose. Product voice is EmberDossier / it.

**D4.** ForgeTrail MCP-first. `.forgetrail/` only.

**D5.** Prune Phase 2 / Phase 7 full-stack rows (CRUD, auth, payments). Keep archetype `product`.

**D6.** Public site is **emberdossier.com**.

**D7.** Publish the skill as npm **`get-ember-dossier`**. WHY: `ember-dossier` is taken. `emberdossier` failed npm’s similar-name check (punctuation-stripped match).

**D8.** FilePress via published **`getfilepress`**, not a sibling `link:`.

**D9.** Filled sample is Harborview Public Library: civic, invented, roles not names, operational disputes only.

**D11.** Second filled sample is EmberDossier itself: real, quiet, named by the owner. Same seven sections. `/sample` is an index.

**D12.** Third filled sample is Framework Computer: real hardware company, owner-supplied briefing, no affiliation. Founder named because the briefing named that person.

---

## 9. Open questions (before or during Phase 2)

| # | Question | Owner / resolve by |
| - | -------- | ------------------ |
| 1 | Lock this brief and start Phase 2 docs (`CONTEXT_PROMPT`, `TODO`, `IDEAS`)? | owner |
| 2 | DNS for emberdossier.com → Cloudflare Pages project `emberdossier` | owner |

---

## 10. Explicitly out of scope (v1)

- A hosted dossier generator or search API
- Accounts, multi-tenant workspaces, or saved dossiers in this repo
- PocketBase, auth, payments
- Using real living people as documentation examples

---

## 11. First feature batch (post-scaffold)

1. Lock this brief.
2. Finish site pages (home, skill, about) and drop placeholder posts.
3. Root README + `TODO.md` + `.forgetrail/IDEAS.md` (Phase 2 docs).
4. `pnpm site:check` / `pnpm site:build`.
5. Confirm LocalBerth lease and Pages project name.

---

## 12. Handoff checklist (before leaving Phase 1)

- [ ] User has confirmed stack, folder shape, hero flow, and v1 boundaries
- [ ] This brief is **locked** (no `[draft]` ambiguity) or remaining items are only in §9
- [ ] `.forgetrail/workflow_tracking.json` updated: `decisions[]` for each major D#; phase notes summarize sign-off
- [ ] Phase 2 opener will read **this file** + `.forgetrail/workflow_tracking.json` first
