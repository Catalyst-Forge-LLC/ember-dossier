---
title: Present tense first.
description: An installable briefing skill for AI agents. Prepare a briefing that starts with what is true now and what changed recently, then supplies the background.
order: 0
---

An installable briefing skill for AI agents. Prepare a briefing for a meeting or a project handoff. EmberDossier gives your research agent a consistent format: what is true now, what changed recently, then the background.

It is a format, not a research service. The agent you already use does the looking. Current means current to the compile date on the dossier, not continuously maintained.

<div class="cta-row">
  <a class="cta cta-primary" href="/skill">Install in your agent</a>
  <a class="cta cta-secondary" href="/harborview">See an example dossier</a>
</div>

## Labeled example

**Harborview Public Library** is invented. Fixtures, not reporting. Compiled **19 August 2026** (`as_of`). Event dates below are when the events occurred. Source types are invented notices from those months. No real person or client is named.

**Snapshot.** Harborview Public Library is a single-branch municipal library in the fictional city of Harborview. As of August 2026 it is open, with reduced hours, while the west wing stays closed for a renovation that has slipped twice. The current public date for a full reopening is 12 March 2027.

**One dated development.** July 2026: the city posted a revised schedule, west wing still closed, full reopening 12 March 2027, weather and inspections allowing.

**A dispute that stays open.** Sunday hours. Families and the Friends board want Sundays restored now. Staff and the city manager’s office say two extra shifts during a construction year pull people off weekday work. Both sides agree Sundays return after the west wing opens. They disagree on whether that is soon enough.

Full seven sections: [Harborview](/harborview). Other filled examples: this product, and Framework Computer, on [Examples](/examples).

## What it reads, writes, and changes

| | |
| --- | --- |
| Reads | A subject you name: a person, organization, place, topic, or event |
| Writes | A briefing in seven sections, with YAML (`subject`, `as_of`) |
| Changes | Nothing in your files. It is a format for the write-up |

## After a later compile

Illustrative update of the same invented subject. `updated_from: 2026-08-19`. `as_of: 2026-09-09`. The 8 September facilities vote was heard. Public minutes have not been posted. The snapshot changes. Sunday hours remain unresolved. Older background was not rechecked just because the dossier was updated.

| Kind of date | In this example |
| --- | --- |
| Compilation date | `as_of` on the dossier |
| Event date | July 2026 revised schedule, 8 September vote |
| Source publication date | Named in a real dossier next to the claim. Invented here as city notices from those months. |

Section 7, possible refinements, is a list of follow-up questions. It is not sourced fact.

## The seven sections

1. Snapshot
2. Why it matters right now
3. Recent developments and current activity
4. Controversies and criticisms
5. Background
6. Key people and entities in the orbit
7. Possible refinements of the subject

Same shape every time. Humans read it. Agents update, compare, and hand it off.

[Install in your agent](/skill) · [Examples](/examples) · [Writing](/writing) · [About](/about) · [GitHub](https://github.com/Catalyst-Forge-LLC/ember-dossier)

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
