const request = require('supertest');
const server = require('../api/server.js')

describe('POST /register', function() {
   
  describe('POST /api/register', () => {
    it('should return 201 created', async () => {
        const res = await request(server)
        .post('/api/auth/register')
        .send({username: 'john', 
               password:'pass',
               department: 'product'
                }
               )
        expect(res.status).toBe(201)
    })
})
})