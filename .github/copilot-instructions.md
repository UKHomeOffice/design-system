# Copilot Cloud Agent Instructions

Trust these notes first. Search only when this file is incomplete or appears wrong.

## Repository Summary

This repository is the Home Office Design System: a pnpm monorepo of React/TypeScript components, supporting libraries, and example/documentation apps that extend the GOV.UK Design System for Home Office services. The workspace currently has about 30 pnpm projects under `apps/**`, `components/**`, and `lib/**`; `pnpm-workspace.yaml` also includes currently absent/future `components-internal/**`, `lib-govuk/**`, and `packages/**` paths.

Primary runtimes/frameworks: Node.js, pnpm 7, TypeScript, React 18, Jest 29 with ts-jest, Storybook 6, Webpack 5, Cypress 13, Next.js 15 for `apps/next-example`, and Remix/Vite for `apps/remix-example`. CI uses Ubuntu with Node 18, 20, and 22 for tests, and Node 22 for builds/app checks. The repo has no root lint script; lint exists only in some apps.

## Setup And Command Order

Always start at the repo root. CI setup copies `pnpm-lock-committed.yaml` to `pnpm-lock.yaml`, installs pnpm `7.33.6`, sets Node from the job matrix, then runs pnpm install. The root `pnpm:devPreinstall` script also performs the lockfile copy.

Use this bootstrap sequence for cloud-agent work:

```sh
cp pnpm-lock-committed.yaml pnpm-lock.yaml
pnpm install --no-frozen-lockfile
```

Validated locally on macOS with Node `v24.19.0`, npm `11.17.0`, pnpm `7.33.7`: `pnpm install --no-frozen-lockfile` completed successfully in about 4 seconds and reported the lockfile was up to date. CI uses pnpm `7.33.6`; prefer Node 22 when choosing one local runtime because app/build jobs use it.

Important lockfile rule: `pnpm-lock-committed.yaml` is the committed source of truth. `pnpm-lock.yaml` is generated/copied during setup and ignored by the `update-built-files` workflow. If dependency or patch metadata changes, update `pnpm-lock-committed.yaml` intentionally.

## Validation Commands

Run the smallest relevant check first, then broaden if the change touches shared behavior.

- Root unit tests: `npm test`. Validated locally: passed 22 suites, 190 tests, 8 skipped, in about 13.5 seconds reported by Jest. Writes `.jest-results.json` and `coverage/`.
- Single package tests: from a package directory, run `npm test`; component package Jest configs live at `components/<name>/jest.config.js` and extend root config.
- Library build: `npm run libs:build`. This is the CI command for libraries on Ubuntu/Node 22. On macOS it currently fails in `lib/create` because `lib/create/Makefile` uses GNU `cp --preserve=all`, which BSD `cp` does not support. Prefer validating this in the Linux cloud/CI environment; do not assume the macOS failure means the CI build is broken.
- App builds used by CI: `cd apps/docs && npm run build`, `cd apps/next-example && npm run build`, `cd apps/remix-example && npm run build`.
- Functional tests used by CI: from each app directory run `npm run test:functional:ci`. These start the built app with `start-server-and-test` and then run Cypress. CI runs each app across `chromium`, `firefox`, and `electron`.
- Focused app unit tests: from an app directory run `npm test`.
- App lint/typecheck: `apps/next-example` has `npm run lint`; `apps/remix-example` has `npm run lint` and `npm run typecheck`. There is no root lint/typecheck script.
- Storybook: root `npm run storybook` serves on port 9009; root `npm run build` is `build-storybook`.
- Docs dev server: `cd apps/docs && npm run dev`, then open `http://localhost:8080`. The root `npm start` intentionally fails and tells you to run an app start command instead.

PR CI is `.github/workflows/change-assurance.yml`: CodeQL static analysis, setup plus `npm test` on Node 18/20/22, `npm run libs:build`, app builds for `docs`, `next-example`, and `remix-example`, then Cypress functional tests for those apps. Push workflows also run Chromatic, Netlify deploy/test for docs, static security analysis/dependency scan, and an update-built-files job on `master`. `.drone.yml` is an older docs deployment path using Node 18 Alpine, pnpm 6.32.3, Docker, make, and Kubernetes.

## Layout And Architecture

- Root files: `package.json`, `pnpm-workspace.yaml`, `pnpm-lock-committed.yaml`, `babel.config.js`, `jest.config.js`, `jest.config.base.js`, `tsconfig*.json`, `cypress.config.mjs`, `plopfile.mjs`, `renovate.json`, `README.md`, `CONTRIBUTING.md`, `patches/`, `scripts/`, `.storybook/`, `.jest/`, `.github/`, `.zap/`.
- `components/<component>/`: publishable React component packages. Common shape is `src/<Component>.tsx`, `assets/<Component>.scss`, `spec/<Component>.ts`, `spec/<Component>.stories.mdx`, local `package.json`, `tsconfig.json`, and `jest.config.js`. Build is usually `tsc`; tests use Jest and `@not-govuk/component-test-helpers`.
- `lib/components/`: aggregate `@hods/components` package depending on all component packages.
- `lib/sass-base/`: shared Sass assets. `lib/plop-pack/` and `lib/create/` support package/app scaffolding via Plop and Make.
- `apps/docs/`: Webpack/isomorphic React documentation app. Important files are `src/common/page-wrap.tsx`, `src/common/pages/`, `src/server/index.ts`, `src/server/template.tsx`, and `webpack.config.js`. Content source also exists under top-level `docs/` and generated/served MDX pages under `apps/docs/pages/` and `apps/docs/src/common/pages/`.
- `apps/next-example/`: Next.js example app using HODS components. `apps/remix-example/`: Remix/Vite example app using HODS components.
- Root Jest config sets `TZ`, `LANG`, and `LC_ALL` to London/en_GB and collects coverage from `{apps,components,lib}/*/src/**.{ts,tsx}`.
- Root TypeScript config is strict, uses React classic JSX with Babel configured for JSX pragma `h`, and excludes generated `dist`/`node_modules` folders.

When changing components, update the component package source, Sass assets, README/docs, Jest spec, and Storybook MDX together when relevant. When adding packages, use `npm run create` / `npm run create:component` / `npm run create:app` so workspace/package conventions stay aligned.