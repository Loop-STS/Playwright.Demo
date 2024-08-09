// Import the custom test with the extended fixture
import { test } from '../../fixture' // Adjust the path as necessary
import { expect } from '@playwright/test';

test('test with custom context', async ({ context, request }) => {
  // Use the custom context created by the fixture
  const page = await context.newPage();
  const page2 = await context.newPage();

  await page.goto('https://example.com'); // Change URL as needed
  await page2.goto('https://example.com');
  // tear down the browser

  // Your test assertions here
});

test('another test with custom context', async ({ context }) => {
  const page = await context.newPage();
  await page.goto('https://www.facebook.com/'); // Change URL as needed

  await page.pause()
  await page.goto('https://example.com'); // Change URL as needed
  // Further test assertions here
});