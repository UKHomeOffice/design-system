import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import Subsection from '../src/Subsection';

describe('Subsection', () => {
  const minimalProps = {
  };
  const minimalSpec = () => {
    it('renders an element', async () => expect(screen.getAllByRole('generic')[0]).toBeInTheDocument());
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
      side: 'My side',
      children: 'Child'
    };

    beforeEach(async () => {
      render(h(Subsection, props));
    });

    minimalSpec();
    it('with the side content provided', async () => expect(screen.getAllByRole('generic')[0]).toHaveTextContent('My side'));
    it('with the children', async () => expect(screen.getAllByRole('generic')[0]).toHaveTextContent('Child'));
  });
});
