# Agent guardrails — EmberDossier

This repo uses **ForgeTrail** lifecycle tracking. Source of truth: `.forgetrail/workflow_tracking.json`.

## Session start

1. Read `.forgetrail/workflow_tracking.json` and `docs/PHASE_1_BRIEF.md` (or `CONTEXT_PROMPT.md` once it exists) before making changes.
2. Check `currentPhase` and stay in that phase unless the user confirms a transition.

## Product rules

- EmberDossier is a format, not a research agent.
- Example subjects in shipped docs are gender-neutral or obviously generic.
- Publishable prose follows Smell Check. Overlay: `docs/smellcheck.md`.

## Git commits

- Plain `git commit -m "..."` or `git commit -F <file>`.
- No unrequested attribution trailers.
- Commit after substantive work. Do not push unless the user asks.

## Phase transitions

Do not advance `currentPhase` without explicit user confirmation.
