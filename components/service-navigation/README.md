HODS - Service Navigation
=========================

A component to help users understand that they’re using your service and lets them navigate around your service.


Using this package
------------------

First install the package into your project:

```shell
npm install -S @hods/service-navigation
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import ServiceNavigation from '@hods/service-navigation';

export const MyComponent = props => (
  <ServiceNavigation
    serviceName="Service name"
    serviceHref="#"
    items={[
      {
        href: "/#",
        text: "Navigation item 1"
      },
      {
        href: "#active",
        text: "Navigation item 2",
      },
      {
        href: "/#",
        text: "Navigation item 3"
      }
    ]}
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
