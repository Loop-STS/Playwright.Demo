import { test, expect } from '@playwright/test';

test('Element comparison', async ({ page }) => {

    await page.goto('https://automationintesting.online/');

    await page.locator('text="example"').screenshot()
    
    await expect(page.locator('text="example"')).toHaveScreenshot({ maxDiffPixels: 3500 })

});

test('Full page comparison', async ({ page }) => {

    //  There are really only specific use cases this is valuable.

    await page.goto('https://automationintesting.online/');

    await expect(page).toHaveScreenshot({ maxDiffPixels: 3500 });
    
});