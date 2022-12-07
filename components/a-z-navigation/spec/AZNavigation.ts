import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import AZNavigation from '../src/AZNavigation';

describe('AZNavigation', () => {
  const minimalProps = {
  };

  describe('when given minimal valid props', () => {
    const component = mount(h(AZNavigation, minimalProps));

    it('renders', () => undefined);
  });
});
