import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import LoadingSpinner from '../src/LoadingSpinner';

describe('LoadingSpinner', () => {
  const minimalProps = {
    textContent: "Your next assigned task is loading..."
  };

  describe('when given minimal valid props', () => {
    const component = mount(h(LoadingSpinner, minimalProps, 'Child'));

    it('renders', () => {
      expect(component.text()).toBe(minimalProps.textContent);
    });
  });

});
