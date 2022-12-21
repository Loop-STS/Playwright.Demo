import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    //  There are really only specific use cases this is valuable.

    await page.routeFromHAR('har/har1/booksapi.har', {
        update: false,
        url: 'https://bookcart.azurewebsites.net/api/**'
    })

    await page.goto('https://bookcart.azurewebsites.net/');
    await page.pause();
    await page.waitForLoadState('networkidle')

    await page.routeFromHAR('har/har2/booksapi2.har', {
        update: false,
        url: 'https://bookcart.azurewebsites.net/api/**'
    })

    await page.goto('https://bookcart.azurewebsites.net/');

    await page.waitForLoadState('networkidle')


    // await page.locator('tr[class*="ant-table-row ant-table-row-level-0"]', { has: page.locator('text=iis')}).locator('span[aria-label="usergroup-add"]').click()

});