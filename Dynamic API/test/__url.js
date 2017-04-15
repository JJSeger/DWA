/**
 * Created by JuddHome on 4/15/17.
 */


const express = require('express');
const expect = require('chai').expect;
const request = require('supertest');
const shortUrl = require('../src/modules/main_url');
const app = express();


describe('URL Routes', () => {
    let server;

    beforeEach(() => {
    server = require('../src/server.js');
    });

    afterEach(() => {
        server.close();
    });

    // This test for multiple urls
    it('GET /api/v1/url returns all', (done) => {
        request(server)
        .get('/api/v1/url')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
            const url = res.body;

            // Save one single url
            this.url = url[0];

            expect(url.length).to.be.above(0);
            })
        .end(done);
    });

    // This test for creating a shortened url
    it('POST returns a generated short URL of 6 characters', (done) => {
        request(server)
            .post('/api/v1/url')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect((req) => {
                const id = shortUrl.shortUrl();
                expect(id).to.have.length('7');
            })
        .end(done);
    });
