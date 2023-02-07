import { test, expect } from '@playwright/test';
import {POM} from '../../pageObjects/Pages/pomExample'

test.describe('Test file description', () => {

test('Human readable pass example', async ({ page }) => {
    test.info().annotations.push(({
        type: 'Test',
        description: 'This test will pass because the book name is correct'
    }))

    let pom: POM
    pom = new POM (page)

    // Example of a test step without Steps & Excepts
    await pom.goToHome()
    test.step('Step at the Test Level', async () => {
        await pom.clickBookName('HP2')
    })

});
    
test('Human readable fail example', async ({ page }) => {
    test.info().annotations.push(({
        type: 'Test',
        description: 'This test will fail because the book name is incorrect'
    }))

    let pom: POM
    pom = new POM (page)

    // Example of a test step without Steps & Excepts
    await pom.goToHome()

    test.step('Step at the Test Level', async () => {
        await pom.clickBookName('Loop Software')
    })

});

test('Fail without the step & expect', async ({ page }) => {
    test.info().annotations.push(({
        type: 'Test',
        description: 'This test will fail because the book name is incorrect & will not be human readable'
    }))

    let pom: POM
    pom = new POM (page)

    // Example of a test step without Steps & Excepts
    await page.goto('https://bookcart.azurewebsites.net/');

    await page.locator('div[class="col-md-3 cl-sm-12"]').click()

});
});