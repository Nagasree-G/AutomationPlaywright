const{test,expect}= require('@playwright/test')

test("All assertions", async({page})=>
{
 await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

 //TO have page url
 await expect(page).toHaveURL("https://rahulshettyacademy.com/AutomationPractice/");
 //To have page title
 await expect(page).toHaveTitle("Practice Page");
const tab=await page.locator("#opentab");
await expect(tab).toBeVisible();
const Countries=await page.getByPlaceholder("Type to Select Countries");
await expect(Countries).toBeEnabled();
const radiobutton=await page.locator("input[value='radio1']");
await radiobutton.click();
await expect(radiobutton).toBeChecked();
const attribute=await page.locator("#confirmbtn");
await expect(attribute).toHaveAttribute('type', 'submit');
await expect(page.locator("body h1")).toHaveText("Practice Page");
await expect(page.locator("body h1")).toContainText("Practice");
const value=await page.getByPlaceholder("Enter Your Name")
await value.fill("nagasree");
await expect(value).toHaveValue("nagasree");
})