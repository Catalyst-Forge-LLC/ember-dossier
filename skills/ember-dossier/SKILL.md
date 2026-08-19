---
name: ember-dossier
description: Creates a current, comprehensive, and neutral briefing that leads with recency. Use when the user asks for an EmberDossier, a living dossier, a current briefing, or a recency-first profile of a person, organization, place, topic, or event.
---

# EmberDossier

Create a current, comprehensive, and neutral dossier on [SUBJECT].

**Core principle:** Bias strongly toward the most recent and relevant information by default. Lead with what is currently notable or active. Treat deeper historical background as secondary — keep it concise unless it is essential for understanding the present.

EmberDossier is a format, not a research agent. Use the host’s search or tools when you need facts newer than training data. Do not invent currency.

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

- “Give me an EmberDossier on Harborview Public Library.”
- “Give me an EmberDossier on Framework Computer.”
- “Give me an EmberDossier on Northwind Analytics.”
- “Update the EmberDossier with anything from the last 30 days.”
- “Read the EmberDossier first, then answer the question.”
- “I need a fresh EmberDossier on the current state of Project Lantern.”

Filled examples: invented [examples/harborview-public-library.md](examples/harborview-public-library.md); real [examples/ember-dossier.md](examples/ember-dossier.md) and [examples/framework-computer.md](examples/framework-computer.md). Use them to see section order. Do not treat Harborview as reporting.
