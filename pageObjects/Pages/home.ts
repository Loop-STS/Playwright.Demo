import { expect, Locator, Page, test } from '@playwright/test';

// For SmartPlan *** EXPRESS ONLY ***

export class contributionsPage {

    // readonly Locators stating the items are locators (or parameters)
    readonly page: Page
    readonly pageLocator: Locator
    readonly pageHeader: Locator
    readonly manuallyEnroll: Locator
    readonly automaticallyEnroll: Locator
    readonly confirmButton: Locator
    readonly totalContributionPercent: Locator
    readonly pretaxPercentField: Locator
    readonly rothPercentField: Locator


    // These are the SmartPlan App Object Definitions : Contributions
    constructor(page: Page) {
        // Landing Page
        this.page = page    
        this.pageLocator = page.locator('text=Contributions');
        this.pageHeader = page.locator('text        Great news! Your retirement plan features auto-enrollment.')
        this.manuallyEnroll = page.locator('div[class*=v-radio]', { has: page.locator('text=Manually enroll')}).locator('input[role=radio]');
        this.automaticallyEnroll = page.locator('div[class*=v-radio]', { has: page.locator('text=Automatically enroll')}).locator('input[role=radio]');
        this.confirmButton =  page.locator('button:has-text("Confirm")');
        this.totalContributionPercent = page.locator('div[class*=font-weight-medium]:right-of(:text("Your Contribution"))');
        this.pretaxPercentField = page.getByRole('spinbutton', { name: 'Pre-Tax Contribution % per paycheck input field' });
        this.rothPercentField = page.getByRole('spinbutton', { name: 'Roth Contribution % per paycheck input field' });
    }

    async verifyContributionsPage() {
        await expect(this.pageLocator).toBeVisible();
        await this.page.waitForSelector('text=Choose a custom mix of investments for your plan.')
    }
}