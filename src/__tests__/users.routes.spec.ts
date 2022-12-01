import request from "supertest";
import { app } from '../shared/infra/http/index';

describe('[GET] /api/users', () => {

    it('should return a list of github users with a link to the next page', async () => {
        const response = await request(app).get('/api/users');
        const { data } = response.body;

        expect(response.body).toHaveProperty('data');
        expect(response.body).toHaveProperty('links');
        expect(data.length).toBe(30);
    })

    it('should return a list of github users with a link to the next page when have query parameter since', async () => {
        const response = await request(app).get('/api/users?since=100');
        const { data } = response.body;

        expect(response.body).toHaveProperty('data');
        expect(response.body).toHaveProperty('links');
        expect(data.length).toBe(30);
    })

    it('should return an error when have invalid query parameter since', async () => {
        const response = await request(app)
            .get('/api/users?since=AbC1').expect(400);

        const { status, message } = response.body;
        expect(status).toBe('error');
        expect(message).toBe('Invalid since option');
    })

});

describe('[GET] /api/users/:username/details', () => {
    it('should return username detail', async () => {
        const response = await request(app).get('/api/users/dinizrenato/details').expect(200);
        expect(response.body).toHaveProperty('login');
    })

    it('should return an error user not found', async () => {
        await request(app).get('/api/users/rdinizrenato/details').expect(404);
    })
});

describe('[GET] /api/users/:username/repos', () => {
    it('should return a list with all user repositories', async () => {
        const response = await request(app).get('/api/users/dinizrenato/repos').expect(200);
        expect(response.body.length).toBeGreaterThanOrEqual(0);
    })
    it('should return an error user not found', async () => {
        await request(app).get('/api/users/rdinizrenato/repos').expect(404);
    })

});
