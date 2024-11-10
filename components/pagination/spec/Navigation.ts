import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import Navigation from '../src/Navigation';

describe('Navigation', () => {
  const minimalProps = {
    results: 30,
    resultsPerPage: 3,
    page: 3,
  };
  const current = () => screen.getByRole('link', { current: true });

  describe('when given minimal valid props', () => {
    beforeEach(() => {
      render(h(Navigation, minimalProps));
    });

    it.skip('shows the current page', () => expect(current()).toBeTruthy());
    it.skip('displays the correct page', () => expect(current().textContent).toBe('3'));
    it('displays a summary', () => expect(screen.getByText('Showing 7 - 9 of 30 results')).toBeTruthy());
    it('displays a link to the next page', () => expect(screen.getByLabelText('Next page', { exact: false }).textContent).toContain('Next'));
    it('displays a link to the previous page', () => expect(screen.getByLabelText('Previous page', { exact: false }).textContent).toContain('Previous'));
  });

  describe('when given minimal valid props set to the first page', () => {
    beforeEach(() => {
      render(h(Navigation, { ...minimalProps, page: 1 }));
    });

    it.skip('shows the current page', () => expect(current()).toBeTruthy());
    it.skip('displays the correct page', () => expect(current().textContent).toBe('1'));
    it('displays a summary', () => expect(screen.getByText('Showing 1 - 3 of 30 results')).toBeTruthy());
    it('displays a link to the next page', () => expect(screen.getByLabelText('Next page', { exact: false }).textContent).toContain('Next'));
    it('does NOT display a link to the previous page', () => expect(screen.queryByLabelText('Previous page', { exact: false })).toBeFalsy());
  });

  describe('when given minimal valid props set to the last page', () => {
    beforeEach(() => {
      render(h(Navigation, { ...minimalProps, page: 10 }));
    });

    it.skip('shows the current page', () => expect(current()).toBeTruthy());
    it.skip('displays the correct page', () => expect(current().textContent).toBe('10'));
    it('displays a summary', () => expect(screen.getByText('Showing 28 - 30 of 30 results')).toBeTruthy());
    it('does NOT display a link to the next page', () => expect(screen.queryByLabelText('Next page', { exact: false })).toBeFalsy());
    it('displays a link to the previous page', () => expect(screen.getByLabelText('Previous page', { exact: false }).textContent).toContain('Previous'));
  });
});
