import { test, expect, request, _baseTest, } from '@playwright/test';
import { Message } from '../../pageObjects/API/messages';
import ENV from '../../env'
import { faker } from '@faker-js/faker';

test.describe('API', () => {

   test.beforeAll(async ({request}) => { 

      // Generate Auth Token
    //     const response = await request.post(``, {
    //       'headers': {
    //         // 'Authorization': `Bearer ${_token_}`,
    //         'Content-Type': '',
    //         'Cookie': ''
    //         },
    //         form: {
    //          'client_id': `${ENV.CLIENT_ID}`,
    //          'client_secret': `${ENV.CLIENT_SECRET}`,
    //          'grant_type': 'client_credentials',
    //          'scope': 'OnSchedApi'
    //        }
    //     })
    //     const responseBody = await response.json()
    
    //     const Example =
    //     {
    //       "access_token": expect.any(String),
    //       "expires_in": 3600,
    //       "token_type": "Bearer"
    //    }
        
    //    expect(responseBody).toEqual(Example);
    
    //     // console.log(responseBody)
    //     console.log(await response.json())
    //     const AuthID = responseBody.access_token
    //     process.env.AuthID = AuthID
    
    //     console.log(AuthID)
        
      })

   test('I can post a valid message',async ({ request }) => {
      const message = new Message(request);

      await message.postMessage(message.examplePost, message.exampleResponse, 201)
    
      const examplePost2 = {
        "name": ENV.Name,
        "email": "ben456@gmail.com",
        "phone": "111-111-1111",
        "subject": "I would like to book a room",
        "description": "This is a great message"
      }

      await message.postMessage(examplePost2, message.exampleResponse, 201)

   })

   test('I cannot post a message without a name',async ({ request }) => {
    const message = new Message(request);

    message.examplePost.name = ''

    await message.postMessage(message.examplePost, message.errorBlankName, 400)
   
   })

})