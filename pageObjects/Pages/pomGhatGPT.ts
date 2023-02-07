import { expect, Locator, Page, test } from '@playwright/test';

export class POM {

    readonly page: Page
    readonly pageLocator: Locator

    constructor(page: Page) {
        // Landing Page
        this.page = page    
        this.pageLocator = page.locator('text=Contributions');
    }

    async clickBookName(name: string){
        await test.step(`I can click the book using the name: ${name}`, async () => {
        await expect(this.page.locator(`text=${name} >> nth=0`),`Can not find the Book Name ${name}- did the locator change?`).toBeVisible()
        await this.page.locator(`text=${name} >> nth=0`).click();
    })} 

}