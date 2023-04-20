import { test, expect} from '@playwright/test'
const model = require('../model/demo_model')

test.describe('API Testing with Playwright', ()=>{

    test('Get API test- Assert Responce status', async({request, baseURL})=> {
        let getresponse = await request.get(`${baseURL}/api/users/2`);
        expect(getresponse.status()).toBe(200);
        let responseBody = JSON.parse(await getresponse.text())
   console.log(responseBody)
   let userID = responseBody.data.id;
   let userMail = responseBody.data.email;
   console.log(userID)
   console.log(userMail)
   expect(responseBody.data.email).toBe("janet.weaver@reqres.in")
   expect(responseBody.data.last_name).toBe('Weaver')
   })

   
test('Post API test- Assert Responce status',async({request, baseURL})=>{
    let response = await request.post(`${baseURL}/api/users`, model.data)
    let postResponse= JSON.stringify(await response.json());
    console.log(postResponse);
    expect(response.status()).toBe(201)
    let name= await postResponse.name;
    console.log(name);
 })
 
 
 //Put Request 
 test('Put API test -Update User',async({request, baseURL})=>{
     let response = await request.put(`${baseURL}/api/users/2`,model.putData)
     let putResponseBody = JSON.parse(await response.text());
     console.log(putResponseBody);
     expect(response.status()).toBe(200)
     expect(putResponseBody.updatedAt).toBeTruthy();
     console.log(putResponseBody);
 })
 
 //Delete Request
 test('Delete API test- Delete User',async({request,baseURL})=>{
     let response = await request.delete(`${baseURL}/api/users/2`)
     expect(response.status()).toBe(204);

 })
})






