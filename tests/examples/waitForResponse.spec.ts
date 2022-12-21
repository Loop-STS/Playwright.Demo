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