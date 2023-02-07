import { expect, Locator, Page, test } from '@playwright/test';

export class ContactPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillOutName(name: string) {
    await test.step(`I can fill out the name field with: ${name}`, async () => {
        await expect(this.page.getByPlaceholder('Full Name'), `'Full Name' field not found`).toBeVisible();
        await this.page.getByPlaceholder('Full Name').click();
        await this.page.getByPlaceholder('Full Name').fill(name);
        await this.page.getByPlaceholder('Full Name').press('Tab');
    });
}

async fillOutEmail(email: string) {
    await test.step(`I can fill out the email field with: ${email}`, async () => {
        await expect(this.page.getByPlaceholder('Email Address'), `'Email Address' field not found`).toBeVisible();
        await this.page.getByPlaceholder('Email Address').fill(email);
        await this.page.getByPlaceholder('Email Address').press('Tab');
    });
}

async fillOutMessage(message: string) {
    await test.step(`I can fill out the message field with: ${message}`, async () => {
        await expect(this.page.getByPlaceholder('What can we help you with today?'), `'What can we help you with today?' field not found`).toBeVisible();
        await this.page.getByPlaceholder('What can we help you with today?').fill(message);
    });
}
}