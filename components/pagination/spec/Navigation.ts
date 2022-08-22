import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import Navigation from '../src/Navigation';

describe('Navigation', () => {
  const minimalProps = {
    results: 30,
    resultsPerPage: 3,
    page: 3,
  };

  describe('when given minimal valid props', () => {
    const navigation = mount(h(Navigation, minimalProps));

    const summary = navigation.find('.hods-pagination-navigation__summary');
    const current = navigation.find('A[aria-current="true"]').first();

    it('shows the current page', () => expect(current.length).toEqual(1));
    it('displays the correct page', () => expect(current.text()).toEqual('3'));
    it('displays a summary', () => expect(summary.text()).toEqual('Showing 7 - 9 of 30 results'));
    it('displays a link to the next page', () => expect(navigation.text()).toContain('Next'));
    it('displays a link to previous page', () => expect(navigation.text()).toContain('Previous'));
  });

  describe('when given minimal valid props set to the first page', () => {
    const navigation = mount(h(Navigation, { ...minimalProps, page: 1 }));

    const summary = navigation.find('.hods-pagination-navigation__summary');
    const current = navigation.find('A[aria-current="true"]').first();

    it('shows the current page', () => expect(current.length).toEqual(1));
    it('displays the correct page', () => expect(current.text()).toEqual('1'));
    it('displays a summary', () => expect(summary.text()).toEqual('Showing 1 - 3 of 30 results'));
    it('displays a link to the next page', () => expect(navigation.text()).toContain('Next'));
    it('does NOT display a link to previous page', () => expect(navigation.text()).not.toContain('Previous'));
  });

  describe('when given minimal valid props set to the last page', () => {
    const navigation = mount(h(Navigation, { ...minimalProps, page: 10 }));

    const summary = navigation.find('.hods-pagination-navigation__summary');
    const current = navigation.find('A[aria-current="true"]').first();

    it('shows the current page', () => expect(current.length).toEqual(1));
    it('displays the correct page', () => expect(current.text()).toEqual('10'));
    it('displays a summary', () => expect(summary.text()).toEqual('Showing 28 - 30 of 30 results'));
    it('does NOT display a link to the next page', () => expect(navigation.text()).not.toContain('Next'));
    it('displays a link to previous page', () => expect(navigation.text()).toContain('Previous'));
  });
});
