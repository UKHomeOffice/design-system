import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import Time from '../src/Time';

describe('Time', () => {
  const minimalProps = {time:'2022-07-21T22:37:34.570Z'};

  describe('when given minimal valid props', () => {
    beforeEach(async() => {
      render(h(Time, minimalProps));
    });

    it("formats time", async () => {
			expect(screen.getByText("11:37pm")).toBeInTheDocument();
    });
    it("is wrapped in a element with a datetime property", async () => {
    	expect(screen.getByText("11:37pm")).toHaveAttribute('datetime', '2022-07-21T22:37:34.570Z')
    });
  });
 
 
  describe('when given short time props', () => {
    beforeEach(async() => {
      render(h(Time, {time:'22:37'}));
    });

    it("formats time", async () => {
			expect(screen.getByText("10:37pm")).toBeInTheDocument();
    });

    it("is wrapped in a element with a datetime property", async () => {
    	expect(screen.getByText("10:37pm")).toHaveAttribute('datetime', '22:37')
    });
  });
 
  describe('when given 24 hour prop', () => {
    const props = {
      ...minimalProps,
      clockType:24
    };

    beforeEach(async() => {
      render(h(Time, props));
    });

    it("formats time", async () => {
			expect(screen.getByText("23:37")).toBeInTheDocument();
    });
    it("is wrapped in a element with a datetime property", async () => {
    	expect(screen.getByText("23:37")).toHaveAttribute('datetime', '2022-07-21T22:37:34.570Z')
    });
  });

  describe('when given wrap false prop', () => {
    const props = {
      ...minimalProps,
      noWrap: true
    };

    beforeEach(async() => {
      render(h(Time, props));
    })

    it("formats time", async () => {
			expect(screen.getByText("11:37pm")).toBeInTheDocument();
    });
    it("is NOT wrapped in a element with a datetime property", async () => {
    	expect(screen.getByText("11:37pm")).not.toHaveAttribute('datetime', '2022-07-21T22:37:34.570Z')
    });
  });
});

