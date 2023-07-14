import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import Page from '../src/Page';

describe('Page', () => {
  describe('when given no props', () => {
    beforeEach(async() => {
      render(h(Page, {}))
    });

    it('renders an element', async () => expect(screen.getAllByRole('generic')[0]).toBeInTheDocument());
    it('renders a skip-link', async () => expect(screen.getAllByRole('link')[0]).toHaveTextContent('Skip to main content'));
    it('renders a header', async () => expect(screen.getByRole('banner')).toBeInTheDocument());
    it('renders a footer', async () => expect(screen.getByRole('contentinfo')).toBeInTheDocument());
    it('is NOT GOV.UK branded', async () => expect(screen.queryByText('GOV.UK')).toBeNull());
  });

  describe('when given valid props', () => {
    beforeEach(async() => {
      render(h(Page, {
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
        title: 'Service title',
        username: 'User name',
        footerNavigation: [
          { href: '/feedback', text: 'Feedback' },
          { href: '/help', text: 'Help' },
          { href: 'https://gov.uk/', text: 'Gov.UK home' }
        ],
        footerContent: 'Custom'
      }));
    });

    it('renders an element', async () => expect(screen.getAllByRole('generic')[0]).toBeInTheDocument());
    it('renders a skip-link', async () => expect(screen.getAllByRole('link')[0]).toHaveTextContent('Skip to main content'));
    it('renders a header', async () => expect(screen.getByRole('banner')).toBeInTheDocument());
    it('renders a footer', async () => expect(screen.getByRole('contentinfo')).toBeInTheDocument());
    it('contains the footer content', async () => expect(screen.getByRole('contentinfo')).toHaveTextContent('Custom'));
    it('contains the footer navigation', async () => expect(screen.getByRole('contentinfo')).toHaveTextContent('Feedback'));
    it('contains the service name', async () => expect(screen.getByRole('banner')).toHaveTextContent('Service name'));
    it('contains the navigation links', async () => expect(screen.getByRole('banner')).toHaveTextContent('Components'));
    it('contains the sign-out link', async () => expect(screen.getByRole('banner')).toHaveTextContent('Sign out'));
  });
});
