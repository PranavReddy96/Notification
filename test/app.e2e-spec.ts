import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init(); // Ensure this initializes correctly
    console.log('App initialized:', app);  // Debugging log
  });

  afterAll(async () => {
    if (app) {
      await app.close(); // Ensure this works after initialization
      console.log('App closed');  // Debugging log
    }
  });

  it('/api/preferences (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/preferences')
      .send({
        userId: 'user1234',
        email: 'user1@example.com',
        preferences: {
          marketing: true,
          newsletter: false,
          updates: true,
          frequency: 'weekly',
          channels: {
            email: true,
            sms: false,
            push: true,
          },
        },
        timezone: 'America/New_York',
      })
      .expect(201);

    console.log('Response:', response.body); // Debugging log for successful response
  });
});
