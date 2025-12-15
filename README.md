# Home Office Design System

The [design system for the UK Home Office].

This design system is for everyone. Its purpose is to extend the
[GOV.UK Design System] with work specific to the Home Office.

The system contains patterns, components and styles to improve consistency
across services and reduce duplication of work.

## Contributing

You can contribute by discussing and proposing components and patterns.

Read our [contribution guidelines] and then check the [community backlog] to see
what's needed.

## Working on this repository

This project is a monorepo managed via [pnpm]. You can build multiple
packages from this one repository. Packages come in the following
varieties:

- [Applications] (found in [apps/])
- [Libraries] (found in [lib/])
- [Components] (found in [components/])

**Note:** If you would like add more varieties you can do so by modifying
the [pnpm-workspaces.yaml] and [plopfile.js].

## Getting started

In order to work on this repository you will need to [install pnpm].

Once you have it installed you can pull down NPM dependencies for the
entire project by running:

```shell
npm install -g pnpm@^7
pnpm install
```

## Creating a new package

To create a new package, simply run:

```shell
npm run create
```

This is all orchestrated from the [plopfile.js] so you can modify how
it works.

See: [PLOP]

## Installing new packages

You will often need to install the libraries and components that we create into
each other or into our applications. This can be done just as you would install
any other package:

```shell
pnpm install @hods/our-new-package
```

Under the hood, this will create a symlink so you need not worry about
updates. This helps when working on mutliple packages at the same time.

## Our documentation

This project comes with its own [documentation application] to allow you
to easily document this project, including any components that you create.

You can run it as you would any other application in this project:

```shell
cd apps/docs
npm run dev
```

We publish our documentation site when pushing to the `master` branch.

[design system for the UK Home Office]: https://design.homeoffice.gov.uk/
[GOV.UK Design System]: https://design-system.service.gov.uk/
[contribution guidelines]: https://github.com/UKHomeOffice/design-system/blob/master/CONTRIBUTING.md
[community backlog]: https://github.com/UKHomeOffice/design-system/projects/1
[pnpm]: https://pnpm.js.org/
[Applications]: https://not-govuk.netlify.app/
[Libraries]: https://not-govuk.netlify.app/
[Components]: https://not-govuk.netlify.app/
[apps/]: ./apps/
[lib/]: ./lib/
[components/]: ./components/
[pnpm-workspaces.yaml]: ./pnpm-workspaces.yaml
[plopfile.js]: ./plopfile.js
[install pnpm]: https://pnpm.io/installation
[PLOP]: https://plopjs.com/
[documentation application]: ./apps/docs
