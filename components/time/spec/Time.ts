import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import Time from '../src/Time';

describe('Time', () => {
  const minimalProps = {
  };

  describe('when given minimal valid props', () => {
    const component = mount(h(Time, minimalProps, 'Child'));

    it('renders', () => undefined);
  });

  describe('when given all valid props', () => {
    const props = {
      ...minimalProps
    };
    const component = mount(h(Time, props, 'Child'));

    it('renders', () => undefined);
  });
});
