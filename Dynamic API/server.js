/**
 * Created by JuddHome on 4/2/17.
 */

//defines the use case for javascript
'use strict';

/* Modules */


var
    express = require('express'),

    app = express(),

    bp = require('body-parser'),

    cred = require('./development'),

    routes = require('./routes/master')


/* Server Config */

// test.debug(DEBUG);

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



//This tells the app to listen on the set port
exports.server = app.listen(cred.port, ()=>{

        //this console.logs that the server is running correctly
    console.log('Server has started and is running.')

});


// This exports the app for use elsewhere
exports = app