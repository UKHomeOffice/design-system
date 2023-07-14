import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import Footer from '../src/Footer';

describe('Footer', () => {
  describe('when given no props', () => {

    beforeEach(async() => {
		  render(h(Footer, {}))
    });

    it('renders', async () => expect(screen.getByRole('contentinfo')).toBeInTheDocument());
  });

  describe('when given valid props', () => {

    beforeEach(async() => {
      render(h(Footer, {
        navigation: [
          { href: '/feedback', text: 'Feedback' },
          { href: '/help', text: 'Help' },
          { href: 'https://gov.uk/', text: 'Gov.UK home' }
        ]
      }, 'Custom content.'));
    });

    it('renders', async () => expect(screen.getByRole('contentinfo')).toBeInTheDocument());
    it('has 3 links', async() => expect(screen.getAllByRole('link')).toHaveLength(3));
    it('renders children', async () => expect(screen.getByText('Custom content.')).toBeInTheDocument());
  });
});
