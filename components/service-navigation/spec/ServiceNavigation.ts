import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import ServiceNavigation from '../src/ServiceNavigation';

describe('ServiceNavigation', () => {
  const minimalProps = {
  };

  describe('when given minimal valid props', () => {
    beforeEach(async () => {
      render(h(ServiceNavigation, minimalProps));
    });

    it('renders an element', async () => expect(screen.getAllByRole('generic')[0]).toBeInTheDocument());
  });

  describe('when given all valid props', () => {
    const props = {
      ...minimalProps,
      'aria-label': 'ARIA label',
      end: 'End',
      items: [
        { href: '#', text: 'One' },
        { href: '#', text: 'Two' },
        { href: '#', text: 'Three' }
      ],
      menuButtonText: 'Menu text',
      menuButtonLabel: 'Menu label',
      navigationLabel: 'Navigation label',
      navigationId: 'navigation-id',
      serviceName: 'My service',
      serviceHref: '#href',
      start: 'Start'
    };

    beforeEach(async () => {
      render(h(ServiceNavigation, props));
    });

    it('renders a section', async () => expect(screen.getByRole('region')).toBeInTheDocument());
    it('with a service link', async () => expect(screen.getAllByRole('link')[0]).toHaveTextContent('My service'));
    it('renders a navigation block', async () => expect(screen.getByRole('navigation')).toBeInTheDocument());
    it('renders a list', async () => expect(screen.getByRole('list')).toBeInTheDocument());
    it('with as many items as were provided', async () => expect(screen.getAllByRole('listitem')).toHaveLength(3));
    it('which are all links', async () => expect(screen.getAllByRole('link')).toHaveLength(4));
    it('with the correct text for the 1st link', async () => expect(screen.getAllByRole('link')[1]).toHaveTextContent('One'));
    it('with the correct text for the 2nd link', async () => expect(screen.getAllByRole('link')[2]).toHaveTextContent('Two'));
    it('with the correct text for the 3rd link', async () => expect(screen.getAllByRole('link')[3]).toHaveTextContent('Three'));
  });
});
