const{test}= require('@playwright/test')

test('Launching the browser', async({browser})=>
{
const context= await browser.newContext();
const page=await context.newPage();
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

});

