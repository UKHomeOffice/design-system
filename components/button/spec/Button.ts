import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import Button from '../src/Button';

describe('Button', () => {
  const minimalProps = {
  };

  describe('when given minimal valid props', () => {
    const component = mount(h(Button, minimalProps, 'Child'));

    it('renders', () => undefined);
  });

  describe('when given all valid props', () => {
    const props = {
      ...minimalProps
    };
    const component = mount(h(Button, props, 'Child'));

    it('renders', () => undefined);
  });
});
