---
title: Skill
description: Get the folder from a ZIP, a git clone, or npm.
order: 1
---

The skill is a folder: `SKILL.md` plus the filled examples it points at. Get that folder one of these ways, then put it in a skills directory.

## Download the ZIP

[Download ember-dossier.zip](/skills/ember-dossier.zip)

Unpack it. Move the `ember-dossier` folder (the one that contains `SKILL.md`) into a skills directory.

On claude.ai, skip unpacking. Upload the ZIP under Settings, Customize, Skills.

## Clone the repo

```bash
git clone https://github.com/Catalyst-Forge-LLC/ember-dossier.git
```

Copy `skills/ember-dossier/` from the clone into a skills directory.

## Install from npm

```bash
pnpm add get-ember-dossier
```

Copy `node_modules/get-ember-dossier/skills/ember-dossier/` into a skills directory.

## Skills directories

- Claude Code, every project: `~/.claude/skills/ember-dossier/`
- Claude Code, one repo: `.claude/skills/ember-dossier/`
- Cursor: `.cursor/skills/ember-dossier/` or `~/.cursor/skills/ember-dossier/`

The folder you drop in must be named `ember-dossier` and must contain `SKILL.md`.

Filled examples live in that folder: invented [Harborview Public Library](/harborview), real [EmberDossier](/ember-dossier) and [Framework Computer](/framework-computer).

## What you say

- Give me an EmberDossier on Harborview Public Library.
- Give me an EmberDossier on Framework Computer.
- Give me an EmberDossier on Northwind Analytics.
- Update the EmberDossier with anything from the last 30 days.
- Compare these two EmberDossiers.

The agent should open with YAML (`subject`, `as_of`, optional `updated_from`), lead with current status, keep background short, flag contested claims, and end with refinements plus source types.

## What it is not

It does not crawl the web for you. It does not store dossiers. It tells the agent how to write the briefing.

If you need live facts, use an agent that can search. EmberDossier only fixes the order of the write-up.

[Examples](/examples) · [About](/about) · [GitHub](https://github.com/Catalyst-Forge-LLC/ember-dossier)
