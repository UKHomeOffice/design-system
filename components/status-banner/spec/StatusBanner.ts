import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import StatusBanner from '../src/StatusBanner';

describe('StatusBanner', () => {
  describe('when given valid props', () => {
    const component = mount(h(StatusBanner, {status:'status'}, 'Child'));

    it('renders', () => undefined);
  });
});
