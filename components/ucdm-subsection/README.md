HODS - Subsection
=================

A layout wrapper for subsections within the User-Centred Design Manual.


Using this package
------------------

First install the package into your project:

```shell
npm install -S @hods/ucdm-subsection
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import Subsection from '@hods/ucdm-subsection';

export const MyComponent = props => (
  <Subsection title="My subsection" navigation={[
    { href: '#', text: 'Current page' },
    { href: '/one, text: 'One },
    { href: '/two, text: 'Two },
    { href: '/three, text: 'Three }
  ]}>
    <h1>My page</h1>
    <p>My content.</p>
  </Subsection>
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
