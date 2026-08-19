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

Copy `node_modules/get-ember-dossier/skills/ember-dossier/` into the agent’s skills directory. Cursor wants a named folder that contains `SKILL.md`.

Two filled samples: invented [Harborview Public Library](/harborview), real [EmberDossier](/ember-dossier). In the package: `skills/ember-dossier/examples/`.

## From this repo

```bash
git clone https://github.com/Catalyst-Forge-LLC/ember-dossier.git
```

Same folder, at `skills/ember-dossier/`. This checkout already has a Cursor copy under `.cursor/skills/ember-dossier/`.

## What you say

- Give me an EmberDossier on Harborview Public Library.
- Give me an EmberDossier on Northwind Analytics.
- Update the EmberDossier with anything from the last 30 days.
- Compare these two EmberDossiers.

The agent should lead with current status, keep background short, flag contested claims, and end with refinements plus source types.

## What it is not

It does not crawl the web for you. It does not store dossiers. It tells the agent how to write the briefing.

If you need live facts, use an agent that can search. EmberDossier only fixes the order of the write-up.

[Sample](/sample) · [About](/about) · [GitHub](https://github.com/Catalyst-Forge-LLC/ember-dossier)
