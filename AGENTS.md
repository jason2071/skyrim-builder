# Repository Guidelines

## Project Structure & Module Organization

- `src/` contains the TypeScript application: `app.ts` manages browser interaction, `data.ts` defines perk trees, and `descriptions-th.ts` maps English perk descriptions to Thai.
- Tests live beside implementation in `src/*.spec.ts`.
- `static/` contains deployable assets, including `index.html`, the English `respec.html`, Thai `respec-th.html`, `style.css`, and `favicon.svg`.
- `docs/skyrim_vanilla_perks_en_th.md` is the bilingual vanilla-perk reference. Treat it as the project source of truth when updating perk behavior or Thai descriptions.
- `.github/workflows/deploy.yml` builds and deploys pushes to `main`.

## Build, Test, and Development Commands

Run commands from the repository root after `npm ci` or `npm install`:

- `npm run build` compiles TypeScript to `build/` and copies `static/` assets.
- `npm test` runs Jest once.
- `npm run test:dev` watches and reruns tests.
- `npm run server` serves `build/` with caching disabled; build first.
- `npm run dev` watches `src/` and `static/`, then rebuilds and restarts the local server.

## Perk Data and Translation

Keep `data.ts` descriptions in English and preserve perk names, IDs, rank counts, requirements, and tree positions unless verified source data says otherwise. When a description changes, update its exact English-string key in `descriptions-th.ts`; otherwise Thai mode falls back to English.

Use `docs/skyrim_vanilla_perks_en_th.md` to verify values, ranks, and behavior. Keep proper nouns and game terms in English—such as `Magicka`, `Atronach`, `Heavy Armor`, and perk names—while translating only the mechanic. Preserve every numeric value, percentage, condition, and target. For example: `Half damage from falling` means damage from falling from a height, not a generic stumble.

## Coding Style and Tests

Use strict TypeScript with `camelCase` variables/functions and `PascalCase` types/classes. Match nearby formatting; do not introduce unrelated reformatting. Add or update Jest tests for changed behavior, especially perk state, dependencies, and UI coordinate handling. Run `npm test` and `npm run build` before submitting changes.

## Commits and Pull Requests

Use concise imperative subjects, for example `Correct Mage Armor ranks`. Keep `build/` and `node_modules/` out of commits. Pull requests should explain user-visible changes, list verification commands, link relevant issues, and include screenshots for UI updates. Preserve upstream attribution and the GPL-3.0-or-later license.
