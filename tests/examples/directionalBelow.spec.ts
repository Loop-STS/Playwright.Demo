import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    //  There are really only specific use cases this is valuable.

    await page.goto('https://automationintesting.online/');

    await page.getByRole('button', { name: 'Let me hack!' }).click();
    
    await page.getByRole('button', { name: 'Book this room' }).click();
    
    // await page.locator('tr[class*="ant-table-row ant-table-row-level-0"]', { has: page.locator('text=iis')}).locator('span[aria-label="usergroup-add"]').click()

});