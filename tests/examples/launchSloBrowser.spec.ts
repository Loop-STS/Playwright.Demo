import { chromium, test } from '@playwright/test';

test('Launch slow browser', async ({}) => {

  const browser = await chromium.launch({slowMo: 50});
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://automationintesting.online/');

  await page.getByRole('button', { name: 'Let me hack!' }).click();

});
