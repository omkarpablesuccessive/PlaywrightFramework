   

   let page= launchBrowser();
  
//   Given('User is on login page', async function () {
//       await page.goto("https://practicetestautomation.com/practice-test-login/") 
//     });

  When('User enters Username and password', async function () {
       await page.locator("input[name='username']").fill('student')
       await page.locator("input[id='password']").fill('Password123')
      
  });

  When('User click on Login button', async function () {
     (await page).fill();
  });


  Then('User Login successful', async function () {
     // Write code here that turns the phrase above into concrete actions
     return 'pending';
  });



