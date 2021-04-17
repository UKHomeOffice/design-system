HODS - Status message
=====================

An indication to the user that something has changed.


Using this package
------------------

First install the package into your project:

```shell
npm install -S @hods/status-message
```

Then use it in your code as follows:

```jsx
import React, { createElement as h } from 'react';
import StatusMessage from '@hods/status-message';

export const MyComponent = props => (
  <StatusMessage
    status="On hold"
    actions={<A href="#">Review</A>}
  >
    due for review 10 March 2018
  </StatusMessage>
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
