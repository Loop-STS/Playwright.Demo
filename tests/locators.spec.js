const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('create locators for all visible elements on a page', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://www.workwithloop.com');
  await page.pause();

  // Get all links on the page
  const links = await page.$$('a');
  console.log(`Found ${links.length} links`);
  // Loop through each link and create a locator for it
  for (const link of links) {
    const locator = await link.locator();
    const locatorString = await locator.toString();
    console.log(locatorString);

    // Append the locator string to the locators.txt file
    fs.appendFileSync('locators.txt', locatorString + '\n');
  }
});



