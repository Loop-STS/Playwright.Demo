import { test, expect } from '@playwright/test';

test.use({ storageState: 'storage.json' });

test.describe('Example Athlete Registration on the Parent side', () => {
})

test('exampleAthleteRgeistration1', async ({ page}) => {
    await page.goto('https://automationintesting.online/');

    await page.getByRole('button', { name: 'Book this room' }).click();

});
