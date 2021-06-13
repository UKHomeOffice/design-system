HODS - Pagination
=================

A component for navigating a long list of results.

Using this package
------------------

First install the package into your project:

```shell
npm install -S @hods/pagination
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import Pagination from '@hods/pagination';

export const MyComponent = props => (
  <Pagination
    results="250"
    resultsPerPage="25"
    page="1"
  />
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

```shell
npm test
```


### Building

```shell
npm run build
```


### Clean-up

```shell
npm run clean
```
