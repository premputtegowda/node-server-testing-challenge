const request = require('supertest');
const server = require('../api/server.js')
const db = require('../database/dbConfig.js')

describe('Delete ', function() {

    
    
  describe('delete /api/users/1', () => {
    it('should return 200 created', async () => {
        const res = await request(server)
        .delete('/api/users/1')
        .set('Authorization',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6InByZW0zIiwiZGVwYXJ0bWVudCI6InByb2R1Y3QzIiwiaWF0IjoxNTgyODU0OTAzLCJleHAiOjE1ODI4NTg1MDN9.nGg_tRsn0vPr_9z0rBbrKs2CKjX0hVChQiX2nIO1ZA0")
        
        expect(res.status).toBe(200)

    })
   
})
})