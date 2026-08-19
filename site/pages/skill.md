---
title: Skill
description: Point an agent at EmberDossier. Copy one folder that contains SKILL.md.
order: 1
---

EmberDossier is Markdown you point an agent at. Copy `skills/ember-dossier/` into the agent’s skills directory. Cursor wants a named folder that contains `SKILL.md`.

## From this repo

```bash
git clone https://github.com/Catalyst-Forge-LLC/ember-dossier.git
```

Then copy `skills/ember-dossier/` into:

- Cursor: `.cursor/skills/ember-dossier/`
- Other hosts: that product’s skill folder

This checkout already has the Cursor copy.

## What you say

- Give me an EmberDossier on Northwind Analytics.
- Update the EmberDossier with anything from the last 30 days.
- Compare these two EmberDossiers.

The agent should lead with current status, keep background short, flag contested claims, and end with refinements plus source types.

## What it is not

It does not crawl the web for you. It does not store dossiers. It tells the agent how to write the briefing.

If you need live facts, use an agent that can search. EmberDossier only fixes the order of the write-up.

[About the pattern](/about) · [GitHub](https://github.com/Catalyst-Forge-LLC/ember-dossier)
