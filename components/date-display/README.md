HODS - Date Display
===================

Displays a date in accordance with Gov style guidance


Using this package
------------------

First install the package into your project:

```shell
npm install -S @hods/date-display
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import DateDisplay from '@hods/date-display';

export const MyComponent = props => (
   <DateDisplay date="2022-07-20" />
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
