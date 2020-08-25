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

WRITEME!


### 6. Optional: Set up Continuous Deployment

The included 'docs' application can be deployed to [Netlify]...

WRITEME!



-- Daniel Martin, August 2020.


[Webpack]: https://webpack.js.org/
[Sass]: https://sass-lang.com/
[Create React App]: https://create-react-app.dev/
[react-router]: https://reactrouter.com/
[GitHub]: https://github.com/
[GitHub Actions]: https://github.com/features/actions
[Working on your project]: ./working-on-your-project
[Netlify]: https://www.netlify.com/
