import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import StatusMessage from '../src/StatusMessage';

describe('StatusMessage', () => {
  describe('when given a status', () => {
    beforeEach(async() => {
      render(h(StatusMessage, { status: 'My heading' }));
    });

    it('should show the status', async () => {
      expect(screen.getAllByRole("generic")[0]).toHaveTextContent("My heading")
    });

    it('should not show any actions', async () => {
      expect(screen.queryByRole('list')).toBeNull()
    });
  });

  describe('and extra contents', () => {
    beforeEach(async() => {
      render(h(StatusMessage, { status: 'My heading' }, 'extra info'));
    });

    it('should show the status', async () => {
      expect(screen.getAllByRole("generic")[0]).toHaveTextContent("My heading")
    });

    it('should show extra content', () => {
      expect(screen.getAllByRole("generic")[0]).toHaveTextContent("extra info")
    });
  });

  describe('with an action', () => {
    beforeEach(async() => {
      render(h(StatusMessage, {
          status: 'My heading',
          actions: [{ href: '#', text: 'Run' }],
        },'extra info'))
      });

    it('should show the status', async () => {
      expect(screen.getAllByRole("generic")[0]).toHaveTextContent("My heading")
    });

    it('should show extra content', async () => {
      expect(screen.getAllByRole("generic")[0]).toHaveTextContent("extra info")
    });

    it('should also show actions list', () => {
      expect(screen.getByRole("list")).toBeInTheDocument()
    });

    it('should show the action', async () => {
      expect(screen.getAllByRole("listitem")).toHaveLength(1)
    });

    it('should render the action', async () => {
      expect(screen.getByRole("listitem")).toHaveTextContent("Run");
    });
  });

  describe('with multiple actions', () => {
    const actions = [
      { href: '#', text: 'Run' },
      { href: '#', text: 'Jump' },
      { href: '#', text: 'Sleep' }
    ];

    beforeEach(async() => {
      render(h(StatusMessage, { status: 'My heading', actions }, 'extra info'));
    })

    it('should show the status', async () => {
      expect(screen.getAllByRole("generic")[0]).toHaveTextContent("My heading")
    });

    it('should show extra content', async () => {
      expect(screen.getAllByRole("generic")[0]).toHaveTextContent("extra info")
    });

    it('should also show actions list', async () => {
      expect(screen.getByRole("list")).toBeInTheDocument()
    });

    it('should show all the actions', async () => {
      expect(screen.getAllByRole("listitem")[0]).toHaveTextContent("Run");
      expect(screen.getAllByRole("listitem")[1]).toHaveTextContent("Jump");
      expect(screen.getAllByRole("listitem")[2]).toHaveTextContent("Sleep");
    });
  });
});