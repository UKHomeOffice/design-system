import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import AZNavigation from '../src/AZNavigation';

describe('AZNavigation', () => {
  const minimalProps = {
  };

  describe('when given minimal valid props', () => {
    beforeEach(async() => {
      render(h(AZNavigation, minimalProps));
    })

    it('renders a navigation component', async() => expect(screen.getByRole('navigation')).toBeInTheDocument());
    it('renders 26 list items', async() => expect(screen.getAllByRole('listitem')).toHaveLength(26));
    it('renders 26 links', async() => expect(screen.getAllByRole('link')).toHaveLength(26));
    it('starts with a', async() => expect(screen.getAllByRole('link')[0]).toHaveTextContent('A'));
    it('links to a from a', async() => expect(screen.getByRole('link', { name: 'A' })).toHaveAttribute('href', '/current#a'));
  });
});
