# Agent guardrails — EmberDossier

This repo uses **ForgeTrail**. The record is `appledger/`: the phase in `profiles/forgetrail.yaml`, and decisions and the session in `records/`.

## Session start

1. Read `appledger/profiles/forgetrail.yaml`, the latest session record, and `docs/PHASE_1_BRIEF.md` (or `CONTEXT_PROMPT.md` once it exists) before making changes.
2. Stay in the current phase unless the user confirms a transition.

## Product rules

- EmberDossier is a format, not a research agent.
- Example subjects in shipped docs are gender-neutral or obviously generic.
- Publishable prose follows Smell Check. Overlay: `docs/smellcheck.md`.

## Git commits

- Plain `git commit -m "..."` or `git commit -F <file>`.
- Commit after substantive work. Do not push unless the user asks.

## Phase transitions

Do not advance `currentPhase` without explicit user confirmation.
