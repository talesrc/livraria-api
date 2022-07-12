const app = require('../server');
const request = require('supertest');

describe('GET /api/product/', () => {
    it('responds with json', async () => {
        await request(app)
            .get('/api/category/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    });
});

describe('GET /api/category/', () => {
    it('responds with an array', async () => {
        const res = await request(app).get('/api/category/')
        expect(Array.isArray(res.body)).toBe(true)
    });
});

describe('GET /api/category/', () => {
    it('responds with an array', async () => {
        const res = await request(app).get('/api/category/')
        expect(Array.isArray(res.body)).toBe(true)
    });
});

describe('GET /api/product/:id', () => {
    it('responds without array', async () => {
        const res = request(app).get('/api/category/1')
        expect(Array.isArray(res.body)).toBe(false)
    })
})

describe('GET /api/product/:id', () => {
    it('responds with status 404 if doesnt search an item with that id', async () => {
        const res = await request(app).get('/api/category/a')
        expect(res.statusCode).toEqual(404)
    })
})
