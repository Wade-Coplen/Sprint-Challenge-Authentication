const request = require('supertest');

const server = require('./server')


describe('server', () => {
    it('should set the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })
   
})
describe('GET /', () => {
    it('should return status 200', () => {
        return request(server).get('/')
        .then(res => {
            expect(res.status).toBe(200);
        });
    });
    it('should return 200', async () => {
        const result = await request(server).get('/');
        expect(result.status).toBe(200)
    })
   
})