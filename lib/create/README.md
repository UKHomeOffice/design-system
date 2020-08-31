HODS - Create
=============

A project and prototype initialiser.


Using this package
------------------

Typically you would not install this package but rather call it with
`npx` or `npm init`. Similar to `npm init` this will not initialise Git
or even create a directory for you. We suggest that you set up your
directory with Git and its remote before you start. For example:

```shell
mkdir MY-PROJECT
cd MY-PROJECT
git init
git remote add origin https://github.com/MY-USER/MY-PROJECT.git
```

Once that is set up you can run:

```shell
npm init @hods
```

Follow the prompts to set up your new project.


Working on this package
-----------------------

Before working on this package you must install its dependencies using
the following command:

```shell
pnpm install
```


### Building

```shell
npm run build
```


### Clean-up

```shell
npm run clean
```
