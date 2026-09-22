---
title: Get started
description: Install EmberDossier in your agent, then ask for a briefing that starts with what is true now.
order: 1
---

Install the skill in your agent, then use it. You do not need Node or npm for this path. EmberDossier does not crawl the web or store dossiers. It tells the agent how to write the briefing.

By default, the briefing returns in chat. It saves a file only when you explicitly request one and the host supports it.

## Supported hosts

| Host | Scope | Required | Notes |
| --- | --- | --- | --- |
| Cursor | Project or user skills folder | Chat; optional file write | Skill discovery not independently verified |
| Claude Code | Project or `~/.claude/skills/` | Chat; optional file write | Skill discovery not independently verified |
| Claude.ai | Uploaded skill zip | Chat; host search if available | Skill discovery not independently verified |
| Other agents that read `SKILL.md` | Manual copy | Chat | Unverified |

A folder on disk is not proof the agent loaded the skill. Prefer the host’s skill list or a visible file-read of `SKILL.md`. A recognizable briefing alone does not prove loading.

## Which agent do you use?

- [Cursor](#cursor)
- [Claude Code](#claude-code)
- [Claude.ai](#claudeai)

## Cursor

### Get it

Download [ember-dossier.zip](/skills/ember-dossier.zip).

### Add it

Unzip it. You should see `SKILL.md` and the filled examples it points at.

Put that folder in the project:

`.cursor/skills/ember-dossier/`

[Install for all projects](#install-for-all-projects) if you want it in every Cursor project.

### Confirm it

If Cursor lists installed skills, confirm `ember-dossier`. Otherwise ask it to open `SKILL.md` from that folder and quote the first heading.

### Try it

> Use the installed EmberDossier skill and its bundled fictional Harborview Public Library example. This is a format demonstration, not live research. Identify the fixture as fictional, preserve its stated dates, and do not invent updates. Show the briefing in chat.

For a real subject, supply sources or explicitly ask the host to research, and say whether current sources are available.

### Find the result

The briefing appears in the chat. Success looks like this shape, not identical wording from every model:

- YAML with `subject` and `as_of` (compilation date)
- Snapshot first, background later
- Contested claims flagged
- Section 7 as follow-up questions, not sourced fact
- The fixture stays labeled fictional

That the example behaved is not the same check as discovery.

## Claude Code

### Get it

Download [ember-dossier.zip](/skills/ember-dossier.zip).

### Add it

Unzip, then put the folder in the repo:

`.claude/skills/ember-dossier/`

[Install for all projects](#install-for-all-projects) uses `~/.claude/skills/ember-dossier/` instead.

### Confirm it

If Claude Code lists skills, confirm `ember-dossier`. Otherwise ask it to open `SKILL.md` from that folder and quote the first heading.

### Try it

> Use the installed EmberDossier skill and its bundled fictional Harborview Public Library example. This is a format demonstration, not live research. Identify the fixture as fictional, preserve its stated dates, and do not invent updates. Show the briefing in chat.

### Find the result

The briefing appears in the chat. Same shape as Cursor. Optional file save is a separate request.

## Claude.ai

### Get it

Download [ember-dossier.zip](/skills/ember-dossier.zip).

### Add it

Do not unzip. Open Settings → Customize → Skills and upload the zip.

### Confirm it

If the product shows installed skills, confirm `ember-dossier`. Otherwise ask the chat to name the seven EmberDossier sections in order.

### Try it

> Use the installed EmberDossier skill and its bundled fictional Harborview Public Library example. This is a format demonstration, not live research. Identify the fixture as fictional, preserve its stated dates, and do not invent updates. Show the briefing in chat.

If you need live facts on a real subject, use an agent that can search. EmberDossier only fixes the order of the write-up.

### Find the result

The briefing appears in the chat.

## After the briefing

There is no apply skill. Read it.

Optional save (capable host):

> Save this EmberDossier to `harborview.md`.

Optional refresh:

> Refresh this EmberDossier from the attached earlier briefing. Set `updated_from` from its `as_of`. Add a short note of what you rechecked, what you carried forward, and what remains unresolved. Do not claim every older sentence was revalidated. Ask whether to replace the file or write a new one.

`as_of` is a compilation date. A newer date never implies every claim was rechecked.

### Update or remove

Replace the installed `ember-dossier` folder (or re-upload the zip) to update. Delete that folder or remove the uploaded skill to uninstall. Copied skills do not refresh when you bump the npm package.

## Other ways to ask

Once the first run works:

- Refresh the EmberDossier for a project handoff. Anything since the last `as_of`.
- Read the EmberDossier first, then answer the question.
- Compare these two EmberDossiers.

Those are later shortcuts. They are not the install check.

## Other installation methods

Names: product **EmberDossier**, npm package **`get-ember-dossier`**, skill folder **`ember-dossier`**.

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

Same folder shape. Discovery and first-use checks are the same.

Filled examples: invented [Harborview Public Library](/harborview), real [EmberDossier](/ember-dossier) and [Framework Computer](/framework-computer).
