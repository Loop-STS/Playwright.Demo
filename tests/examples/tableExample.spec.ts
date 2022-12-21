import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    // The most important takeaway to recognize when working with tables is that Locators to the left will be treated as the page of Locators to the right.

    await page.goto('https://automationintesting.online/');

    await page.getByRole('button', { name: 'Let me hack!' }).click();
    
    await page.getByRole('button', { name: 'Book this room' }).click();
    
    await page.locator('div[class *= "rbc-date-cell"]', { has: page.locator('text=10')}).click()

    
    
    // Below are two more example:

    // page.locator('div[class="ant-row"]', { has: page.locator('text=Contact Information')}).locator('div[class="ant-row"]', { has: page.locator('text=name')}).locator('span[aria-label="edit"]').click()

    // page.locator('tr[class*="ant-table-row ant-table-row-level-0"]', { has: page.locator('text=iis')}).locator('span[aria-label="usergroup-add"]').click()

});