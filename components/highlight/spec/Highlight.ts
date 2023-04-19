import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import Highlight from '../src/Highlight';

describe('Highlight', () => {

  describe('when given no props', () => {
    const component = mount(h(Highlight, {}, 'United Kingdom (UK)'));

    it('renders text', () => {
      expect(component.text()).toBe('United Kingdom (UK)');
    });
  });
});
