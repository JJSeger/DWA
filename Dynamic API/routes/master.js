/**
 * Created by JuddHome on 4/2/17.
 */


    /*  This is to import modules  */

    //This defines an express router
var router = require('express').Router(),
    //This defines the route for the front end
    entrance = require('./paths/entrance'),
    //this is the redirect for the short URL
    go = require('./paths/go'),
    //this defines a route for interacting with the database and CRUD
    api = require('./paths/api');



//connecting modules to routes
router
    //This connects api routes
    .use('/api/v1/url',api)
    //this connects the front page
    .use('/', entrance)
    //this connects the redirect route
    .use('/go', go)

//This exports router for use in server
module.exports = router;





