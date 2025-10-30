// __tests__/index.test.js
import request from 'supertest';
import { app } from '../src/index.js';

describe('FSL App API', () => {
  it('should return hello message on /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello from FSL DevOps Challenge!');
  });

  it('should return health on /health', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
  });
});
