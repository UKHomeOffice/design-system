Getting Started
===============

In order to consume these components you will require a system that
utilised a bundler (such as [Webpack]) that can process imported assets
such as images, fonts and [Sass] files. [Create React App] may be able to
do this but does not provide Server-Side Rendering (SSR). You will also
need to ensure that you provide an instance of [react-router].

As such, we suggest that you use our specially designed tech stack for
this purpose. You can start a brand new project or prototype using the
following steps.


### 1. Set up your repository

You should first set up a blank code repository in the provider of your
choice. For the purposes of this document I will assume [GitHub] as we
provide extra CI support through [GitHub Actions].


### 2. Run the following commands locally

(The parts in ALL CAPS should be replaced with something specific to
you.)

```shell
mkdir YOUR-PROJECT
cd YOUR-PROJECT
git init
git remote add origin git@github.com:YOUR_USER/YOUR-PROJECT.git
npm init @not-govuk
```


### 3. Answer the interactive prompts

Our generator / initialiser will ask you some questions about your new
project.

The most important choice is whether to start a new project or
a prototype:
- **Prototype**
  A simple stand-alone application. Use this if you just want to play
  around with the components or you want to build a prototype prior to
  starting a full project.
  (If you already have a project, you might prefer to run
  `npm run create:app` instead.)
- **Project**
  A monorepo designed to handle an entire project including multiple
  applications, and reusable libraries and components.

If you create a new project you should pull down dependencies at this
point in order to update your lock-file:

```shell
pnpm install
```


### 4. Commit and push your new project

Run the following commands to push up the first version of your new
project to your remote code repository:

```shell
git add .
git commit -m 'Initial commit'
git push -u origin master
```


### 5. Start working on your project

Read the generated README for details on how to work on your project and
the tools you will need to have installed. See also:
[Working on your project]


### 6. Optional: Set up Continuous Integration

We provide some workflows for [GitHub Actions] to help you set-up
Continuous Integration (CI) for your project. This allows you to gain
assurance over proposed changes to your project by doing things like
running unit tests, visual regression tests on components, and building
and testing your applications.

The unit tests and builds should run with no extra set-up if you are
using GitHub. (You will need translate them into another CI system if you
wish to use something else.) The others will require some work to set
them up.


#### 6.1. Chromatic

We provide a workflow for publishing your Storybook to the [Chromatic]
service. This allows you to detect and review any visual changes made to
your components and so avoid accidental regressions.

1. Sign up and [log in to Chromatic]
2. Add your project
3. Take note of your 'project token'
4. Create a new secret in GitHub called `CHROMATIC_PROJECT_TOKEN` with
   the value set to the one provided to you by Chromatic.

Once that is done you should be able to detect and review visual changes
to your components.

You should consider making these checks mandatory to prevent unauthorised
changes being merged in to your `master` branch.


### 7. Optional: Set up Continuous Deployment

The included 'docs' application can be automatically deployed to
[Netlify]. This allows you to introduce people to your project as well
as any components and libraries that you publish whilst remaining 'on
brand'.

1. Sign up and [log in to Netlify]
2. Create a new site by following the [Netlify documentation]
   To avoid giving unnecessary access to Netlify, consider using the CLI
   tool as follows:
   ```shell
   npm install netlify-cli -g
   netlify login
   netlify init --manual
   ```
   You can safely ignore the ssh key and webhook as we will be building
   on GitHub Actions instead of Netlify.
3. Create a new secret in GitHub called `NETLIFY_SITE_ID` by following
   the information here:
   https://docs.netlify.com/cli/get-started/#link-with-an-environment-variable
4. Create a new secret in GitHub called `NETLIFY_AUTH_TOKEN` by following
   the information here:
   https://docs.netlify.com/cli/get-started/#obtain-a-token-in-the-netlify-ui

Once this is in place your Netlify site should be updated whenever you
push to your `master` branch.

Once your website is up and running, you should consider linking to it
from your README, your `package.json` and your GitHub repository.


### 8. Optional: Protect the master branch

You should consider protecting your `master` branch to gain the full
benefits of CI. In particular you might want to make the following checks
mandatory prior to merging:

- 'Unit test'
- 'Build' (which ensures your apps can be built)
- 'UI Tests' & 'UI Review' (which protect you against visual regressions)


-- Daniel Martin, August 2020.


[Webpack]: https://webpack.js.org/
[Sass]: https://sass-lang.com/
[Create React App]: https://create-react-app.dev/
[react-router]: https://reactrouter.com/
[GitHub]: https://github.com/
[GitHub Actions]: https://github.com/features/actions
[Working on your project]: ./working-on-your-project
[Chromatic]: https://www.chromatic.com/
[log in to Chromatic]: https://www.chromatic.com/start
[Netlify]: https://www.netlify.com/
[log in to Netlify]: https://app.netlify.com/
[Netlify documentation]: https://docs.netlify.com/
