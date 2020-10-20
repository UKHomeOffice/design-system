HODS - Alert
============

Alert users to important information.


Using this package
------------------

First install the package into your project:

```shell
npm install -S @hods/alert
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import Alert from '@hods/alert';

export const MyComponent = props => (
  <Alert heading="New passport">
    We'll send your new passport by secure delivery. The cost is included in the passport fee.
  </Alert>
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
