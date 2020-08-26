HODS - Header
=============

HODS' page header.


Using this package
------------------

First install the package into your project:

```shell
npm install -S @hods/header
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import Header from '@hods/header';

export const MyComponent = props => (
  <Header
    accountHref="#/my-account"
    navigation={[
      { href: '/styles', text: 'Styles', active: true },
      { href: '/components', text: 'Components' },
      { href: '/patterns', text: 'Patterns' },
      { href: '/resources', text: 'Resources' },
      { href: '/get-involved', text: 'Get involved' }
    ]}
    title="Service name"
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
