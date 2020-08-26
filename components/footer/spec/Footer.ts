import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import Footer from '../src/Footer';

describe('Footer', () => {
  describe('when given no props', () => {
    const component = mount(h(Footer, {}));

    it('renders', () => undefined);
  });

  describe('when given valid props', () => {
    const component = mount(h(Footer, {
      navigation: [
        { href: '/feedback', text: 'Feedback' },
        { href: '/help', text: 'Help' },
        { href: 'https://gov.uk/', text: 'Gov.UK home' }
      ]
    }, 'Custom content.'));

    it('renders', () => undefined);
  });
});
