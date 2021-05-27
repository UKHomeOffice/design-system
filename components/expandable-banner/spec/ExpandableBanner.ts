import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import ExpandableBanner from '../src/ExpandableBanner';

describe('ExpandableBanner', () => {
  describe('when given valid props', () => {
    const component = mount(h(ExpandableBanner, {status:'status'}, 'Child'));

    it('renders', () => undefined);
  });
});
