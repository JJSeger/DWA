/**
 * Created by JuddHome on 4/2/17.
 */

//this defines the express router

var api = require('express').Router(),
    //this imports the database connection
    db = require('../../models/url'),
    //this imports id and short url gen
    gen = require('../../modules/generator');

