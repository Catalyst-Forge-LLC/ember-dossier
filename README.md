# EmberDossier

A living dossier that prioritizes what’s still hot.

Present tense first. Background second.

EmberDossier is a structured prompting pattern and agent skill. It produces current, neutral briefings on a person, organization, place, topic, or event. It is a format, not a research service.

## Ask

- Give me an EmberDossier on Northwind Analytics.
- Update the EmberDossier with anything from the last 30 days.
- Read the EmberDossier first, then answer the question.
- I need a fresh EmberDossier on the current state of Project Lantern.

Sample subjects in this repo are generic on purpose.

## Skill

```text
skills/ember-dossier/
```

Copy that folder into the agent’s skills directory. Cursor: `.cursor/skills/ember-dossier/` (already in this checkout).

## Site

FilePress explainer. Local engine via `link:../../filepress`.

```bash
pnpm install
pnpm --dir site install
pnpm site:dev
```

If LocalBerth is installed, this site stays on **5189** as `ember-dossier-site`.

## Spec

See [GENESIS.md](GENESIS.md). Planning brief: [docs/PHASE_1_BRIEF.md](docs/PHASE_1_BRIEF.md) (draft).

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
