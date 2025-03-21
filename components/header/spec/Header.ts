import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import Header from '../src/Header';

describe('Header', () => {
  const minimalProps = {
  };
  const minimalSpec = () => {
    it('renders a banner', async () => expect(screen.getByRole('banner')).toBeInTheDocument());
  }

  describe('when given minimal valid props', () => {
    beforeEach(async () => {
      render(h(Header, minimalProps));
    });

    minimalSpec();
  });

  describe('when given all valid props', () => {
    const props = {
      ...minimalProps,
      accountHref: '#/my-account',
      navigation: [
        { href: '/styles', text: 'Styles' },
        { href: '/components', text: 'Components' },
        { href: '/patterns', text: 'Patterns' },
        { href: '/resources', text: 'Resources' },
        { href: '/get-involved', text: 'Get involved' }
      ],
      serviceName: 'Service name',
      signOutHref: '#/auth/sign-out',
      username: 'User name'
    };

    beforeEach(async () => {
      render(h(Header, props));
    });

    minimalSpec();
    it('renders signout', async () => expect(screen.getByText('Sign out')).toHaveAttribute('href', '/current#/auth/sign-out'));
    it('renders account link', async () => expect(screen.getByText('User name')).toHaveAttribute('href', '/current#/my-account'));
    it('renders navigation', async () => expect(screen.getByRole('navigation')).toBeInTheDocument());
    it('has the service name', async () => expect(screen.getByText('Service name')).toBeInTheDocument());
  });
});
