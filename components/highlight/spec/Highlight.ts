import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import Highlight from '../src/Highlight';

describe('Highlight', () => {
  const minimalProps = {
  };

  describe('when given minimal valid props', () => {
    const component = mount(h(Highlight, minimalProps, 'Child'));

    it('renders', () => undefined);
  });

  describe('when given all valid props', () => {
    const props = {
      ...minimalProps
    };
    const component = mount(h(Highlight, props, 'Child'));

    it('renders', () => undefined);
  });
});
