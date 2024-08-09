import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.perplexity.ai/');
  await page.getByPlaceholder('Ask anything...').click();
  await page.getByPlaceholder('Ask anything...').fill('This is a question');
  await page.locator('.absolute > .md\\:hover\\:bg-offsetPlus').click();
  await page.getByLabel('Submit').click();
});

