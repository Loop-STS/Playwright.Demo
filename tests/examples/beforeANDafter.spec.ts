import { test, expect } from '@playwright/test';

let productExist = false;
let customerExist = false;
let orderExist = false;

test.beforeEach(async (page) => {
    // Create the product
    productExist = true;
    
    // Create the customer
    customerExist = true;

});

test.afterEach(async ({ page }) => {
    if (productExist === true) {
        // Delete the product
    }
    if (customerExist === true) {
        // Delete the customer
    }
    if (orderExist === true) {
        // Delete the order
    }

    const myElement = await page.locator('.my-element').isEnabled();
    if (myElement === true) {
        await page.locator('.my-element').click();
    }
    
  });
  
test('test', async ({ page }) => {

    // Execute the Order
    orderExist = true;
       
  });

  