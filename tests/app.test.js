const request = require('supertest');
const express = require('express');
const indexRouter = require('../routes/index');

const app = express();
app.use('/', indexRouter);

describe('GET /', () => {
  it('should return greeting', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from JS Web App!');
  });
});
