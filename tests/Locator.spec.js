const {test}= require('@playwright/test')

test("Locators", async({page})=>
{
 await page.goto("https://rahulshettyacademy.com/angularpractice/");
 await page.locator('form input[name="name"]').fill("Nagasree");
 await page.locator('input[name="email"]').fill("naga@gmailcom");

})