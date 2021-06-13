HODS - Timeline
===============

A timeline of events


Using this package
------------------

First install the package into your project:

```shell
npm install -S @hods/timeline
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import Timeline from '@hods/timeline';

export const MyComponent = props => (
  <Timeline items={[
    {
      action: 'Issue under investigation',
      by: 'Douglas Pollock',
      date: '15 Mar 2021 10:04am',
      description: 'This is a description of the event. This field accepts unformatted text only'
    },
    {
      action: 'Issue raised on GitHub',
      date: '25 Jan 2021 9:35am',
      description: 'This is a description of the event.'
    }
  ]} />
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
