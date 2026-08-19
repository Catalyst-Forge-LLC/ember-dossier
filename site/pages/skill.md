---
title: Skill
description: Install EmberDossier from npm, then copy one folder that contains SKILL.md.
order: 1
---

EmberDossier is Markdown you point an agent at. Install **`get-ember-dossier`** from npm, then copy the skill folder.

## From npm

```bash
pnpm add get-ember-dossier
```

Copy `node_modules/get-ember-dossier/skills/ember-dossier/` into the agent’s skills directory. Agents load a named folder that contains `SKILL.md`.

Filled examples: invented [Harborview Public Library](/harborview), real [EmberDossier](/ember-dossier) and [Framework Computer](/framework-computer). In the package: `skills/ember-dossier/examples/`.

## From this repo

```bash
git clone https://github.com/Catalyst-Forge-LLC/ember-dossier.git
```

Same folder, at `skills/ember-dossier/`.

## What you say

- Give me an EmberDossier on Harborview Public Library.
- Give me an EmberDossier on Framework Computer.
- Give me an EmberDossier on Northwind Analytics.
- Update the EmberDossier with anything from the last 30 days.
- Compare these two EmberDossiers.

The agent should lead with current status, keep background short, flag contested claims, and end with refinements plus source types.

## What it is not

It does not crawl the web for you. It does not store dossiers. It tells the agent how to write the briefing.

If you need live facts, use an agent that can search. EmberDossier only fixes the order of the write-up.

[Examples](/examples) · [About](/about) · [GitHub](https://github.com/Catalyst-Forge-LLC/ember-dossier)
