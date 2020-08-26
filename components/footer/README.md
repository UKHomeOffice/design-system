HODS - Footer
=============

HODS' page footer.


Using this package
------------------

First install the package into your project:

```shell
npm install -S @hods/footer
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import Footer from '@hods/footer';

export const MyComponent = props => (
  <Footer
    navigation={[
      { href: '/feedback', text: 'Feedback' },
      { href: '/help', text: 'Help' },
      { href: 'https://gov.uk/', text: 'Gov.UK home' }
    ]}
  >
    My footer message.
  </Footer>
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
