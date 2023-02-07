import { test, expect } from '@playwright/test';

async function isFinished(response) {
    return response.url().includes('https://automationintesting.online/report/room/1') && response.status() === 200 && (await response.json()).response === ''
}

test('test', async ({ page }) => {

    await page.goto('https://automationintesting.online/');

    await page.getByRole('button', { name: 'Let me hack!' }).click();
    
    await page.getByRole('button', { name: 'Book this room' }).click();

    // await page.waitForResponse(response => response.url() === 'https://automationintesting.online/report/room/1' && response.status() === 200);
    // await page.waitForResponse(response => response.url() === 'https://automationintesting.online/report/room/1' && response.text() === 'asdf');
    
    const response = await page.waitForResponse(async (response) => await isFinished(response));

    await expect(page.locator('span[class=rbc-toolbar-label]')).toContainText('November 2022')

});


test ('WaitForResponse click to cart', async ({ page }) => {

    await page.waitForLoadState('networkidle');

    await page.goto('https://bookcart.azurewebsites.net/')

    await page.locator('mat-card-content:has-text("HP2₹235.00shopping_cart Add to Cart")').getByRole('button', { name: 'Add to Cart' }).click();

    await page.pause()

    const [request] = await Promise.all([
        page.waitForResponse(response => response.url().includes("creditspackages/credits-data") && response.status() === 200, {timeout: 60000}),
        page.getByRole('button', { name: 'Book this room' }).click()
    ]);

    await page.locator('text=CheckOut').click()

})