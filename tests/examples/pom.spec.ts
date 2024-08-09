import test from '../../middlewear';
import { POM } from '../../pageObjects/Pages/pomExample';
import * as fs from 'fs';

test.describe('Test file description', () => {

    test.beforeEach(async ({ page }) => {
    });

    test('Human readable pass example', async ({ page }) => {

        const pom = new POM(page);

        await Promise.all([

            page.waitForResponse(resp => resp.url().includes('https://bookcart.azurewebsites.net/api/book/')),
            pom.goToHome()

            ])

            
            
        await pom.menu('Fiction').click();

        

        // Ensure that getByRole and filter are valid methods or replace with correct Playwright methods.
        await page.getByRole('button').filter({ hasText: 'shopping_cart0' }).click();
        await pom.goToHome();
    });
});
