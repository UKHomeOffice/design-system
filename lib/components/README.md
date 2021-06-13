HODS - Components
=================

All Home Office Design System components.


Using this package
------------------

First install the package into your project:

```shell
npm install -S @hods/components
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import { Header, Footer } from '@hods/components';

export const MyComponent = props => (
  <Header
    // WRITEME
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
