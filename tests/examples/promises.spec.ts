import { test, expect } from '@playwright/test';

import {POM} from '../../pageObjects/Pages/pomExample'

test('Arrary', async ({ page }) => {
    let pom: POM
    pom = new POM (page)

    await pom.goToHome()

    // await page.pause()
    const [ben] = await Promise.all([
        page.locator('div[class="col-md-3 col-sm-12"]').allInnerTexts()
        
        ])

    console.log(ben[0]);
    
});

test('Boolean', async ({ page }) => {
    let pom: POM
    pom = new POM (page)

    await pom.goToHome()

    // const exampleBoolean = await ()
    
    expect(pom.exampleEnabled()).toBeTruthy();

    const exampleArray = await pom.exampleArray()

    console.log(exampleArray)

    const exampleNumber = await pom.exampleNumber()

    console.log(exampleNumber)

});



