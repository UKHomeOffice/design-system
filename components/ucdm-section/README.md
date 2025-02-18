HODS - Section
==============

A layout wrapper for sections within the User-Centred Design Manual.


Using this package
------------------

First install the package into your project:

```shell
npm install -S @hods/ucdm-section
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import Section from '@hods/ucdm-section';

export const MyComponent = props => (
  <Section title="Design and content" href="#" description="Guidance and standards for designing Home Office services." navigation={[
    { href: '#', text: 'Design system' },
    { href: '/design-and-content/content-style-guide', text: 'Content style guide' },
    { href: '/design-and-content/professional-standards', text: 'Professional standards and guidance' }
  ]}>
    My content.
  </Section>
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
