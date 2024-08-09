import { expect, Locator, Page, test } from '@playwright/test';

export class ExistingBrowser {

    readonly page: Page
    readonly canaryReleases: Locator
    readonly gettingStarted: Locator
    readonly commandLine: Locator

    constructor(page: Page) {
        // Landing Page
        this.page = page    
        this.canaryReleases = page.locator('text=Canary releases')
        this.gettingStarted = page.locator('text=Getting started - VS Code')
        this.commandLine = page.locator('text=Command line')
    }



}