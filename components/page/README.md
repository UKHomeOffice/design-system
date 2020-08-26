HODS - Page
===========

HODS' page component.


Using this package
------------------

First install the package into your project:

```shell
npm install -S @hods/page
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import Page from '@hods/page';

export const MyComponent = props => (
  <Page
    accountHref="#/my-account"
    title="Service name"
    signOutHref="#/auth/sign-out"
    username="User name"
    navigation={[
      { href: '/styles', text: 'Styles', active: true },
      { href: '/components', text: 'Components' },
      { href: '/patterns', text: 'Patterns' },
      { href: '/resources', text: 'Resources' },
      { href: '/get-involved', text: 'Get involved' }
    ]}
    footerNavigation={[
      { href: '/feedback', text: 'Feedback' },
      { href: '/help', text: 'Help' },
      { href: 'https://gov.uk/', text: 'Gov.UK home' }
    ]}
  >
    <h1>Default page template</h1>
    <p>The header inspires trust with the department logo, while the service name helps users understand which service they are using.</p>
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
