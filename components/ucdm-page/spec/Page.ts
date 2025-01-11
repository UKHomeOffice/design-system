import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import Page from '../src/Page';

describe('Page', () => {
  const minimalProps = {
  };
  const minimalSpec = () => {
    it('renders an element', async () => expect(screen.getAllByRole('generic')[0]).toBeInTheDocument());
    it('renders a skip-link', async () => expect(screen.getAllByRole('link')[0]).toHaveTextContent('Skip to main content'));
    it('renders a header', async () => expect(screen.getByRole('banner')).toBeInTheDocument());
    it('renders a footer', async () => expect(screen.getByRole('contentinfo')).toBeInTheDocument());
  };

  describe('when given minimal valid props', () => {
    beforeEach(async () => {
      render(h(Page, minimalProps));
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
      searchAction: '/search',
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
    };

    beforeEach(async () => {
      render(h(Page, props));
    });

    minimalSpec();
    it('contains the footer content', async () => expect(screen.getByRole('contentinfo')).toHaveTextContent('Custom'));
    it('contains the footer navigation', async () => expect(screen.getByRole('contentinfo')).toHaveTextContent('Feedback'));
    it('contains the service name', async () => expect(screen.getAllByRole('generic')[0]).toHaveTextContent('Service name'));
    it('contains the sign-out link', async () => expect(screen.getByRole('banner')).toHaveTextContent('Sign out'));
    it('contains a search form', async () => expect(screen.getByLabelText('Search')).toBeInTheDocument());
    it('contains the navigation links', async () => expect(screen.getByRole('region')).toHaveTextContent('Components'));
  });
});
