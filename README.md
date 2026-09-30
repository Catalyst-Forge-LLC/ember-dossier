# EmberDossier

A living dossier that prioritizes what’s still hot.

Present tense first. Background second.

EmberDossier is a structured prompting pattern and agent skill. It produces current, neutral briefings on a person, organization, place, topic, or event, for reading before a meeting, a decision, or a handoff. It is a format, not a research service.

Site: [emberdossier.com](https://emberdossier.com)

## Ask

- I meet Harborview Public Library on Thursday to propose hosting our after-school tutoring there. Give me an EmberDossier.
- Refresh the EmberDossier for a project handoff. Anything since the last `as_of`.
- Give me an EmberDossier on Northwind Analytics.

Harborview and Northwind Analytics are invented names. Filled examples:

- [Harborview Public Library](skills/ember-dossier/examples/harborview-public-library.md): invented, with made-up dates compiled `as_of: 2026-08-19`. The [home page](https://emberdossier.com) shows it used to prepare for that partner meeting.
- [EmberDossier](skills/ember-dossier/examples/ember-dossier.md) and [Framework Computer](skills/ember-dossier/examples/framework-computer.md): real, researched briefings.

Each briefing is current to its `as_of` date. Nothing keeps it up to date after that.

## Get started

Pick the agent, install the skill, then ask for a named briefing:
[emberdossier.com/skill](https://emberdossier.com/skill).

- [Cursor](https://emberdossier.com/skill#cursor)
- [Claude Code](https://emberdossier.com/skill#claude-code)
- [Claude.ai](https://emberdossier.com/skill#claudeai)

> Use the installed EmberDossier skill and its bundled fictional
> Harborview Public Library example. This is a format demonstration,
> not live research. Identify the fixture as fictional, preserve its
> stated dates, and do not invent updates. Show the briefing in chat.

Product **EmberDossier**, npm package **`get-ember-dossier`**, skill
folder **`ember-dossier`**. Asking for an EmberDossier does not install
or load the skill by itself.

## Other installation methods

npm supplies the skill files. It does not register the skill with the
agent.

```bash
pnpm add get-ember-dossier
```

Copy `node_modules/get-ember-dossier/skills/ember-dossier/` into the
same destination the [Get started](https://emberdossier.com/skill)
page names for your agent.

Updating the npm dependency does not refresh a folder you already
copied. Copy again after you bump the package.

## Spec

See [GENESIS.md](GENESIS.md). Planning brief: [docs/PHASE_1_BRIEF.md](docs/PHASE_1_BRIEF.md) (draft).

## Site (maintainers)

[FilePress](https://getfilepress.com/) explainer. Engine from npm (`getfilepress`).

The canonical skill is `skills/ember-dossier/`. After editing it, run
`node scripts/sync-skill-static.mjs` to refresh the site downloads and the
checked-in Cursor installation, including its examples and label. This does
not refresh skills installed in another project or agent's global directory.

```bash
pnpm install
pnpm --dir site install
pnpm site:dev
pnpm ship          # FilePress build + Wrangler Pages (project: emberdossier)
```

If LocalSlip is installed, this site stays on **5196** as `ember-dossier-site`.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.

<!-- xfacts-label -->

## xFacts label

- **AppFacts:** [viewer](https://appfacts.dev/v#af1.eNpdkUFrAjEQhf_K8s5R6TW3IhQsbSnorZQyuzvG1GwSJrPKVvzvJUoFext47_G-mTnhAPtgEGlgWDjWGQ8ty6xPpXgWGOiUqxR8KyQTDIqSjgUW1Kk_MAyC7ziW6npdba6Obg97QqDoRnJV2UyZ1534rKZ5pgP9zcv1GgYyRvUXhLfU8_y7wGArNPAxyf4KtvWBs3Cp0i4V9dHBYhnS2G8DCTfv5LjgbNBzLrAfJ8QK6Vvhn0qZYfG4ano-cEh54KiNphT2XnE2V_O_mpqo2_quKV65cRxZSJPcAkeh6MLlTvmepucc0nRrwfnToB196OtdMnV7cvw1UCTHAosc81DZhXMqXpNMsNip5mIXC-d1N7bzLg2LJSmFqejsKYnj2cvLcnH_sPMvR1Wfxw) · [raw](https://github.com/Catalyst-Forge-LLC/ember-dossier/blob/main/APP_FACTS.md)
- **SkillFacts:** [viewer](https://skillfacts.dev/v#sf1.eNqdkU-LGzEMxb-K0akFT9KFnnxNu1DY3noLYfHYSkbEfwZJnjSEfPfiKdtt6R5KbwbrPen93g0WcA8Wis8IDj7nEflTFSFksBBxwVRnZHCw8-rTVdQ8Vj4hWFiQhWoBBx82D5uPYEHUaxNw4IPS0mcSBSzSnb9--QYWzlQiOAiNpfIgZ0oJLMyN57pO7Ri9ovEmNGYsak2oeWacsAgtaE3BpuyTGZnwSOVkdPJqEvoo5kI6GcaAJVzNu0RL_48_w5hj5ez1fd_GdcHiS0BwN5DauL9gUp3Fbbcn0qmNm1Dz9iXysEYenp52W-yAhviL0NzGRDK9RehugYoot6BUizwz-jCtKydMCRyUWjqjgnqpfAYHlOdEGMHCkRLKVRQzOGD0cbgw6eqptaZudkTGEjCC2x8sjK3EhPHZs9LRBxVw-xvMXidwgN99nhPKdvI8Vl4IL8N6eBgSjez5usnxtZ2qPc_d_q3_I_0_ao7sM_aAQ6-y6dvCgwU8MYp0QIoJMypfXyFFFKXiV5Lg9tBKJAmpCkY43C1MNePsT78XuR77cmuoGSwwzlVI6-r8f4UrtxK8du7KDe8_AJ11JUU) · [raw](https://github.com/Catalyst-Forge-LLC/ember-dossier/blob/main/skills/ember-dossier/SKILL_FACTS.md)

[See the rest of the Catalyst Forge shelf.](https://catalystforge.com/tools/)
