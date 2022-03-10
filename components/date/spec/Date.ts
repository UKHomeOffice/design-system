import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import Date from '../src/Date';

describe('Date', () => {
  const minimalProps = {
  };

  describe('when given minimal valid props', () => {
    const component = mount(h(Date, minimalProps, 'Child'));

    it('renders', () => undefined);
  });

  describe('when given all valid props', () => {
    const props = {
      ...minimalProps
    };
    const component = mount(h(Date, props, 'Child'));

    it('renders', () => undefined);
  });
});
