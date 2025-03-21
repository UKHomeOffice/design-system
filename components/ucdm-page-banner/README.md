HODS - Page Banner
==================

A banner to be displayed at the top of the page, underneath the header.


Using this package
------------------

First install the package into your project:

```shell
npm install -S @hods/ucdm-page-banner
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import PageBanner from '@hods/ucdm-page-banner';

export const MyComponent = props => (
  <PageBanner heading="Design and build services that work for everyone">
    Use the UCD Manual to create consistent services that put users first.
  </PageBanner>
);

export default MyComponent;
```


Working on this package
-----------------------

Before working on this package you must install its dependencies using
the following command:

```shell
pnpm install
```


### Testing

Run the unit tests.

```shell
npm test
```


### Building

Build the package by compiling the TypeScript source code.

```shell
npm run build
```


### Clean-up

Remove any previously built files.

```shell
npm run clean
```
