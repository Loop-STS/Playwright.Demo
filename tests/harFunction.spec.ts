import { test, expect } from '@playwright/test';

test('grab all request urls', async ({ page }) => {
  await page.goto('https://workwithloop.com');

  const requests = [];
  page.route('**', (route) => {
    requests.push(route.request().url());
    route.continue();
  });

  // Perform any actions that will trigger requests
  await page.click('a');
  await page.fill('input[type="text"]', 'test');
  await page.press('input[type="submit"]', 'Enter');

  expect(requests.length).toBeGreaterThan(0);
  console.log('Request URLs:', requests);
});
