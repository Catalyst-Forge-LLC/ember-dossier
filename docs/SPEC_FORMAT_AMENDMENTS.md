# Format amendments — for review

**Status:** draft. Do not fold into `GENESIS.md` or the skill until this file is accepted.  
**Date:** 2026-08-19  
**Source:** owner-circulated feedback on the live skill.

Three changes. A and B are contract edits (skill + GENESIS, then examples/site). C is a later feature. The seven section **names** stay. The failure to fix is the pressure those names put on the writer.

---

## A. No heat inflation

### The problem

The skill always requires **Why it matters right now** and **Controversies & criticisms**. Headings become quotas. The model fills the bucket. That is the same class of bug as inventing currency: structure accidentally creates behavior.

The skill already says: do not invent currency. It does not say the same thing about significance or dispute.

### The rule

**No heat inflation.** Do not manufacture currency or significance. If nothing material has changed recently, say so. If no meaningful active controversy exists, say so rather than inventing one. A heading is a checklist item, not a quota.

This applies to:

- **Why it matters right now**
- **Recent developments & current activity**
- **Controversies & criticisms**

Older, closed, or ambient friction may be named in one line and marked closed. It must not be stretched into a live fight.

### Allowed honest fills

These lines (or close cousins) are correct output. They are not a failure to complete the format.

**Why it matters right now**

> No unusual current development was identified. The subject remains relevant primarily because [durable reason].

**Recent developments & current activity**

> No material change was identified in the period covered.

**Controversies & criticisms**

> No material active controversy identified.

The EmberDossier self-example already does the controversies version in prose (“No public disputes… as of 19 August 2026”). The rule makes that legal, not exceptional.

### Proposed skill copy

Add next to “Do not invent currency.”:

```text
Do not invent currency. Do not inflate heat. If nothing material
has changed recently, say so. If no meaningful active controversy
exists, say so. Section headings are a checklist, not a quota.
```

Keep the seven sections. Do not make 2 or 4 optional. An honest empty is still a completed section.

### Proposed GENESIS principle

New numbered principle, or a clause under Neutral and sourced:

**No heat inflation.** Significance and dispute are reported, not performed. An EmberDossier that says “nothing material” is a successful briefing.

---

## B. Recency priority, not recency bias

### The problem

GENESIS principle 1 is **Recency bias by default**. The skill says **Bias strongly toward** the most recent information.

Recency bias is a known cognitive error: overweighting what just happened. EmberDossier is not claiming recent facts are more true. It is claiming they deserve **presentation priority** in a current briefing. Recent first. Background second. That is order, not epistemology.

**Present tense first.** stays the protected maxim. It is the order. It is not a replacement name for the principle if the principle needs to say *why* the order exists.

### Proposed rename

| Surface | Now | Proposed |
| --- | --- | --- |
| GENESIS principle 1 | Recency bias by default | **Recency priority by default** |
| Skill core principle | Bias strongly toward the most recent… | **Prioritize the most recent and relevant…** (priority, not bias) |
| About page | Recency by default | Keep. Already clean. |

One-line gloss under the principle:

> Recent information is not assumed to be truer. It is shown first because the job is a current briefing.

### Out of scope for this rename

Do not change the protected lines:

- A living dossier that prioritizes what’s still hot.
- Present tense first.

“What’s still hot” is metaphor, not a claim that heat must be found. Amendment A covers that.

---

## C. Update semantics (later)

### The problem

The skill already lists: “Update the EmberDossier with anything from the last 30 days.” It does not define update. Agents regenerate a profile from scratch. That is not a living artifact.

PHASE_1_BRIEF already names update as a v1 *ask*. Saved dossiers and a hosted store stay out of scope for this repo. Update can still be a **skill procedure** over Markdown the user already has.

### What “update” means

Given an existing dossier and a cutoff (`AS_OF` or “last N days”):

1. Read the existing dossier. Do not start from a blank page.
2. Research changes since `AS_OF` (or the stated window). Use the host’s search. Do not invent currency.
3. Compare old claims with current evidence.
4. Update current status (Snapshot; Why it matters right now).
5. Add new developments. Leave dated items that are still the last material fact.
6. Resolve or age out old controversies. Closed fights go to a short “closed” note or drop out. Do not keep them warm.
7. Adjust the orbit if relationships changed.
8. Leave durable background alone unless it is wrong or required to explain the present.

Regenerate-from-scratch is a different ask (“fresh EmberDossier”). Do not treat update as a synonym.

### Tiny metadata (later, optional)

YAML (or an equivalent header) on the Markdown artifact, not a database:

```yaml
subject: Framework Computer
as_of: 2026-08-19
updated_from: 2026-07-20
```

Optional later: source classes and a freshness note.

An agent can then say: this dossier is 43 days old; refresh current status before relying on it.

### Not in the first fold of A and B

No schema, no hosted store, no required frontmatter on today’s examples. Write the procedure into the skill when this amendment is accepted as “next,” not when A and B ship.

---

## What does not change

- Seven section names.
- Format, not a research agent.
- Example-subject rules.
- Host-agnostic `SKILL.md` folder.
- No heat inflation does **not** mean omit the section.

---

## Suggested apply order

1. Accept or edit this file.
2. Fold A and B into `GENESIS.md`, `skills/ember-dossier/SKILL.md`, and the Cursor copy.
3. Touch examples only where a heading or principle name appears, or where an honest-empty would teach the rule (the EmberDossier self-example already has one).
4. Site About: keep “Recency by default”; add no-heat in one line if the About principles list should match GENESIS.
5. Bump the npm package when the skill text changes.
6. C stays a follow-on spec until you say it is next.

---

## Review

Confirm or rewrite:

1. **A** — ship no-heat inflation in the skill now, including honest empties for recent developments as well as why-it-matters and controversies?
2. **B** — “Recency priority by default” as the principle name, “Present tense first” unchanged as the maxim?
3. **C** — skill-level update procedure later; metadata later; no hosted store in this repo?

This file is the proposal. It is not the contract until you say so.
