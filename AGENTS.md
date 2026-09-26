# Repository Guidelines

## Project Structure & Module Organization

- `src/app.ts` handles the canvas, perk selection, language choice, URL state, and script exports; `src/data.ts` defines perk trees. `src/bitarray.ts` encodes build links.
- `src/perk-descriptions-th.ts` maps perk names to Thai descriptions; `src/descriptions-th.ts` provides English-description-keyed fallback translations. Tests are colocated in `src/*.spec.ts`.
- `static/` contains `index.html`, English `respec.html`, Thai `respec-th.html`, `style.css`, and `favicon.svg`. The build copies these files into `build/`.
- `docs/skyrim_vanilla_perks_en_th.md` is the bilingual vanilla-perk reference. `.github/workflows/deploy.yml` publishes `build/` to `gh-pages` on pushes to `main`.

## Build, Test, and Development Commands

Run from the repository root after `npm ci`:

- `npm run dev` watches `src/` and `static/`, rebuilds, and serves the site at `http://localhost:8080/`.
- `npm run build` compiles TypeScript and copies static assets to `build/`.
- `npm run server` serves an existing `build/` with caching disabled.
- `npm test` runs Jest once; `npm run test:dev` watches tests.

## Perk Data, Translation & UI

Keep English descriptions in `data.ts`. Verify mechanics, ranks, IDs, prerequisites, and numeric values against the bilingual reference before changing them. Preserve proper nouns and game terms such as `Magicka`, `Atronach`, and `Heavy Armor` in Thai text. The Thai display lookup checks `perk-descriptions-th.ts` by perk name first, then `descriptions-th.ts` by exact English description; update the applicable entry when source text changes. English is the default display language.

Keep English footer text, GitHub links, and attribution consistent across all three HTML pages: this repository is `jason2071/skyrim-builder`, and the original is `chrizel/skyrim` by Christian Zeller. Keep the respec guide links and exported filenames (`reset.txt`, `addperks.txt`) aligned with actual UI behavior.

## Coding Style & Testing

Use strict TypeScript, `camelCase` for values/functions, and `PascalCase` for types/classes. Match nearby formatting; avoid unrelated reformatting. Add or update colocated Jest tests for changed perk state, dependencies, export logic, or UI coordinate handling. Run `npm test` and `npm run build` before submitting.

## Commits & Pull Requests

Use concise imperative subjects, as in `Correct Mage Armor ranks`. Exclude `build/` and `node_modules/`. PRs should describe visible changes, list verification, link relevant issues, and include screenshots for UI changes. Preserve upstream attribution and the GPL-3.0-or-later license.
