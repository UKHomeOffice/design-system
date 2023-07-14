import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import ExpandableBanner from '../src/ExpandableBanner';

describe('ExpandableBanner', () => {
  describe('when given valid props', () => {

    beforeEach(async () => {
      render(h(ExpandableBanner, {status:'status'}, 'Child'));
    });

    it('renders an element', async () => expect(screen.getByRole('group')).toBeInTheDocument());
    it('includes the status provided', async () => expect(screen.getByRole('group')).toHaveTextContent('status'));
    it('includes the children provided', async () => expect(screen.getByRole('group')).toHaveTextContent('Child'));
  });
});
