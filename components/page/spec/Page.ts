import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import Page from '../src/Page';

describe('Page', () => {
  describe('when given no props', () => {
    const component = mount(h(Page, {}));

    it('renders', () => undefined);
  });

  describe('when given valid props', () => {
    const component = mount(h(Page, {
      accountHref: '#/my-account',
      navigation: [
        { href: '/styles', text: 'Styles', active: true },
        { href: '/components', text: 'Components' },
        { href: '/patterns', text: 'Patterns' },
        { href: '/resources', text: 'Resources' },
        { href: '/get-involved', text: 'Get involved' }
      ],
      title: 'Service name',
      signOutHref: '#/auth/sign-out',
      username: 'User name',
      footerNavigation: [
        { href: '/feedback', text: 'Feedback' },
        { href: '/help', text: 'Help' },
        { href: 'https://gov.uk/', text: 'Gov.UK home' }
      ],
      footerContent: 'Custom'
    }));

    it('renders', () => undefined);
  });
});
