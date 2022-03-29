import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import DateTime from '../src/DateTime';

describe('DateTime', () => {
  const minimalProps = {
  };

  describe('when given minimal valid props', () => {
    const component = mount(h(DateTime, minimalProps, 'Child'));

    it('renders', () => undefined);
  });

  describe('when given all valid props', () => {
    const props = {
      ...minimalProps
    };
    const component = mount(h(DateTime, props, 'Child'));

    it('renders', () => undefined);
  });
});
