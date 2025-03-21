HODS - UCDM Page
================

Use this page template to keep your pages consistent with the rest of internal Home Office services.

For now, this version is just for use on the User-Centred Design Manual.


Using this package
------------------

First install the package into your project:

```shell
npm install -S @hods/ucdm-page
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import Page from '@hods/ucdm-page';

export const MyComponent = props => (
  <Page
    serviceName="Service name"
    footerNavigation={[
      { href: '/feedback', text: 'Feedback' },
      { href: '/help', text: 'Help' },
      { href: 'https://gov.uk/', text: 'Gov.UK home' }
    ]}
  >
    <h1>Default page template</h1>
    <p>The header inspires trust with the department logo, while the service name helps users understand which service they are using.</p>
    <p>The main page content has a grey background to reduce eye-strain. Buttons in this section are slightly re-styled, for accessibility reasons.</p>
    <ButtonGroup>
      <Button>Save and continue</Button>
      <Button classModifiers="secondary">Save as draft</Button>
    </ButtonGroup>
    <p>The footer includes information about the department with relevant links. White background helps to clearly section the main content area.</p>
  </Page>
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
