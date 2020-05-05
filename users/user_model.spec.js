const request =  require('supertest')
const model = require('./user_router')

describe('should return 201', () => {
    it('returns 201', () => {
        return request(model).get('/')
        .then(res => {
            expect(res.status).toBe(201)
        })
    })
})