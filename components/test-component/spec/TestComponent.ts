import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import TestComponent from '../src/TestComponent';

describe('TestComponent', () => {
  describe('when given valid props', () => {
    const component = mount(h(TestComponent, { heading: 'My heading' }, 'Child'));

    it('renders', () => undefined);
  });
});
