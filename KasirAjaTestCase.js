import request from "supertest";
import { expect } from "chai";

const baseUrl = "https://kasir-api.zelz.my.id";

// async function login(payload) {
//     const response = await request("https://kasir-api.zelz.my.id")
//        .post("/authentications")
//        .send(payload);
//     return response
// }

describe("Process Kasir Aja Automation API", () => {
    let accessToken;
    it("1. Success Login & get token", async() =>{
        const payload = {
            "email": "andi@mail.com",
            "password": "Qwerty1"
        }
        //send request
        const response = await request (baseUrl)
            .post("/authentications") //endpoint
            .send(payload); //request body
            //.set("contentType", "application/json") //headers

        accessToken = (await response).body.data.accessToken
        console.log(await accessToken)

        //Assertion
        expect((await response).status).to.equal(201)
        expect((await response).body).to.not.be.empty
        expect(accessToken).to.be.a('string')
    })

    it("2. Success get user list", async() =>{
        //send request
        const response = await request (baseUrl)
            .get("/users") //endpoint
            .set("Authorization", "Bearer " + accessToken) //request body

        console.log((await response).body)

        //Assertion
        expect((await response).status).to.equal(200)
        expect((await response).body).to.not.be.empty
        expect((await response).body).to.have.property('data');
    })

    it("3. Success get category list", async() =>{
        //send request
        const response = await request (baseUrl)
            .get("/categories") //endpoint
            .set("Authorization", "Bearer " + accessToken) //request body

        console.log((await response).body)

        //Assertion
        expect((await response).status).to.equal(200)
        expect((await response).body).to.not.be.empty
        expect((await response).body).to.have.property('data');
    })
        
    it("4. Success get customer list", async() =>{
        //send request
        const response = await request (baseUrl)
            .get("/customers") //endpoint
            .set("Authorization", "Bearer " + accessToken) //request body

        console.log((await response).body)

        //Assertion
        expect((await response).status).to.equal(200)
        expect((await response).body).to.not.be.empty
        expect((await response).body).to.have.property('data');
    })

    it("5. Success get product list", async() =>{
        //send request
        const response = await request (baseUrl)
            .get("/products") //endpoint
            .set("Authorization", "Bearer " + accessToken) //request body

        console.log((await response).body)

        //Assertion
        expect((await response).status).to.equal(200)
        expect((await response).body).to.not.be.empty
        expect((await response).body).to.have.property('data');
    })
        
})

