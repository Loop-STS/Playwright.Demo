import { test as baseTest, Browser, BrowserContext } from '@playwright/test';

// Extend the base test to include a custom context with HTTP credentials
export const test = baseTest.extend<{ context: BrowserContext }>({
  context: async ({ browser }, use) => {
    // Create a new browser context with specified HTTP credentials
    const context = await browser.newContext({
      httpCredentials: {
        username: 'uname', // Update this to your actual username
        password: 'psswd'  // Update this to your actual password
      },
    });

    // Use the custom context in your tests
    await use(context);

    // Clean up: close the context after the tests are complete
    await context.close();
  },
});

