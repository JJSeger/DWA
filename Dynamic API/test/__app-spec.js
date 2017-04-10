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
describe('Master Application Tests', () = > {
    // this test all custom modules
    describe('Custom Module Tests', () = > {

        it('Modules Exists', () = > {

            // this checks for  existance of each module
            expect(supertest).to.exist;
            expect(generator).to.exist;
            expect(cred).to.exist;
            expect(host).to.exist;

            });


            //  this test the url code gen
            describe('Url ID generator', () = > {


                it('Should generate random 4 char ID code', () = > {

                    // test is gen ID is a 4 char string
                    expect(generator.code).to.have.lengthOf(4);
                    expect(testString).to.have.lengthOf(4);

                });

                it('Short URL Should contain the app location/host', () = > {

                    // this checks for a short url
                    expect(generator.short).to.contain(host);

                });

                it('Short URL should contain URL ID', () = > {

                    // this checks if gen returns url ID
                    expect(generator.short).to.contain(generator.code);

                });

                it('Should match short url generation fomula explicitly', () = > {

                    // this checks if gen short url is config'd properly
                    expect(generator.short)
                        .to
                        .equal(host + generator.code);

                });

            });


            // this tests the logging module
            describe('Logging Module', () = > {

                it('Should return return true', () = > {

                    expect(log.test(cred.debug)).to.be.true;

                });
            });
        });

        describe('Application Route Tests', () = > {

            describe('Main access Route', () = > {

                it('Should return a rendered html page', () = > {

                    supertest(server)
                        .get(host)
                        .expect(200)
                        .end((err, res) = > {
                        if(err) throw err;
                    });

                });

            });

            describe('Redirect functionality', () = > {

                it('Should redirect request', () = > {

                    supertest(server)
                        .get(host + 'go/test')
                        .expect(200)
                        .end((err, res) = > {
                        if(err) throw err;
                });

            });

        });

        describe('CRUD API Routes', () = > {

            it('Should return list of urls', () = > {

                supertest(server)
                    .get(host + api)
                    .expect(200)
                    .expect('Content-Type', /json/)
                    .end((err, res) = > {
                    if(err) throw err;
                });

            });

            it('Should return one url', () = > {

                supertest(server)
                    .get(host + api + 'test')
                    .expect(200)
                    .expect('Content-Type', /json/)
                    .end((err, res) = > {
                    if(err) throw err;
                });

            });

            it('Should update a url', () = > {

                supertest(server)
                    .post(host + api + 'test')
                    .field('url', 'https://facebook.com')
                    .expect(200)
                    .expect('Content-Type', /json/)
                    .end((err, res) = > {
                    if(err) throw err;
                });

            });

            it('Should Create instance of URL', () = > {

                supertest(server)
                    .post(host + api)
                    .field('url', 'https://google.com')
                    .expect(200)
                    .expect('Content-Type', /json/)
                    .end((err, res) = > {
                    if(err) throw err;
                });


            });

            it('Should Drop URL', () = > {

                supertest(server)
                    .delete(host + api + 'drop')
                    .expect(200)
                    .expect('Content-Type', /json/)
                    .end((err, res) = > {
                    if(err) throw err;
                });


            });

        });


    });

});