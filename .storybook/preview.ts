import { createElement as h } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withTests } from '@storybook/addon-jest';
import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, addParameters } from '@storybook/react';
import globalDecorator from './decorators';
import jestResults from '../.jest-results.json';

// FIXME: Temporary hack to get CSS
import '@not-govuk/components/src/index.scss';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});

// global decorators
addDecorator(globalDecorator);

// accessibility add-on
addDecorator(withA11y as any);

// knobs add-on
addDecorator(withKnobs);

// jest add-on
addDecorator(
  withTests({
    results: jestResults,
    filesExt: '((\\.specs?)|(\\.tests?))?(\\.(mjs|[jt]sx?))?$'
  })
);
