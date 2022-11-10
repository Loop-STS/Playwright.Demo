import { test, expect } from '@playwright/test';

test('Generic Passing', async ({ page }) => {

  await page.goto('https://automationintesting.online/');

  await page.getByRole('button', { name: 'Let me hack!' }).click();

  await page.getByTestId('ContactName').click();

  await page.getByTestId('ContactName').fill('Ben');

  await page.getByTestId('ContactName').press('Tab');

  await page.getByTestId('ContactEmail').fill('ben123@email.com');

  await page.getByTestId('ContactEmail').press('Tab');

  await page.getByTestId('ContactPhone').fill('111-111-1111');

  await page.getByTestId('ContactSubject').click();

  await page.getByTestId('ContactSubject').fill('I would like to book a room');

  await page.getByTestId('ContactDescription').click();

  await page.getByTestId('ContactDescription').fill('This is a great message');

  await page.getByRole('button', { name: 'Submit' }).click();

});

test('Generic Negative Test', async ({ page }) => {

  await page.goto('https://automationintesting.online/');

  await page.getByRole('button', { name: 'Let me hack!' }).click();

  await page.getByTestId('ContactName').click();

  await page.getByTestId('ContactName').fill('Ben');

  await page.getByTestId('ContactName').press('Tab');

  await page.getByTestId('ContactEmail').fill('ben123@email.com');

  await page.getByTestId('ContactEmail').press('Tab');

  await page.getByTestId('ContactPhone').fill('111-111-1111');

  await page.getByTestId('ContactSubject').click();

  await page.getByTestId('ContactSubject').fill('I would like to book a room');

  await page.getByTestId('ContactDescription').click();

  await page.getByTestId('ContactDescription').fill('This is a great message');

  await page.getByRole('button', { name: 'Submit' }).click();

});