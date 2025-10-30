import request from 'supertest';
import { app } from '../src/index';

describe('FSL App API', () => {
  it('should return hello message on /', async () => {
    const res = await request(app).get('/').expect(200);
    expect(res.body.message).toBe('Hello from FSL DevOps Challenge!');
  });

  it('should return health on /health', async () => {
    const res = await request(app).get('/health').expect(200);
    expect(res.body.status).toBe('OK');
  });
});
