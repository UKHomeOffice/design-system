import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import DateDisplay from '../src/DateDisplay';

describe('DateDisplay', () => {
  const minimalProps = {date:'2022-07-20'};

  describe('when given minimal valid props', () => {
    const component = mount(h(DateDisplay, minimalProps));

    it("formats date", () => {
			expect(component.text()).toBe("20 July 2022");
    });
    it("is wrapped in a time element", () => {
    			expect(component.find('time').length).toBe(1);
    });
  });
			
  describe('when given all valid props', () => {
    const props = {
      ...minimalProps,
      wrap:false
    };
    const component = mount(h(DateDisplay, props));

    it("formats date", () => {
			expect(component.text()).toBe("20 July 2022");
    });
        it("is NOT wrapped in a time element", () => {
    			expect(component.find('time').length).toBe(0);
    });
   });
  });
