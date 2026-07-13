const {test, expect}= require('@playwright/test');

test("RadioButtons and checkboxes", async({page})=>
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
const radiobutton=await page.locator("//input[@value='radio2']")
await radiobutton.click();
await expect(radiobutton).toBeChecked();
await page.locator("#checkBoxOption2").check();
expect(await page.locator("#checkBoxOption2").isChecked()).toBeTruthy();
expect(await page.locator("#checkBoxOption3").isChecked()).toBeFalsy();
await page.waitForTimeout(5000);

});