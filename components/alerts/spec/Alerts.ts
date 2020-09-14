import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import Alerts from '../src/Alerts';

describe('Alerts', () => {
  describe('when given valid props', () => {
    const component = mount(h(Alerts, { heading: 'My heading' }, 'Child'));

    it('renders', () => undefined);
  });
});
