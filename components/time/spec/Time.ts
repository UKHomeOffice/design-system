import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import Time from '../src/Time';

describe('Time', () => {
  const minimalProps = {time:'2022-07-21T22:37:34.570Z'};

  describe('when given minimal valid props', () => {
    const component = mount(h(Time, minimalProps));

    it("formats time", () => {
			expect(component.text()).toBe("11:37pm");
    });
    it("is wrapped in a time element", () => {
    			expect(component.find('time').length).toBe(1);
    });
 });
 
 
  describe('when given short time props', () => {
    const component = mount(h(Time, {time:'22:37'}));

    it("formats time", () => {
			expect(component.text()).toBe("10:37pm");
    });
    it("is wrapped in a time element", () => {
    			expect(component.find('time').length).toBe(1);
    });
  });
 
 describe('when given 24 hour prop', () => {
    const props = {
      ...minimalProps,
      clockType:24
    };
    const component = mount(h(Time, props));

    it("formats time", () => {
			expect(component.text()).toBe("23:37");
    });
        it("is wrapped in a time element", () => {
    			expect(component.find('time').length).toBe(1);
    });
    });
 
 
 
describe('when given wrap false prop', () => {
    const props = {
      ...minimalProps,
      noWrap: true
    };
    const component = mount(h(Time, props));

    it("formats time", () => {
			expect(component.text()).toBe("11:37pm");
    });
        it("is NOT wrapped in a time element", () => {
    			expect(component.find('time').length).toBe(0);
    });
});
});

