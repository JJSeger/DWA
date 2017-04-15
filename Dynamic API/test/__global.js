/**
 * Created by JuddHome on 4/15/17.
 */
const request = require('supertest');

// This is for Unit Test

describe('API Routes', () => {
    let server;

beforeEach(() => {
    server = require('../src/server.js');
});

afterEach(() => {
    server.close();
});

it('/ should return specified JSON object', (done) => {
    request(server)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, { main: 'Boom!' }, done);
});

it('/status should return specified JSON object', (done) => {
    request(server)
        .get('/status')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, { healthy: true }, done);
});