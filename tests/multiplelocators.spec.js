const { test } = require('@playwright/test');

test("Multiple locators", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

    const products = page.locator(".product-name");

    const count = await products.count();

    for (let i = 0; i < count; i++) {
        console.log(await products.nth(i).textContent());
    }
});