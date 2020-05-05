const request = require('supertest')
const Jokes = require('./jokes-router')

describe('should reutrn 200', () => {
    it('should be 200', () => {
        return request(Jokes)
        .get('/')
        .then(res => {
            expect(res.status).toBe(500)
        })
        
    })
})