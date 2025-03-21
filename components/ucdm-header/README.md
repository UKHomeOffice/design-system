HODS - UCDM Header
==================

The Home Office header shows users that they are on an internal Home Office service and indicates which service they are using.

For now, this version is just for use on the User-Centred Design Manual.


Using this package
------------------

First install the package into your project:

```shell
npm install -S @hods/ucdm-header
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import Header from '@hods/ucdm-header';

export const MyComponent = props => (
  <Header
    accountHref="#/my-account"
    searchAction="/search"
    serviceName="Service name"
    signOutHref="#/auth/sign-out"
    username="User name"
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
