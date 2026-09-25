import { defineConfig } from '@playwright/test';

const projectName = process.env.PLAYWRIGHT_PROJECT ?? 'visual';
const browserName: 'chromium' | 'firefox' | 'webkit' = process.env.PLAYWRIGHT_BROWSER === 'firefox'
  ? 'firefox'
  : process.env.PLAYWRIGHT_BROWSER === 'webkit'
    ? 'webkit'
    : 'chromium';
const baseURL = process.env.PLAYWRIGHT_BASE_URL;

const appProjects = [
  {
    name: 'docs',
    baseURL: 'http://127.0.0.1:8080',
    command: 'npm --prefix apps/docs run start:test',
    url: 'http://127.0.0.1:8080/readiness'
  },
  {
    name: 'next-example',
    baseURL: 'http://127.0.0.1:3000',
    command: 'npm --prefix apps/next-example run start',
    url: 'http://127.0.0.1:3000/'
  },
  {
    name: 'remix-example',
    baseURL: 'http://127.0.0.1:3000',
    command: 'npm --prefix apps/remix-example run start',
    url: 'http://127.0.0.1:3000/'
  }
] as const;

const selectedApp = appProjects.find((project) => project.name === projectName);

export default defineConfig({
  testDir: './tests/visual',
  outputDir: 'test-results',
  fullyParallel: false,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report' }]
  ],
  use: {
    baseURL: baseURL ?? selectedApp?.baseURL ?? 'http://127.0.0.1:9009',
    browserName,
    colorScheme: 'light',
    deviceScaleFactor: 1,
    locale: 'en-GB',
    timezoneId: 'Europe/London',
    trace: 'retain-on-failure',
    video: 'retain-on-failure'
  },
  expect: {
    toHaveScreenshot: {
      animations: 'disabled',
      maxDiffPixelRatio: 0.0001,
      scale: 'css'
    }
  },
  snapshotPathTemplate: '{testDir}/{testFilePath}-snapshots/{arg}{ext}',
  projects: [
    {
      name: 'visual',
      testDir: './tests/visual',
      use: { browserName: 'chromium', baseURL: baseURL ?? 'http://127.0.0.1:9009' }
    },
    ...appProjects.map((project) => ({
      name: project.name,
      testDir: `./tests/e2e/${project.name}`,
      use: {
        browserName,
        baseURL: baseURL ?? project.baseURL
      }
    }))
  ],
  webServer: baseURL
    ? undefined
    : selectedApp
      ? {
          command: selectedApp.command,
          url: selectedApp.url,
          reuseExistingServer: !process.env.CI
        }
      : {
          command: 'http-server storybook-static --port 9009 --silent -c-1',
          port: 9009,
          reuseExistingServer: !process.env.CI
        }
});