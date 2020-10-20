import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import Alert from '../src/Alert';

describe('Alert', () => {
  describe('when given valid props', () => {
    const component = mount(h(Alert, { heading: 'My heading' }, 'Child'));

    it('renders', () => undefined);
  });
});
