import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import Modal from '../src/Modal';

describe('Modal', () => {
  describe('when given minimal valid props', () => {
    beforeEach(() => {
      render(h(Modal, { show: true }, 'Modal Content'));
    });
    it('renders an element',() => {
      expect(screen.getByText("Modal Content")).toBeInTheDocument();
    });
  });
});
