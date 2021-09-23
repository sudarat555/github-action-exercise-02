const request = require('supertest')
const app = require('../index')

describe('GET /', () => {
    it('responds with "No user in the system"', (done) => {
        request(app).get('/').expect('No user in the system', done)
    })
})