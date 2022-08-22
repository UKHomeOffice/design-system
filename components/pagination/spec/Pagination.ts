import { createElement as h } from 'react';
import { jest } from '@jest/globals';
import { mount } from '@not-govuk/component-test-helpers';
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

  describe('when given minimal valid props', () => {
    const pagination = mount(h(Pagination, minimalProps, children));

    const content = pagination.find('.hods-pagination__content');
    const navigation = pagination.find('.hods-pagination__navigation');

    const summary = navigation.find('.hods-pagination__navigation__summary');
    const current = navigation.find('A[aria-current="true"]').first();

    it('shows the current page', () => expect(current.length).toEqual(1));
    it('displays the first page', () => expect(current.text()).toEqual('1'));
    it('displays the first element', () => expect(content.text()).toContain('Item #1'));
    it('does NOT display the 11th element', () => expect(content.text()).not.toContain('Item #11'));
    it('does NOT display the last element', () => expect(content.text()).not.toContain('Item #30'));
    it('displays a summary', () => expect(summary.text()).toEqual('Showing 1 - 10 of 30 results'));
    it('displays a link to the next page', () => expect(navigation.text()).toContain('Next'));
    it('does NOT display a link to previous page', () => expect(navigation.text()).not.toContain('Previous'));

    describe.skip('when \'Next\' is clicked', () => {
    });
  });
});
