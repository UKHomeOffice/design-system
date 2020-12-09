HODS - Status Banner
====================

Component that provides both high level and more detailed warning messages


Using this package
------------------

First install the package into your project:

```shell
npm install -S @hods/status-banner
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import StatusBanner from '@hods/status-banner';

export const MyComponent = props => (
  <StatusBanner>
    This licence is not active. The licence holder or
    applicant is not authorised to carry out the
    programme of work as stated in this
    licence/application.
  </StatusBanner>

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
