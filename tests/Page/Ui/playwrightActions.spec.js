import{test,expect} from '@playwright/test'
const common = require('../../Common/common')

test.describe('testing the alert handling',function(){
//Alter Handling Functionality
test('Alert Handle in Playwright',async({page})=>{        //Issue
    await page.goto('https://demoqa.com/alerts') 
    page.on('dialog',async(dialog)=>{
        page.waitForTimeout(3000);
         expect(dialog.type().toContain('alert'));
         expect(dialog.message().toContain('You clicked a button'));
         await dialog.accept()
         await page.click("#alertButton")
    })
});
//Prompt Handling Functionality
test('Prompt Handle in Playwright',async({page})=>{          //Issue
    await page.goto('https://demoqa.com/alerts')
    
    page.on('dialog',async(dialog)=>{
         expect(dialog.type().toContain('Prompt'));
         expect(dialog.message().toContain('Please enter your name'));
         await dialog.accept('Testing Prompt')
         await page.click("#promtButton")
         let messgae = await page.locator('#promptResult').innerText();
         console.log(messgae);
         await expect(page.locator('#promptResult')).toHaveText('You entered Testing Prompt')
    })
});
})

test.describe('file upload in playwright',function(){
//File Upload Functionality
test('File upload in Playwright',async({page})=>{
    await page.goto('https://kitchen.applitools.com/ingredients/file-picker')
  await page.setInputFiles('#photo-upload','Fixtures/images/Misal.jpg');
});
})
test.describe('Drag and Drop functionality',function(){
//Drag and Drop Functionality
test('Drag and Drop in Playwright',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Static.html')
    expect(page).toHaveTitle('Drag and Drop')
    await page.locator("#node").dragTo(page.locator('#droparea'));
    await page.locator("#mongo").dragTo(page.locator('#droparea'));
    await page.locator("#angular").dragTo(page.locator('#droparea'));
});

//Drag and Drop Functionality Manually
test('Manually Drag and Drop in Playwright',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Static.html')
    expect(page).toHaveTitle('Drag and Drop')
    await page.locator('#mongo').hover();
    await page.mouse.down();
    await page.locator('#droparea').hover();
    await page.mouse.up();
});
})


test.describe('Array handling from POM ',function (){
    //Get list of Elements from periodic table
    test('Get list of element in Array',async({page})=>{
        await page.goto('https://pubchem.ncbi.nlm.nih.gov/periodic-table/')
        expect(page).toHaveTitle("Periodic Table of Elements - PubChem");
        // let elements = await page.locator('div[data-tooltip="Name"]').allInnerTexts();
        // console.log(elements.length);
        // console.log(elements)
        // common.testVariables.listOfElements=elements;
        // //console.log(common.testVariables.listOfElements);
    });
})


// Single Window Handling in Playwright
// test.only('Single Windows Handeling',async({page})=>{
//     await page.goto('https://letcode.in/windows')
//     expect(page).toHaveTitle("Window handling - LetCode");
//     const [newWindow] = await Promise.all([
//         context.waitForEvent('page'),
//         await page.click('#home')   
//     ])

    
// });