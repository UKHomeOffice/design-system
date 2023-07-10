import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import Highlight from '../src/Highlight';

describe('Highlight', () => {

  describe('when given no props', () => {
    beforeEach(async() => {
      render(h(Highlight, {}, 'United Kingdom (UK)'));
    });

    it('renders text', () => {
      expect(screen.getByText('United Kingdom (UK)')).toBeInTheDocument();
    });
  });
});
