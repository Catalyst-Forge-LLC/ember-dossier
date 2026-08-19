# EmberDossier

A living dossier that prioritizes what’s still hot.

Present tense first. Background second.

EmberDossier is a structured prompting pattern and agent skill. It produces current, neutral briefings on a person, organization, place, topic, or event. It is a format, not a research service.

Site: [emberdossier.com](https://emberdossier.com)

## Ask

- Give me an EmberDossier on Harborview Public Library.
- Give me an EmberDossier on Northwind Analytics.
- Update the EmberDossier with anything from the last 30 days.

Sample subjects are generic on purpose. A filled fixture: [Harborview Public Library](skills/ember-dossier/examples/harborview-public-library.md).

## Install

The npm package is **`emberdossier`**. Do not install `ember-dossier`. That name is an unrelated 2017 Ember addon.

```bash
pnpm add emberdossier
```

Copy `node_modules/emberdossier/skills/ember-dossier/` into the agent’s skills directory. Cursor wants a folder that contains `SKILL.md`.

## Site

FilePress explainer. Engine from npm (`getfilepress`).

```bash
pnpm install
pnpm --dir site install
pnpm site:dev
```

If LocalBerth is installed, this site stays on **5189** as `ember-dossier-site`.

## Spec

See [GENESIS.md](GENESIS.md). Planning brief: [docs/PHASE_1_BRIEF.md](docs/PHASE_1_BRIEF.md) (draft).

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
