/**
 * Created by JuddHome on 4/9/17.
 */




// this imports chai for assertion language
const expect = require('chai').expect;


// this is the module that handles random number gen
const generator = require('../modules/generator')();

// this imports my srver
const server = require('express')();


//  thuis is the development state module
const log = require('../modules/log');

// this uses super user testing for testing routes
const supertest = require('supertest');

//this is the http host for the beginning of the api urls
const cred = require('../development');

// this is the dec credeentials
const host = 'http://localhost:' + cred.port + '/';

// this is the api address
const api = 'api/v1/url/';