import { test, expect } from '@playwright/test';

test('Set Storage State', async ({ page }) => {

    await page.goto('https://automationintesting.online/');

    await page.getByRole('button', { name: 'Let me hack!' }).click();

    await page.context().storageState({ path: 'storage.json' });

})