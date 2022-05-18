import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import CodeSnippet from '../src/Alert';

describe('Alert', () => {
  describe('when given valid props', () => {
    const component = mount(h(CodeSnippet, { }, 'Child'));

    it('renders', () => undefined);
  });
});
