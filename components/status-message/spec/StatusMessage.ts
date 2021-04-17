import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import StatusMessage from '../src/StatusMessage';
import {A} from "@not-govuk/components";

describe('StatusMessage', () => {
  describe('when given a status', () => {
    const component = mount(h(StatusMessage, { status: 'My heading' }));
    it('should show the status', () => expect(component.text()).toMatch(/My heading/));

    describe('and extra contents', () => {
      const component = mount(h(StatusMessage, { status: 'My heading' }, 'extra info'));
      it('should show the status and the extra contents', () =>
        expect(component.text()).toMatch(/My heading\s+-\s+extra info/)
      );

      describe('with an action', () => {
        const component = mount(h(StatusMessage, {
          status: 'My heading',
          actions: h(A, { href: '#' }, 'Run')
        }, 'extra info'));
        it('should show the status, extra contents, and action', () =>
          expect(component.text()).toMatch(/My heading\s+-\s+extra info\s*Run/)
        );
      });
      describe('with multiple actions', () => {
        const actions = [
          h(A, { href: '#', key: 1 }, 'Run'),
          h(A, { href: '#', key: 2 }, 'Jump'),
          h(A, { href: '#', key: 3 }, 'Sleep')
        ];
        const component = mount(h(StatusMessage, { status: 'My heading', actions }, 'extra info'));
        it('should show the status, extra contents, and actions', () =>
          expect(component.text()).toMatch(/My heading\s+-\s+extra info\s*Run\s*Jump\s*Sleep/)
        );
        it('should show all the actions', () =>
          expect(component.find('span.hods-status-message__actions a')).toHaveLength(3));
      });
    });
  });

  describe('when given only contents', () => {
    const component = mount(h(StatusMessage, { }, 'Basic info'));
    it('should show only the contents', () =>
      expect(component.text()).toMatch(/Basic info/)
    );
  });

  describe('when given only actions', () => {
    const component = mount(h(StatusMessage, { actions: h(A, { href: '#' }, 'Run') }));
    it('should not display anything', () => expect(component.text()).toEqual(''));
  });
  describe('when given no props at all', () => {
    const component = mount(h(StatusMessage));
    it('should not display anything', () => expect(component.text()).toEqual(''));
  });
});
