import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import Subsection from '../src/Subsection';

describe('Subsection', () => {
  const minimalProps = {
    title: 'My section',
    navigation: [
      { href: '#', text: 'One' },
      { href: '#', text: 'Two' },
      { href: '#', text: 'Three' }
    ]
  };
  const minimalSpec = () => {
    it('renders an element', async () => expect(screen.getAllByRole('generic')[0]).toBeInTheDocument());
    it('renders a navigation block', async () => expect(screen.getByRole('navigation')).toBeInTheDocument());
    it('renders a list', async () => expect(screen.getByRole('list')).toBeInTheDocument());
    it('with as many items as were provided', async () => expect(screen.getAllByRole('listitem')).toHaveLength(3));
    it('which are all links', async () => expect(screen.getAllByRole('link')).toHaveLength(3));
    it('with the correct text for the 1st link', async () => expect(screen.getAllByRole('link')[0]).toHaveTextContent('One'));
    it('with the correct text for the 2nd link', async () => expect(screen.getAllByRole('link')[1]).toHaveTextContent('Two'));
    it('with the correct text for the 3rd link', async () => expect(screen.getAllByRole('link')[2]).toHaveTextContent('Three'));
  };

  describe('when given minimal valid props', () => {
    beforeEach(async () => {
      render(h(Subsection, minimalProps));
    });

    minimalSpec();
  });

  describe('when given all valid props', () => {
    const props = {
      ...minimalProps,
      children: 'Child'
    };

    beforeEach(async () => {
      render(h(Subsection, props));
    });

    minimalSpec();
    it('renders the children', async() => expect(screen.getByText('Child')).toBeInTheDocument());
  });
});
