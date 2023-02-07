import { expect, Locator, Page, test } from '@playwright/test';

// For SmartPlan *** EXPRESS ONLY ***

export class POM {

    // readonly Locators stating the items are locators (or parameters)
    readonly page: Page
    readonly pageLocator: Locator



    // These are the SmartPlan App Object Definitions : Contributions
    constructor(page: Page) {
        // Landing Page
        this.page = page    
        this.pageLocator = page.locator('text=Contributions');
;
    }

    async verifyContributionsPage()  : Promise<void>  {
        await expect(this.pageLocator).toBeVisible();
        await this.page.waitForSelector('text=Choose a custom mix of investments for your plan.')
    }

    async goToHome(){
        await test.step(`I can go to the home page`, async () => {
        await this.page.goto('https://bookcart.azurewebsites.net/');
        })
    }

    async exampleEnabled(): Promise<boolean> {
        return await this.page.locator('div[class="col-md-3 col-sm-12"]').isEnabled()
    }

    // Promise<string[]>
    // Promise<Array<string>>
    async exampleArray(): Promise<Array<string>> {
        return await this.page.locator('div[class="col-md-3 col-sm-12"]').allInnerTexts()
    }

    async exampleNumber(): Promise<number> {
        return await this.page.locator('div[class="col-md-3 col-sm-12"]').count()
    }

    async clickBookName(name: string){
        await test.step(`I can click the book using the name: ${name}`, async () => {
        await expect(this.page.locator(`text=${name} >> nth=0`),`Can not find the Book Name ${name}- did the locator change?`).toBeVisible()
        await this.page.locator(`text=${name} >> nth=0`).click();
    })} 

}