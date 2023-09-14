import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import TimeoutModal from '../src/TimeoutModal';

describe('TimeoutModal', () => {
  const minimalProps = {
  };

  describe('when given minimal valid props', () => {
    const component = mount(h(TimeoutModal, minimalProps, 'Child'));

    it('renders', () => undefined);
  });

  describe('when given all valid props', () => {
    const props = {
      ...minimalProps
    };
    const component = mount(h(TimeoutModal, props, 'Child'));

    it('renders', () => undefined);
  });
});
