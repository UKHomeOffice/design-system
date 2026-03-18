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
          { href: '/design-system', text: 'Design system' },
          { href: '/accessibility', text: 'Accessibility' },
          { href: '/design-and-content', text: 'Design and content' },
          { href: '/user-research', text: 'User research' },
          { href: '/community', text: 'Community' }
        ]
      }, 'Custom content.'));
    });

    it('renders', async () => expect(screen.getByRole('contentinfo')).toBeInTheDocument());
    it('has 3 links', async() => expect(screen.getAllByRole('link')).toHaveLength(3));
    it('renders children', async () => expect(screen.getByText('Custom content.')).toBeInTheDocument());
  });
});
