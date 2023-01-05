import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import StatusMessage from '../src/StatusMessage';

describe('StatusMessage', () => {
  describe('when given a status', () => {
    const component = mount(h(StatusMessage, { status: 'My heading' }));
    it('should show the status', () => {
      expect(component.exists('.hods-status-message__status')).toBeTruthy();
      expect(component.find('.hods-status-message__status').text()).toMatch('My heading');
    });
    it('should not show extra contents', () => expect(component.exists('.hods-status-message__extra')).toEqual(false));
    it('should not show any actions', () => expect(component.exists('.hods-status-message__actions')).toEqual(false));
    describe('and extra contents', () => {
      const component = mount(h(StatusMessage, { status: 'My heading' }, 'extra info'));
      it('should show the status', () => expect(component.text()).toMatch(/^My heading/));
      it('should show extra content', () => {
        expect(component.find('.hods-status-message__extra').text()).toMatch('extra info');
      });
      describe('with an action', () => {
        const component = mount(h(StatusMessage, {
              status: 'My heading',
              actions: [{ href: '#', text: 'Run' }],
            },'extra info')
        );
        it('should show the status', () =>
          expect(component.find('.hods-status-message__status').text()).toMatch('My heading'));
        it('should show extra content', () => {
          expect(component.find('.hods-status-message__extra').text()).toMatch('extra info');
        });
        it('should also show the action', () =>
          expect(component.find('.hods-status-message__actions li')).toHaveLength(1));
        it('should render the action', () =>
          expect(component.find('.hods-status-message__actions').text()).toEqual('Run'));
      });
      describe('with multiple actions', () => {
        const actions = [
          { href: '#', text: 'Run' },
          { href: '#', text: 'Jump' },
          { href: '#', text: 'Sleep' }
        ];
        const component = mount(h(StatusMessage, { status: 'My heading', actions }, 'extra info'));
        it('should show the status', () =>
          expect(component.find('.hods-status-message__status').text()).toMatch('My heading'));
        it('should show extra content', () => {
          expect(component.find('.hods-status-message__extra').text()).toMatch('extra info');
        });
        it('should have actions', () =>
          expect(component.find('.hods-status-message__actions li')).toHaveLength(3));
        it('should show all the actions', () =>
          expect(component.find('.hods-status-message__actions').text()).toMatch(/^Run\s*Jump\s*Sleep$/));
      });
    });
  });
});