# Repository Guidelines

## Project Structure & Module Organization

- `src/` contains the TypeScript application. `app.ts` owns browser UI behavior, `data.ts` defines perk data, and `bitarray.ts` contains reusable perk-state encoding logic.
- `src/*.spec.ts` contains Jest unit tests next to the code they exercise.
- `static/` contains files copied unchanged into the production output: `index.html`, `respec.html`, and `style.css`.
- `.github/workflows/deploy.yml` installs dependencies, builds the site, and deploys `build/` to GitHub Pages. The workflow currently runs for pushes to `master`; keep that branch setting aligned with the repository's deployment branch.

## Build, Test, and Development Commands

Run commands from the repository root after `npm install` (or `npm ci` for a reproducible install):

- `npm run build` compiles TypeScript into `build/` and copies `static/*` there.
- `npm test` runs the Jest suite once.
- `npm run test:dev` reruns Jest while files change.
- `npm run server` serves the existing `build/` directory locally; run `npm run build` first.

## Coding Style & Naming Conventions

Use TypeScript with strict typing; the compiler enables `strict` and `noImplicitAny`. Match the surrounding file's formatting: two-space indentation in most current source and test code, semicolons, double-quoted imports, and braces on the same line. Use `camelCase` for variables and functions, `PascalCase` for types and classes (for example, `PerkTreeView`), and descriptive names for user-visible state. Keep DOM-related code in `app.ts`; keep data-model changes isolated in `data.ts` when possible. There is no configured formatter or lint command, so avoid unrelated reformatting.

## Testing Guidelines

Tests use Jest with `ts-jest` and the `jsdom` environment. Name new tests `*.spec.ts` under `src/`; use `describe` blocks for the unit and concise `test` descriptions such as `"get and set"`. Add or update tests for changed logic, especially bit-array encoding, perk dependencies, and URL/state behavior. Run `npm test` before opening a pull request.

## Commit & Pull Request Guidelines

Use short, imperative commit subjects that describe one change, following existing history: `Add upstream project attribution`. Keep generated `build/` files and `node_modules/` out of commits. Pull requests should explain the behavioral change, list tests run, link relevant issues, and include screenshots for changes to the calculator or respec UI. Preserve the upstream attribution and GPL-3.0-or-later license when modifying this derived project.
