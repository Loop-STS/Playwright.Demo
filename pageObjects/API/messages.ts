import { test, expect, APIRequestContext } from '@playwright/test';
import { faker } from '@faker-js/faker';
import ENV from '../../env'

export class Message {
    readonly reqContext: APIRequestContext;
    readonly examplePost: any
    readonly exampleResponse: any
    readonly errorBlankName: any

    constructor (request: APIRequestContext) {
        
        this.reqContext = request;   
        this.examplePost = {
            "name": "Ben",
            "email": "ben123@email.com",
            "phone": "111-111-1111",
            "subject": "I would like to book a room",
            "description": "This is a great message"
          }
        this.exampleResponse = {
            "name": "Ben",
            "email": "ben123@email.com",
            "phone": "111-111-1111",
            "messageid": expect.any(Number),
            "subject": "I would like to book a room",
            "description": "This is a great message"
          }
        this.errorBlankName = {
            "errorCode": 400,
            "error": "BAD_REQUEST",
            "errorMessage": "Validation failed for argument [0] in public org.springframework.http.ResponseEntity<com.automationintesting.model.db.Message> com.automationintesting.api.MessageController.createMessage(com.automationintesting.model.db.Message) throws java.sql.SQLException: [Field error in object 'message' on field 'name': rejected value []; codes [NotBlank.message.name,NotBlank.name,NotBlank.java.lang.String,NotBlank]; arguments [org.springframework.context.support.DefaultMessageSourceResolvable: codes [message.name,name]; arguments []; default message [name]]; default message [Name may not be blank]] ",
            "fieldErrors": [
              "Name may not be blank"
            ]
          }
    }

    public async postMessage (body: any, returns: any, status: any){
        let statusResponse: number
        let callResponse: any

        await test.step('I can post a location', async() => {
            const response = await this.reqContext.post(`${ENV.BASE_URL}/message/`, {
            'headers': {
            'accept': 'application/json',
            'Authorization': `Bearer ${process.env.AuthID}`,
            'Content-Type': 'application/json-patch+json',
            },
            data: body
            });

            statusResponse = response.status()
            callResponse = await response.json()
            })
        
        await test.step(`The location status is ${status}`, async() => {
            expect(statusResponse,'Expected status').toBe(status)
            })

        await test.step('The location response body matches the expected body', async() => {
            expect.soft(await callResponse, 'The postLocation repsonse does not match the expected results').toEqual(returns)
            })

        await test.step('Grab the Location & Calendar ID for future tests', async() => {
            
            ENV.Name = callResponse.name

        })

}}