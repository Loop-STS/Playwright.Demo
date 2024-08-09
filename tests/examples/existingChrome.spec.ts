import { test, expect, chromium, Browser } from '@playwright/test';
import { ExistingBrowser } from '../../pageObjects/Pages/existingBrowser';

let browser: Browser;
let existingBrowser: ExistingBrowser;

test.beforeAll(async () => {
  browser = await chromium.connectOverCDP("http://localhost:9222");
});

test.afterAll(async () => {
  await browser.close();
});

test('connect to existing chrome and get title', async () => {

  // Assuming there's only one context and one page in the connected browser
  const context = browser.contexts()[0];
  const page = context.pages()[0];
  const title = await page.title();

  existingBrowser = new ExistingBrowser(page);

  const elements = [
    { locator: existingBrowser.canaryReleases, name: `${existingBrowser.canaryReleases}` },
    { locator: existingBrowser.gettingStarted, name: `${existingBrowser.gettingStarted}` },
    { locator: existingBrowser.commandLine, name: `${existingBrowser.commandLine}` }
  ];

  for (let elementObj of elements) {
    await elementObj.locator.evaluate((el, name) => {
        el.style.backgroundColor = 'yellow';
        el.style.position = 'relative';  // Ensure the element is positioned

        // Using ::before pseudo-element to show the locator's name
        const styleElem = document.createElement("style");
        styleElem.innerHTML = `
            [data-locator-name="${name}"]::before {
                content: "${name}";
                color: black;
                background-color: white;
                position: absolute;
                top: 0;
                left: 0;
                font-size: 10px;
                padding: 2px 4px;
                border: 1px solid black;
            }
        `;
        document.head.appendChild(styleElem);
        el.setAttribute('data-locator-name', name);  // Adding a data attribute to identify the element
    }, elementObj.name);
  }
  await page.getByRole('link', { name: 'Community' }).click();

  await page.pause();

});
