import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.workwithloop.com/');
  await page.getByLabel('home').click();
});