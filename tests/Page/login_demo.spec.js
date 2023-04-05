// import{test,expect} from '@playwright/test'
// const loginPageLocators = require('../locators/login_page')
// const loginPageData = require('../testData/loginPageTD')
// const common = require('../Common/common')


// test('Demo Login Page with Valid Credentials', async({page})=>{ 

//     /*page is object of webpage which provides method and properties for intracting
//       with webpage and its element.
//       It represents a single instance of a web page that has been opened in a browser*/
      
//     await page.goto('https://practicetestautomation.com/practice-test-login/')
//     await page.locator(loginPageLocators.userName).fill(loginPageData.uid);  
//     await page.locator(loginPageLocators.password).fill(loginPageData.pwd);
//     await page.locator(loginPageLocators.login_btn).click();
//     let loggedInMsg =await page.getByText('Logged In Successfully').textContent();
//     common.testVariables.loginSuccessfulMessage=loggedInMsg;
//     console.log('Successful login Message is '+loggedInMsg);
//    // console.log('Successful login Message is '+common.testVariables.loginSuccessfulMessage);
// })


// test('Demo Login Page with Invalid Credentials', async({page})=>{
//     await page.goto('https://practicetestautomation.com/practice-test-login/')
//     await page.locator(loginPageLocators.userName).fill(loginPageData.invaliduid);
//     await page.locator(loginPageLocators.password).fill(loginPageData.invalidpwd);
//     await page.locator(loginPageLocators.login_btn).click();
//     const errorMsg = await page.locator('div[id="error"]').textContent()
//     common.testVariables.loginErrorMessage= errorMsg;
//     console.log('Error Message is '+errorMsg);
//    // console.log('Error Message is '+common.testVariables.loginErrorMessage);
// })