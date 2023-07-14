import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import Alert from '../src/Alert';

describe('Alert', () => {
  describe('when given minimal props', () => {
    beforeEach(async() => {
      render(h(Alert, { heading: 'My heading' }, 'Child'));
    });

    it('has a heading', async() => expect(screen.getByRole('heading')).toHaveTextContent('My heading'));
    it('renders the children', async() => expect(screen.getByText('Child')).toBeInTheDocument());
  });
});
