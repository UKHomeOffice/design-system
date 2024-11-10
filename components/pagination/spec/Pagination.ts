import { createElement as h } from 'react';
import { jest } from '@jest/globals';
import { render, screen } from '@not-govuk/component-test-helpers';
import Pagination from '../src/Pagination';

describe('Pagination', () => {
  const minimalProps = {
  };
  const children = Array.from(Array(30)).map(
    (_, i) => h(
      'div',
      {
        key: i
      },
      `Item #${i + 1}`
    )
  );
  const current = () => screen.getByRole('link', { current: true });

  describe('when given minimal valid props', () => {
    beforeEach(() => {
      render(h(Pagination, minimalProps, children));
    });

    it.skip('shows the current page', () => expect(current()).toBeTruthy());
    it.skip('displays the first page', () => expect(current().textContent).toBe('1'));
    it('displays the first element', () => expect(screen.getByText('Item #1')).toBeTruthy());
    it('does NOT display the 11th element', () => expect(screen.queryByText('Item #11')).toBeFalsy());
    it('does NOT display the last element', () => expect(screen.queryByText('Item #30')).toBeFalsy());
    it('displays a summary', () => expect(screen.getByText('Showing 1 - 10 of 30 results')).toBeTruthy());
    it('displays a link to the next page', () => expect(screen.getByLabelText('Next page', { exact: false }).textContent).toContain('Next'));
    it('does NOT display a link to the previous page', () => expect(screen.queryByLabelText('Previous page', { exact: false })).toBeFalsy());

    describe.skip('when \'Next\' is clicked', () => {
    });
  });
});
