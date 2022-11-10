import { test, expect } from '@playwright/test';

test.describe('Example Athlete Registration on the Parent side', () => {
})

test('exampleAthleteRgeistration1', async ({ page}) => {
    test.fail()
    await page.goto('https://automationintesting.online/');

    await expect(page.getByRole('button', { name: 'Let me hack!' })).not.toBeVisible();

});
