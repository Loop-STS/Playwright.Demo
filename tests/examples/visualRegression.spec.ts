import { test, expect } from '@playwright/test';

test('Element comparison', async ({ page }) => {

    //  There are really only specific use cases this is valuable.

    await page.goto('https://automationintesting.online/');

    await page.locator('img[src="https://www.mwtestconsultancy.co.uk/img/rbp-logo.png"]').screenshot()
    
    await expect(page.locator('img[src="https://www.mwtestconsultancy.co.uk/img/rbp-logo.png"]')).toHaveScreenshot({ maxDiffPixels: 3500 })

});

test('Full page comparison', async ({ page }) => {

    //  There are really only specific use cases this is valuable.

    await page.goto('https://automationintesting.online/');

    await expect(page).toHaveScreenshot({ maxDiffPixels: 3500 });
    
});