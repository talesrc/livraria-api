const app = require('../server');
const request = require('supertest');

describe('GET /api/product/', () => {
    it('responds with json', async () => {
        await request(app)
            .get('/api/product/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    });
});

describe('GET /api/product/', () => {
    it('responds with an array', async () => {
        const res = await request(app).get('/api/product/')
        expect(Array.isArray(res.body)).toBe(true)
    });
});

describe('GET /api/product/:id', () => {
    it('responds without array', async () => {
        const res = request(app).get('/api/product/1')
        expect(Array.isArray(res.body)).toBe(false)
    })
})

describe('GET /api/product/:id', () => {
    it('responds without array', async () => {
        const res = request(app).get('/api/product/1')
        expect(Array.isArray(res.body)).toBe(false)
    })
})

describe('GET /api/product/:id', () => {
    it('responds with status 404 if doesnt search an item with that id', async () => {
        const res = await request(app).get('/api/product/a')
        expect(res.statusCode).toEqual(404)
    })
})
