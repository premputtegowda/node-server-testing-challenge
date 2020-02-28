
const Users = require("./user-model.js");
const db = require('../database/dbConfig.js')

describe("user model", function(){
    beforeEach(async ()=> {
        await db('users').truncate();
    })
    describe('test environemnt', function(){
        it("should use the testing environemnt", function(){
            expect(process.env.DATABASE_ENV).toBe('testing');
        })
    })

    describe("insert", function(){

        it('adds the new user to the database', async function(){
            //
            await Users.add({username:"prem2", password:"pass", department:"product2"})
            
           const user = await db('users').first();
           expect(user).toEqual({id: 1, username:"prem2",department:"product2",password:"pass"})

        })
    })

})