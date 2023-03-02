HODS - Highlight
================

A component for highlighting words and short pieces of text.


Using this package
------------------

First install the package into your project:

```shell
npm install -S @hods/highlight
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import Highlight from '@hods/highlight';

export const MyComponent = props => (
  <Highlight>
    United Kingdon (UK)
  </Highlight>
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
