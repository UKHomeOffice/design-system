HODS - Code Snippet
===================

Allow users to copy formatted code snippets.


Using this package
------------------

First install the package into your project:

```shell
npm install -S @hods/codeSnippet
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import CodeSnippet from '@hods/CodeSnippet';

export const MyComponent = props => (
  <CodeSnippet>
    We'll send your new passport by secure delivery. The cost is included in the passport fee.
  </CodeSnippet>
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
