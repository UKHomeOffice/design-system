import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import DateDisplay from '../src/DateDisplay';

describe('DateDisplay', () => {
  const minimalProps = {date:'2022-07-20'};

  describe('when given minimal valid props', () => {
    beforeEach(async() => {
      render(h(DateDisplay, minimalProps));
    })

    it("formats date", async () => {
			expect(screen.getByText("20 July 2022")).toBeInTheDocument()
    });
    it("is wrapped in a element with hods-date-display class", async () => {
    	expect(screen.getByText("20 July 2022")).toHaveClass('hods-date-display')
    });
    it("is wrapped in a element with a datetime property", async () => {
    	expect(screen.getByText("20 July 2022")).toHaveAttribute('datetime', '2022-07-20')
    });
  });
			
  describe('when not wrapped in a time element', () => {
    const props = {
      ...minimalProps,
      noWrap: true
    };
    beforeEach(async() => {
      render(h(DateDisplay, props));
    })

    it("formats date", async () => {
			expect(screen.getByText("20 July 2022")).toBeInTheDocument();
    });
    it("is NOT wrapped in a element with hods-date-display class", async () => {
      expect(screen.getByText("20 July 2022")).not.toHaveClass('hods-date-display')
    });
    it("is NOT wrapped in a element with a datetime property", async () => {
    	expect(screen.getByText("20 July 2022")).not.toHaveAttribute('datetime', '2022-07-20')
    });
  });

  describe('when given a date-time', () => {
    beforeEach(async() => {
      render(h(DateDisplay, { date: '2022-07-21T23:37:34.570Z' }));
    })

    it("formats date", async () => {
			expect(screen.getByText("22 July 2022")).toBeInTheDocument()
    });
  });
});
