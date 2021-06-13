import React, { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import Pagination from '../src/Pagination';

describe('Pagination', () => {
  describe('when given valid props', () => {
    const pagination = mount(h(Pagination, {
      results: "249",
      resultsPerPage: "25",
      page: "3"
    }));

    let current;
    beforeAll(() => {
      expect(current = pagination.find('.hods-pagination__link--current')).toHaveLength(1);
    });

    it('is on the correct page', () => {
      expect(current.text()).toEqual('3');
    });

    it('should not have a link', () => {
      expect(current.html()).toContain('href=""');
    });

    const summary = pagination.find('.hods-pagination__summary').text();

    it('displays the correct value for results from', () => {
      expect(summary.slice(8, 10)).toEqual('51');
    });

    it('displays the correct value for results to', () => {
      expect(summary.slice(13, 15)).toEqual('75');
    });

    it('displays the correct value for total results', () => {
      expect(summary.slice(19, 22)).toEqual('249');
    });

    const ul = pagination.find('.hods-pagination__list-items');
    const prev = pagination.find('#prevButton');
    const next = pagination.find('#nextButton');

    it('displays the previous link in the correct place', () => {
      expect(ul.childAt(0)).toEqual(prev);
    });

    it('displays the next link in the correct place', () => {
      expect(ul.childAt(6)).toEqual(next);
    });
  });

  describe('when given alternative valid props', () => {
    const pagination = mount(h(Pagination, {
      results: "39",
      resultsPerPage: "10",
      page: "1"
    }));

    let current;
    beforeAll(() => {
      expect(current = pagination.find('.hods-pagination__link--current')).toHaveLength(1);
    });

    it('is on the correct page', () => {
      expect(current.text()).toEqual('1');
    });

    it('should not have a link', () => {
      expect(current.html()).toContain('href=""');
    });

    const summary = pagination.find('.hods-pagination__summary').text();

    it('displays the correct value for results from', () => {
      expect(summary.slice(8, 9)).toEqual('1');
    });

    it('displays the correct value for results to', () => {
      expect(summary.slice(12, 14)).toEqual('10');
    });

    it('displays the correct value for total results', () => {
      expect(summary.slice(18, 20)).toEqual('39');
    });

    const ul = pagination.find('.hods-pagination__list-items');
    const prev = pagination.find('#prevButton');
    const next = pagination.find('#nextButton');

    it('does not display the previous link', () => {
      expect(ul.childAt(0)).not.toEqual(prev);
    });

    it('displays the next link in the correct place', () => {
      expect(ul.childAt(5)).toEqual(next);
    });
  });

  describe('when given no props', () => {
    const pagination = mount(h(Pagination, {}));

    let current;
    beforeAll(() => {
      expect(current = pagination.find('.hods-pagination__link--current')).toHaveLength(0);
    });
  });
});
