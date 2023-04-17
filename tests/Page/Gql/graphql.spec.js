

const { test, expect } = require('@playwright/test')
const gqlQuery = require("../Gql/gqlQuery")
const baseURLgql='https://graphql.anilist.co'

test.describe('GQL testing in Playwright',()=>{
  test('GraphQL Query for List of Animes', async ({ request }) => {

    let response = await request.post(baseURLgql, {
        data: {
            query: gqlQuery.films
        }
    })
    expect(response.ok()).toBeTruthy();

    //  console.log('check',(await response.body()).toString())
    // let responseBody = JSON.parse(await response.text())
    // let mediaCount = await responseBody.data.Page.media;
    //console.log('Totle count =' + mediaCount.length);
    // for(let i=0; i<mediaCount.length; i++)
    // {
    //     let titles = mediaCount[i].title.english;
    //     console.log(titles+'/n');
    // }


});
})



