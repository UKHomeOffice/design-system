import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import LoadingSpinner from '../src/LoadingSpinner';

describe('LoadingSpinner', () => {

  describe("when given default valid props" ,() => {
    const component = mount(h(LoadingSpinner, undefined, undefined));

    it('renders default text content', () => {
      expect(component.text()).toBe("Loading...");
    })
  })

  describe('when given passed children', () => {
    const textContent = 'Loading next task...'

    const component = mount(h(LoadingSpinner, undefined, textContent));

    it('renders text content', () => {
      expect(component.text()).toBe(textContent);
    });
  });
});
