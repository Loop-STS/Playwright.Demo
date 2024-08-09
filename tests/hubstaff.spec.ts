import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.staging.hbstf.co/organizations/2859/settings/billing');
  await page.getByPlaceholder('Enter your work email').click();
  await page.getByPlaceholder('Enter your work email').fill('jaime+owner@workwithloop.com');
  await page.getByPlaceholder('Enter 6 or more characters').click();
  await page.getByPlaceholder('Enter 6 or more characters').fill('KHC5atw.hnr0ufu!hnm');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByText('OK').click();
  await page.getByRole('link', { name: 'Change card' }).click();
  await page.pause()
  await page.getByPlaceholder('First and last name').fill('Hi Aaron', {force: true})
  // await page.frameLocator('iframe[name="__privateStripeFrame51614"]').getByPlaceholder('First and last name').click();
});