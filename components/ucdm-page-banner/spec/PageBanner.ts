import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import PageBanner from '../src/PageBanner';

describe('PageBanner', () => {
  const minimalProps = {
    heading: 'My heading'
  };
  const minimalSpec = () => {
    it('renders a banner', async () => expect(screen.getByRole('banner')).toBeInTheDocument());
    it('with a heading', async () => expect(screen.getByRole('heading')).toBeInTheDocument());
    it('that has the provided content', async () => expect(screen.getByRole('heading')).toHaveTextContent('My heading'));
  };

  describe('when given minimal valid props', () => {
    beforeEach(async () => {
      render(h(PageBanner, minimalProps));
    });

    minimalSpec();
  });

  describe('when given all valid props', () => {
    const props = {
      ...minimalProps,
      children: 'My description'
    };

    beforeEach(async () => {
      render(h(PageBanner, props));
    });

    minimalSpec();
    it('with the children', async () => expect(screen.getByRole('banner')).toHaveTextContent('My description'));
  });
});
