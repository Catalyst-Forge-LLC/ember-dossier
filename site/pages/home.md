---
title: What is true now, then what changed.
description: An installable briefing skill for AI agents. Prepare a briefing that starts with what is true now and what changed recently, then supplies the background.
order: 0
---

An installable briefing skill for AI agents. Prepare a briefing for a meeting or a project handoff. EmberDossier gives your research agent a consistent format: what is true now, what changed recently, then the background.

It is a format, not a research service. The agent you already use does the looking. The dossier is current to the sources checked for that run. Show its as-of date and mark sections that were not rechecked. It does not update itself.

<div class="cta-row">
  <a class="cta cta-primary" href="/skill">Install in your agent</a>
  <a class="cta cta-secondary" href="/harborview">See an example dossier</a>
</div>

## Example: before a partner meeting

Illustrative. **Harborview Public Library** is invented, and so is the meeting. Dates and figures are fixtures, not reporting. No real person or client is named.

A tutoring nonprofit meets Harborview Public Library on Thursday 20 August 2026 to propose weekly after-school sessions in the library. The day before, someone on the team asks their agent:

> I meet Harborview Public Library on Thursday to propose hosting our after-school tutoring there. Give me an EmberDossier.

An excerpt of the briefing, in the skill's section order:

```yaml
subject: Harborview Public Library
as_of: 2026-08-19
```

**1. Snapshot.** Harborview Public Library is a single-branch municipal library in the fictional city of Harborview. As of August 2026 it is open, with reduced hours, while the west wing stays closed for a renovation that has slipped twice. The current public date for a full reopening is 12 March 2027.

**2. Why it matters right now.** The city council votes on the 2027 facilities budget on 8 September 2026. The library’s remaining renovation funds sit in that packet.

**3. Recent developments & current activity.**

- **March 2025.** West-wing construction started. The children’s room moved to a partitioned corner of the main hall.
- **February 2026.** Sunday hours were cut to save staff time during the closure.
- **April 2026.** A new library director started.
- **July 2026.** The city posted a revised schedule: full reopening 12 March 2027, “weather and inspections allowing.”

**4. Controversies & criticisms.** Sunday hours are disputed. Families and the Friends board want Sundays restored now. Staff and the city manager’s office say extra shifts during a construction year pull people off weekday work. Both sides agree Sundays return after the west wing opens.

**7. Possible refinements of the subject.** Children’s services after the temporary move. Harborview facilities budget, September 2026 vote.

**Source types:** invented city notices, a fictional Friends newsletter, and a fake public-comment summary. A real briefing names the actual sources, such as city agendas and local reporting.

Background and key people (sections 5 and 6) are in the [full briefing](/harborview).

**What the team changed before the meeting.** These are the reader’s decisions, not part of the briefing. EmberDossier reports what is true now and flags what is disputed. What to do about it stays with you.

- Propose starting in the main hall this fall and moving into the west wing after it reopens, instead of asking for space the library does not have.
- Staff each session with the nonprofit’s own volunteers. Staff hours are the constraint behind the Sunday dispute, and a plan that costs library shifts takes a side in it.
- Ask the director, new since April, how the 8 September vote could move the reopening date.

Other filled examples: this product, and Framework Computer, on [Examples](/examples).

## What it reads, writes, and changes

| | |
| --- | --- |
| Reads | A subject you name: a person, organization, place, topic, or event |
| Writes | A briefing in seven sections, with YAML (`subject`, `as_of`) |
| Changes | By default, returns the briefing in chat. Saves a file when you explicitly request one and the host supports it |

## After a later compile

Illustrative update of the same invented subject, the day after the budget vote. `updated_from: 2026-08-19`. `as_of: 2026-09-09`. The 8 September facilities vote was heard. Public minutes have not been posted. The snapshot changes. Sunday hours remain unresolved. Older background was not rechecked just because the dossier was updated.

| Kind of date | In this example |
| --- | --- |
| Compilation date | `as_of` on the dossier |
| Event date | July 2026 revised schedule, 8 September vote |
| Source publication date | Named in a real dossier next to the claim. Invented here as city notices from those months. |

Section 7, possible refinements, is a list of follow-up questions. It is not sourced fact.

## The seven sections

1. Snapshot
2. Why it matters right now
3. Recent developments & current activity
4. Controversies & criticisms
5. Background
6. Key people and entities in the orbit
7. Possible refinements of the subject

Same shape every time. Humans read it. Agents update, compare, and hand it off.

[Install in your agent](/skill) · [Examples](/examples) · [Writing](/writing) · [About](/about) · [GitHub](https://github.com/Catalyst-Forge-LLC/ember-dossier)

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
