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


// this is the short host  used for checking test
const shortHost = 'localhost:' + cred.port;



    // this is the main test wrapper
    describe('Master Application Tests', () => {
        // this test all custom modules
        describe('Custom Module Tests', () => {

            it('Modules Exists', () => {

                // this checks for  existance of each module
                expect(supertest).to.exist;
                expect(generator).to.exist;
                expect(cred).to.exist;
                expect(host).to.exist;

            });



            //  this test the url code gen
            describe('Url ID generator', () => {


                it('Should generate random 4 char ID code', () => {

                         // test is gen ID is a 4 char string
                    expect(generator.code).to.have.lengthOf(4);
                    expect(testString).to.have.lengthOf(4);

                });