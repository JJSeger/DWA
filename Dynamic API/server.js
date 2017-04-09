/**
 * Created by JuddHome on 4/2/17.
 */

//defines the use case for javascript
'use strict';

/* Modules */


    //this uses express as the main server framework
const express = require('express');
    //this instantiates express into an app varible
const app = express();
    //this uses body parser or logic in the api
const bp = require('body-parser');
    //this cache development credentails
const cred = require('./development');
    //this imports the master router
const routes = require('./routes/master');
    //this imports the debug module
const test = require('./modules/log');




/* Server Config */

//this sets dev envir to true
test.debug(cred.debug)

//tells the app to treat urls as data pipes
app.use(bp.urlencoded({ extended: true }))

//tells app to use body parser as middlewear for JSON
app.use(bp.json());

// this sets the location for public files
app.use(express.static('public'))

// sets the view engine for the applications front end
app.set('view engine', 'html')

// connects to master router
app.use('/', routes)




/* Launching App */


//this is launching the app
console.log('# Url Shortener has started\n---\n###### Application config was successful, preparing to launch application on port ' + cred.port + '\n---\n')

//This tells the app to listen on the set port
exports.server = app.listen(cred.port, ()=>{

        //this console.logs that the server is running correctly
    console.log('###### Application successfully configured and launched on port '+cred.port+'\n---')

});


// This exports the app for use elsewhere
exports = app;