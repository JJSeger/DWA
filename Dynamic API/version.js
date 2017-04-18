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


// This evaluates arguments to see if they pass and are correct
if ((argv.v === 'major' || argv.v === 'minor' || argv.v === 'patch') && typeof argv.n === 'number')
{
    if (argv.v === 'major') {
        version[0] = number;
    } else if (argv.v === 'minor') {
        version[1] = number;
    } else if (argv.v === 'patch') {
        version[2] = number;
    }
