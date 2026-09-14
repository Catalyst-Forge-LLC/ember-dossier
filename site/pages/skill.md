---
title: Get started
description: Install EmberDossier in your agent, then ask for a briefing that starts with what is true now.
order: 1
---

Install the skill in your agent, then use it. You do not need Node or npm for this path. EmberDossier does not crawl the web or store dossiers. It tells the agent how to write the briefing.

## Which agent do you use?

- [Cursor](#cursor)
- [Claude Code](#claude-code)
- [Claude.ai](#claudeai)

A folder on disk is not proof the agent found the skill. The first run below is the check.

## Cursor

### Get it

Download [ember-dossier.zip](/skills/ember-dossier.zip).

### Add it

Unzip it. You should see `SKILL.md` and the filled examples it points at.

Put that folder in the project:

`.cursor/skills/ember-dossier/`

[Install for all projects](#install-for-all-projects) if you want it in every Cursor project.

### Confirm it

Ask Cursor for an EmberDossier on Harborview Public Library. If it opens with current status and keeps background short, it found the skill.

### Try it

> Use EmberDossier. Follow the installed EmberDossier skill. Give me an EmberDossier on Harborview Public Library.

The invented library is a labeled fixture in the skill folder. You can also name a real subject you already have sources for.

### Find the result

The briefing appears in the chat. Success looks like this shape, not identical wording from every model:

- YAML with `subject` and `as_of`
- Snapshot first, background later
- Contested claims flagged
- Section 7 as follow-up questions, not sourced fact

It does not write a report folder next to a file unless you ask it to save the briefing.

## Claude Code

### Get it

Download [ember-dossier.zip](/skills/ember-dossier.zip).

### Add it

Unzip, then put the folder in the repo:

`.claude/skills/ember-dossier/`

[Install for all projects](#install-for-all-projects) uses `~/.claude/skills/ember-dossier/` instead.

### Confirm it

Same check as Cursor: present tense first.

### Try it

Same request as [Cursor](#try-it).

### Find the result

Same shape as [Cursor](#find-the-result).

## Claude.ai

### Get it

Download [ember-dossier.zip](/skills/ember-dossier.zip).

### Add it

Do not unzip. Open Settings → Customize → Skills and upload the zip.

### Confirm it

Start a chat and run the request below. If the agent writes an EmberDossier, it loaded the skill.

### Try it

Same request as [Cursor](#try-it). If you need live facts, use an agent that can search. EmberDossier only fixes the order of the write-up.

### Find the result

The briefing appears in the chat.

## After the briefing

There is no apply skill. Read it. Refresh later with a new `as_of` and `updated_from`. An update does not mean every older sentence was rechecked.

## Other ways to ask

Once the first run works:

- Refresh the EmberDossier for a project handoff. Anything since the last `as_of`.
- Read the EmberDossier first, then answer the question.
- Compare these two EmberDossiers.

Those are later shortcuts. They are not the install check.

## Other installation methods

npm supplies the skill files. It does not register the skill with the agent.

```bash
pnpm add get-ember-dossier
```

Copy `node_modules/get-ember-dossier/skills/ember-dossier/` into the same destination you would use above.

Updating the npm dependency does not refresh a folder you already copied. Copy again after you bump the package.

Or clone the [repo](https://github.com/Catalyst-Forge-LLC/ember-dossier) and copy `skills/ember-dossier/`.

### Install for all projects

- Cursor: `~/.cursor/skills/ember-dossier/`
- Claude Code: `~/.claude/skills/ember-dossier/`

Same folder shape. The first-run check is the same.

Filled examples: invented [Harborview Public Library](/harborview), real [EmberDossier](/ember-dossier) and [Framework Computer](/framework-computer).
