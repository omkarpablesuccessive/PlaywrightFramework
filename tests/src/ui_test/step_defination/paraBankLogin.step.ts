const {Given, When, Then} = require('@cucumber/cucumber')
import { Page } from "playwright"


let page: Page;
// import expect for assertion
const { expect,test} = require("@playwright/test");
//launch url
const {paraBankLogin}= require ('../pageObject/paraBankPage')

const login = new paraBankLogin();
  Given('User is on login page', async function () {
   console.log('given is exicuted')
    //  await login.visitPage("https://parabank.parasoft.com/")
     await page.goto('https://parabank.parasoft.com/');

    });

  When('User enters Username and password', async function () {
     
      
  });

  When('User click on Login button', async function () {
     
  });


  Then('User Login successful', async function () {
     
  });



