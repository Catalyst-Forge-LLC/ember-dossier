---
name: ember-dossier
description: Creates a current, comprehensive, and neutral briefing that leads with recency. Use when the user asks for an EmberDossier, a living dossier, a current briefing, or a recency-first profile of a person, organization, place, topic, or event.
---

# EmberDossier

Create a current, comprehensive, and neutral dossier on [SUBJECT].

**Core principle:** Bias strongly toward the most recent and relevant information by default. Lead with what is currently notable or active. Treat deeper historical background as secondary — keep it concise unless it is essential for understanding the present.

EmberDossier is a format, not a research agent. Use the host’s search or tools when you need facts newer than training data. Do not invent currency.

Begin every dossier with YAML frontmatter, then the seven sections.

```yaml
subject: Framework Computer
as_of: 2026-08-19
updated_from: 2026-07-20
```

- `subject` — required. The named subject.
- `as_of` — required. ISO date (`YYYY-MM-DD`) of this briefing. Compilation date, not an event date.
- `updated_from` — optional. ISO date of the dossier this update started from. Omit on a first write. On an update, set it to the previous `as_of` and set `as_of` to today. An update does not mean every older sentence was rechecked.

After the frontmatter on a partial update, add a short **Refresh note**: what was checked in this update, what was carried forward, and any material unresolved claims. Without current evidence, say so.

An agent can tell how stale a dossier is from `as_of`. Current means current to that compile, not continuously maintained. Do not invent dates. Put event dates and source publication dates in the body when they differ.

**Delivery.** By default, return the briefing in chat. Save a Markdown file only when the user explicitly requests a destination and the host can write files. Do not claim a file was saved when it was not.

Structure the response with these sections (adapt as needed):

1. **Snapshot**  
   One-paragraph overview focused on current status and significance.

2. **Why it matters right now**  
   What makes this subject notable or relevant at the present moment.

3. **Recent developments & current activity**  
   Key events, status changes, public presence, and ongoing work from the last 12–18 months (or most relevant recent period).

4. **Controversies & criticisms**  
   Focus on the most recent and ongoing disputes. Present multiple sides fairly. Note older controversies only briefly if they still shape the present.

5. **Background**  
   Concise historical and biographical context. Expand only as needed.

6. **Key people & entities in the orbit**  
   Current relationships, collaborators, opponents, and relevant organizations.

7. **Possible refinements of the subject**  
   Suggest 3–6 more precise, related, or alternative versions of the query that would make useful follow-ups.

**Requirements:**
- Remain factual and balanced.
- Prioritize the latest reliable information.
- Flag contested or partisan claims.
- Include specific dates, numbers, and concrete details where available.
- Briefly note major source types at the end.
- Use gender-neutral language. In this skill and in any demo, example subjects must be gender-neutral or obviously generic (organizations, places, topics, events, or clearly fictional names). Do not use real living people as examples unless the user named that subject.

## Example asks

- “Use the installed EmberDossier skill and its bundled fictional Harborview Public Library example. This is a format demonstration, not live research.”
- “Give me an EmberDossier on Framework Computer.”
- “Give me an EmberDossier on Northwind Analytics.”
- “Update the EmberDossier with anything from the last 30 days. Note what you rechecked.”
- “Read the EmberDossier first, then answer the question.”
- “I need a fresh EmberDossier on the current state of Project Lantern.”
- “Save this EmberDossier to harborview.md.”

Filled examples: invented [examples/harborview-public-library.md](examples/harborview-public-library.md); real [examples/ember-dossier.md](examples/ember-dossier.md) and [examples/framework-computer.md](examples/framework-computer.md). Use them to see section order. Do not treat Harborview as reporting.
