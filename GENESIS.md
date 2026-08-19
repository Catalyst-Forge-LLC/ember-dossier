**EmberDossier**

A living dossier that prioritizes what’s still hot.

---

### The Problem

Most profiles and briefings are written like obituaries or encyclopedia entries. They start in the past, spend too long on origin stories, and only eventually arrive at the present.

In fast-moving environments — research, journalism, due diligence, strategy, or agent workflows — that ordering is backwards. What usually matters most is:

- What is true *right now*?
- What changed recently?
- Who is currently in the orbit?
- What controversies are active?

EmberDossier inverts the default. It treats the present as the primary signal and the past as supporting context.

---

### What It Is

EmberDossier is a structured prompting pattern (and skill) for producing current, neutral, and usable briefings on any subject: person, organization, place, topic, or event.

It is designed to be:

- **Readable by humans**
- **Consumable by agents**
- **Shareable and updatable**
- **Consistent across runs**

The output always leads with recency, keeps background concise by default, and ends with suggested refinements so the next question is already half-formed.

---

### Core Principles

1. **Recency bias by default**  
   Current status and recent developments come first. Historical material is secondary.

2. **Neutral and sourced**  
   Facts over narrative. Contested claims are flagged. Multiple sides are presented when relevant.

3. **Orbit awareness**  
   People and entities are understood partly through who surrounds them *now*.

4. **Refinement built in**  
   Every dossier ends with practical ways to narrow, expand, or pivot the subject.

5. **Agent-native**  
   The format is predictable enough that agents can request, update, compare, and hand off EmberDossiers cleanly.

---

### Why This Is Worth Standardizing

Most teams and agents reinvent briefing formats every time. The result is inconsistent depth, buried current information, and repeated work.

A shared pattern like EmberDossier creates a common language:

- “Pull an EmberDossier on X”
- “Update the existing EmberDossier”
- “Read the EmberDossier before proceeding”
- “Compare these two EmberDossiers”

When both humans and agents use the same structure, handoffs become smoother, context survives longer, and less time is spent re-explaining what “a good briefing” looks like.

In short: it turns an ad-hoc research habit into a reusable tool.

---

### Example Usage

Use gender-neutral language. Example subjects should be gender-neutral or obviously generic (organizations, places, topics, events, or clearly fictional names). Do not use real living people as examples unless the user named that subject.

- “Give me an EmberDossier on Harborview Public Library.”
- “Give me an EmberDossier on Northwind Analytics.”
- “Update the EmberDossier with anything from the last 30 days.”
- “Read the EmberDossier first, then answer the question.”
- “I need a fresh EmberDossier on the current state of Project Lantern.”

---

### The Skill

```markdown
# EmberDossier

Create a current, comprehensive, and neutral dossier on [SUBJECT].

**Core principle:** Bias strongly toward the most recent and relevant information by default. Lead with what is currently notable or active. Treat deeper historical background as secondary — keep it concise unless it is essential for understanding the present.

Begin every dossier with YAML frontmatter (`subject`, `as_of`, optional `updated_from`), then the seven sections.

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
- Use gender-neutral language. Example subjects in this skill and in demos must be gender-neutral or obviously generic. Do not use real living people as examples unless the user named that subject.
```

---

EmberDossier is small on purpose. It does not try to be a full research agent. It is a disciplined way of asking for the present tense first — and making that request repeatable.