/**
 * Created by JuddHome on 4/17/17.
 */


// These are required

const pjson = require('./package.json');
const fs = require('fs');

//  added Arguments
const argv = require('yargs').argv;
const version = pjson.version.split('.');
const number = arg.n;