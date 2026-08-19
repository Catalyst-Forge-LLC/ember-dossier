# EmberDossier

A living dossier that prioritizes what’s still hot.

Present tense first. Background second.

EmberDossier is a structured prompting pattern and agent skill. It produces current, neutral briefings on a person, organization, place, topic, or event. It is a format, not a research service.

Site: [emberdossier.com](https://emberdossier.com)

## Ask

- Give me an EmberDossier on Harborview Public Library.
- Give me an EmberDossier on Northwind Analytics.
- Update the EmberDossier with anything from the last 30 days.

Example subjects are generic on purpose unless a real one is named. Filled examples: invented [Harborview Public Library](skills/ember-dossier/examples/harborview-public-library.md), real [EmberDossier](skills/ember-dossier/examples/ember-dossier.md) and [Framework Computer](skills/ember-dossier/examples/framework-computer.md).

## Install

```bash
pnpm add get-ember-dossier
```

Copy `node_modules/get-ember-dossier/skills/ember-dossier/` into the agent’s skills directory. Cursor wants a folder that contains `SKILL.md`.

## Site

FilePress explainer. Engine from npm (`getfilepress`).

```bash
pnpm install
pnpm --dir site install
pnpm site:dev
pnpm ship          # FilePress build + Wrangler Pages (project: emberdossier)
```

If LocalBerth is installed, this site stays on **5189** as `ember-dossier-site`.

## Spec

See [GENESIS.md](GENESIS.md). Planning brief: [docs/PHASE_1_BRIEF.md](docs/PHASE_1_BRIEF.md) (draft).

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
