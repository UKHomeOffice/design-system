Working on and contributing to NotGovUK
=======================================


Contributing
------------

[Pull requests] are welcome but it is probably best to [open an issue]
first to discuss what you think needs to change.

I would like this project to be as easy as possible to both consume and
contribute to. To that end, if you think any of the documentation isn't
clear please do let me know by raising an [issue] or a [pull request].

Finally, this work is still at quite an early stage. If you run into any
problems or have any questions, please do [get in touch].


Working on this repository
--------------------------

### Prerequisites

The following sections will assume that you are on a UNIX-derived
operating system (e.g. Linux, Mac, etc.) and have the following software
installed on your system:

- Node.js
- [pnpm]
- (GNU?) Make


### Pulling NPM dependencies

You should first pull the NPM dependencies by running:

```shell
pnpm install
```


### Bringing up a local development environment:

To work on a component you will probably want to bring up [Storybook].
This can be done by running the following command:

```shell
npm run storybook
```


### Running the tests

To run the tests use the following command:

```shell
npm test
```


### Running the documentation website

You might want to locally preview the documentation website. To do so,
simply move to the 'docs' app with:

```shell
cd apps/govuk-docs
```

Then bring up the application in _dev-mode_ using:

```shell
npm run dev
```

The application will take a little while to build but when it is done,
you will be able to access it at http://localhost:8080 .


### Adding a new component

You can add a brand new component using the included generator by
running:

```shell
npm run create:component
```

See also: [Working on your project]


-- Daniel Martin, December 2019 (updated August 2020).


[Pull requests]: https://github.com/daniel-ac-martin/NotGovUK/pulls
[open an issue]: https://github.com/daniel-ac-martin/NotGovUK/issues/new
[pull request]: https://github.com/daniel-ac-martin/NotGovUK/pulls
[issue]: https://github.com/daniel-ac-martin/NotGovUK/issues
[get in touch]: https://github.com/daniel-ac-martin/NotGovUK/issues/new
[pnpm]: https://pnpm.js.org/en/installation
[Storybook]: https://storybook.js.org/
[Working on your project]: ./working-on-your-project
