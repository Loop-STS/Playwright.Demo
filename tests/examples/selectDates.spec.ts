import { test, expect } from '@playwright/test';

test('Book Today', async ({ page }) => {

    const date = require('date-and-time');
    const now = new Date();
    const startFormatted = date.format(now, 'DD');

    await page.goto('https://automationintesting.online/');

    await page.getByRole('button', { name: 'Let me hack!' }).click();
    
    await page.getByRole('button', { name: 'Book this room' }).click();
    
    await page.locator('div[class *= "rbc-date-cell"]', { has: page.locator(`text=${startFormatted}`)}).click()

});

test('Book the Nearest Monday', async ({ page }) => {
    const date = require('date-and-time');
    const now = new Date();
    var getNearestDayOfWeek = require('get-nearest-day-of-week')
    var Monday = getNearestDayOfWeek(now, 1)
    const start = new Date(Monday);
    const startFormatted = date.format(start, 'DD');

    //  There are really only specific use cases this is valuable.

    await page.goto('https://automationintesting.online/');

    await page.getByRole('button', { name: 'Let me hack!' }).click();
    
    await page.getByRole('button', { name: 'Book this room' }).click();
    
    await page.locator('div[class *= "rbc-date-cell"]', { has: page.locator(`text=${startFormatted}`)}).click()

});

test('Book Tomorrow', async ({ page }) => {

    const date = require('date-and-time');
    const now = new Date();
    const AddDays = date.addDays(now, 1);
    const startFormatted = date.format(AddDays, 'DD');

    //  There are really only specific use cases this is valuable.

    await page.goto('https://automationintesting.online/');

    await page.getByRole('button', { name: 'Let me hack!' }).click();
    
    await page.getByRole('button', { name: 'Book this room' }).click();
    
    await page.locator('div[class *= "rbc-date-cell"]', { has: page.locator(`text=${startFormatted}`)}).click()

});