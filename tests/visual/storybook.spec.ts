import { expect, test } from '@playwright/test';

type Story = {
  id: string;
  name: string;
  screenshot: string;
  viewport: { height: number; width: number };
};

const stories: Story[] = [
  {
    id: 'alert--standard',
    name: 'Alert standard',
    screenshot: 'alert-standard.png',
    viewport: { width: 640, height: 480 }
  },
  {
    id: 'header--navigation',
    name: 'Header navigation',
    screenshot: 'header-navigation.png',
    viewport: { width: 800, height: 600 }
  },
  {
    id: 'page--navigation',
    name: 'Page navigation',
    screenshot: 'page-navigation.png',
    viewport: { width: 800, height: 600 }
  },
  {
    id: 'service-navigation--full',
    name: 'Service navigation full',
    screenshot: 'service-navigation-full.png',
    viewport: { width: 1280, height: 360 }
  },
  {
    id: 'status-message--multiple-actions',
    name: 'Status message multiple actions',
    screenshot: 'status-message-multiple-actions.png',
    viewport: { width: 820, height: 480 }
  },
  {
    id: 'timeline--standard',
    name: 'Timeline standard',
    screenshot: 'timeline-standard.png',
    viewport: { width: 640, height: 480 }
  },
  {
    id: 'subsection--standard',
    name: 'Subsection standard',
    screenshot: 'subsection-standard.png',
    viewport: { width: 768, height: 360 }
  }
];

test.describe('Storybook visual regressions', () => {
  for (const story of stories) {
    test(story.name, async ({ page }) => {
      await page.setViewportSize(story.viewport);
      await page.goto(`/iframe.html?id=${story.id}&viewMode=story`, {
        waitUntil: 'networkidle'
      });
      await page.evaluate(async () => {
        await document.fonts.ready;
      });
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation: none !important;
            caret-color: transparent !important;
            transition: none !important;
          }
        `
      });

      await expect(page).toHaveScreenshot(story.screenshot, { fullPage: true });
    });
  }
});