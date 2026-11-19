import { test } from '@playwright/test';

test('the home page successfully loads', async ({ page }) => {
  await page.goto('/');
});