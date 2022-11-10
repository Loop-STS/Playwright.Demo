import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    //  There are really only specific use cases this is valuable.

    await page.goto('https://automationintesting.online/');

    await page.getByRole('button', { name: 'Let me hack!' }).click();
    
    await page.getByRole('button', { name: 'Book this room' }).click();

    await page.waitForSelector('div[class="rbc-calendar"]');

    await expect(page.locator('span[class=rbc-toolbar-label]')).toContainText('November 2022')

});