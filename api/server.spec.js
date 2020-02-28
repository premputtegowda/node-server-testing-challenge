require('dotenv').config();
const request = require('supertest');
const server = require('./server.js')
describe('server', function(){
    //sample
    it('runs the tests', function(){
        expect(true).toBe(true)
    })
    //
    describe('GET /', function(){
        it('should status code 200', function(){
            return request(server).get('/')
                .then(res => expect(res.status).toBe(200))
        })

        it('should return json', function(){
            return request(server).get('/')
                .then(res => expect(res.type).toMatch(/json/i))
        })

        it('should return json(api-up)', async function(){
                const res = await request(server).get('/')
                expect(res.body).toEqual({api: "up"})
        })

    })


})

