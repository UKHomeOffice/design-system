Working on your project
=======================

(Ensure you have first [set up your project].)

Your project is a monorepo managed via [pnpm]. You can build multiple
packages from this one repository. Packages come in the following
varieties:
- [Applications] (found in `[apps/]`)
- [Libraries] (found in `[lib/]`)
- [Components] (found in `[components/]`)

**Note:** If you would like add more varieties you can do so by modifying
your `[pnpm-workspaces.yaml]` and `[plopfile.js]`.


Getting started
---------------

In order to work on this repository you will need to [install pnpm].

Once you have it installed you can pull down NPM dependencies for the
entire project by running:

```shell
pnpm install
```


Creating a new package
----------------------

To create a new package, simply run:
```shell
npm run create
```

This is all orchestrated from your `[plopfile.js]` so you can modify how
it works.

See: [PLOP]


Installing your packages
------------------------

You will often need to install the libraries and components that you
create into each other or into your applications. This can be done just
as you would install any other package:

```shell
pnpm install @{{{ dashCase name }}}/your-new-package
```

Under the hood, this will create a symlink so you need not worry about
updates. This helps when working on mutliple packages at the same time.


Your documentation
------------------

Your project comes with its own [documentation application] to allow you
to easily document your project, including any components that you create.

You can run it as you would any other application in your project:

```shell
cd apps/docs
npm run dev
```

We advise that you set up CI publish your documentation site when
pushing to the `master` branch.


Continuous Integration
----------------------

You project comes with configuration files for running Continuous
Integration (CI) via [GitHub Actions]. These files are found in the
`[.github/workflows]` directory.

If you add the required secrets to your GitHub repository, it is also
possible to quickly set up Continuous Deployment (CD) for your
documentation to [Netlify].


[set up your project]: ./get-started
[pnpm]: https://pnpm.js.org/
[Applications]: https://not-govuk.netlify.app/
[Libraries]: https://not-govuk.netlify.app/
[Components]: https://not-govuk.netlify.app/
[apps/]: ./apps/
[lib/]: ./lib/
[components/]: ./components/
[pnpm-workspaces.yaml]: ./pnpm-workspaces.yaml
[plopfile.js]: ./plopfile.js
[install pnpm]: https://pnpm.js.org/en/installation
[PLOP]: https://plopjs.com/
[documentation application]: ./apps/docs
[GitHub Actions]: https://github.com/features/actions
[.github/workflows]: ./.github/workflows
[Netlify]: https://www.netlify.com/
