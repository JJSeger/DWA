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