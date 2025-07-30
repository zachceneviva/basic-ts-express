import request from 'supertest';
import app from '@src/app';

describe('GET /', () => {
  it('returns a message with hello world', async () => {
    const res = await request(app).get('/api');

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello World!');
  });
});
