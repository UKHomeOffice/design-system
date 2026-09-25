import { expect, test } from '@playwright/test';

test('the home page successfully loads', async ({ page }) => {
  await page.goto('/');
});

test('the home page is the correct page', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('My page')).toBeVisible();
});