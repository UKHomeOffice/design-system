import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import Header from '../src/Header';

describe('Header', () => {
  describe('when given no props', () => {
    const component = mount(h(Header, {}));

    it('renders', () => undefined);
  });

  describe('when given valid props', () => {
    const component = mount(h(Header, {
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
      username: 'User name'
    }));

    it('renders', () => undefined);
  });
});
