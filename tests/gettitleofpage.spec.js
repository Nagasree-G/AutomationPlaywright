const{test}= require('@playwright/test');

test('Get title of the page', async({page})=>
{
 await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
 const PageTitle= await page.title();
 console.log(PageTitle);
}

)
