import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import LoadingSpinner from '../src/LoadingSpinner';

describe('LoadingSpinner', () => {

  describe("when given default valid props" ,() => {
    beforeEach(async() => {
      render(h(LoadingSpinner, undefined, undefined))
    });

    it('renders default text content', async () => {
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    })
    it('has status role', async () => {
      expect(screen.getByRole("status")).toBeInTheDocument();
    })
  })

  describe('when given passed children', () => {
    const textContent = 'Loading next task...'

    beforeEach(async() => {
      render(h(LoadingSpinner, undefined, textContent))
    });

    it('renders text content', async () => {
      expect(screen.getByText("Loading next task...")).toBeInTheDocument()
    });
  });
});
