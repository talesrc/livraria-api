const app = require('../server');
const request = require('supertest');

describe('GET /user', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/api/product/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });