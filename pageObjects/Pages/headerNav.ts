import { expect, Locator, Page, test } from '@playwright/test';

export class HeaderMenu {
    readonly page: Page;
    readonly pageLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageLocator = page.locator('text=Contributions');
    }

    async clickHomeLink() {
        await test.step(`I can click the 'Home' link`, async () => {
            await expect(this.page.getByRole('link', { name: 'home' })).toBeVisible();
            await page.getByRole('link', { name: 'home' }).click();
            await expect(page).toHaveURL('https://www.workwithloop.com/');
        });
    }

    async clickManagedServicesLink() {
        await test.step(`I can click the 'Managed Services' link`, async () => {
            await expect(page.getByRole('link', { name: 'Managed Services' })).toBeVisible();
            await page.getByRole('link', { name: 'Managed Services' }).click();
            await expect(page).toHaveURL('https://www.workwithloop.com/#managed-services');
        });
    }

    async clickCapabilitiesLink() {
        await test.step(`I can click the 'Capabilities' link`, async () => {
            await expect(page.getByRole('link', { name: 'Capabilities' })).toBeVisible();
            await page.getByRole('link', { name: 'Capabilities' }).click();
            await expect(page).toHaveURL('https://www.workwithloop.com/#capabilities');
        });
    }

    async clickBlogLink() {
        await test.step(`I can click the 'Blog' link`, async () => {
            await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
            await page.getByRole('link', { name: 'Blog' }).click();
            await expect(page).toHaveURL('https://www.workwithloop.com/blog');
        });
    }

    async clickStartNowLink() {
        await test.step(`I can click the 'START NOW ➝' link`, async () => {
            await expect(page.locator('div[role="banner"]:has-text("HomeManaged ServicesCapabilitiesBlogSTART NOW ➝START NOW ➝ HomeAscentialTestMana")')).toBeVisible();
            await page.locator('div[role="banner"]:has-text("HomeManaged ServicesCapabilitiesBlogSTART NOW ➝START NOW ➝ HomeAscentialTestMana")').getByRole('link', { name: 'START NOW ➝' }).click();
            await expect(page).toHaveURL('https://www.workwithloop.com/contact');
        });
    }
}