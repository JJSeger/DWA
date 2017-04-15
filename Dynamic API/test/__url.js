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