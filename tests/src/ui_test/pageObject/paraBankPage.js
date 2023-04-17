const { expect, test}= require ("@playwright/test")
//  const page= actor();
 class paraBankLogin{

    async visitPage(url){
         await page.goto(url)
    }

    async elementClick(buttonLocator){
        await page.click(buttonLocator)
    }

    //select Appointment details
    async selectFacility(dropdownLocator, optValue){
        await page.locator(dropdownLocator).selectOption(optValue);
    }

    async elementFill(inputBox, String){
        await page.locator(inputBox).fill(String)
    }

    async aseertion(titleLocator,textMessage){
        let Title = await page.locator(titleLocator).innerText();
        expect(Title).toBe(textMessage)
    }
}
 module.exports = {paraBankLogin}