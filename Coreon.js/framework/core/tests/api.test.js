const request = require('supertest');
const app = require('../index'); // Assuming the main app is exported from index.js

describe('API Endpoints', () => {
    it('should return a list of resources', async () => {
        const res = await request(app)
            .get('/api/resources') // Adjust the endpoint as necessary
            .expect('Content-Type', /json/)
            .expect(200);

        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBeTruthy();
    });

    it('should create a new resource', async () => {
        const newResource = { name: 'Test Resource', description: 'This is a test resource' };

        const res = await request(app)
            .post('/api/resources') // Adjust the endpoint as necessary
            .send(newResource)
            .expect('Content-Type', /json/)
            .expect(201);

        expect(res.body).toHaveProperty('data');
        expect(res.body.data.name).toBe(newResource.name);
    });

    it('should return a single resource', async () => {
        const res = await request(app)
            .get('/api/resources/1') // Adjust the endpoint and ID as necessary
            .expect('Content-Type', /json/)
            .expect(200);

        expect(res.body).toHaveProperty('data');
        expect(res.body.data.id).toBe(1);
    });

    it('should update a resource', async () => {
        const updatedResource = { name: 'Updated Resource' };

        const res = await request(app)
            .put('/api/resources/1') // Adjust the endpoint and ID as necessary
            .send(updatedResource)
            .expect('Content-Type', /json/)
            .expect(200);

        expect(res.body).toHaveProperty('data');
        expect(res.body.data.name).toBe(updatedResource.name);
    });

    it('should delete a resource', async () => {
        const res = await request(app)
            .delete('/api/resources/1') // Adjust the endpoint and ID as necessary
            .expect(204);

        expect(res.body).toEqual({});
    });
});