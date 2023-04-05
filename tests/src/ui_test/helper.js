
const { chromium } = require('@playwright/test');  // Or 'chromium' or 'firefox'.

async function launchBrowser ()  {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  return page ;
}
module.exports={
launchBrowser
}


// let browser;

// beforeAll(async () => {
//   browser = await chromium.launch();
//   const page = await browser.newPage();
 
 
// });

// afterAll(async () => {
//   await browser.close();
//   return afterAll;
// });


// describe('My test suite', () => {
//   test('Login with valid credentials', async () => {
//    const page = await browser.newPage();
    
    
//   });
// });

