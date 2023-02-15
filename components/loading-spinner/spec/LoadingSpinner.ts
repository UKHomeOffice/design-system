import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import LoadingSpinner from '../src/LoadingSpinner';

describe('LoadingSpinner', () => {
  const minimalProps = {
  };

  describe('when given minimal valid props', () => {
    const component = mount(h(LoadingSpinner, minimalProps, 'Child'));

    it('renders', () => undefined);
  });

  describe('when given all valid props', () => {
    const props = {
      ...minimalProps
    };
    const component = mount(h(LoadingSpinner, props, 'Child'));

    it('renders', () => undefined);
  });
});
