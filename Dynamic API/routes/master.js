/**
 * Created by JuddHome on 4/2/17.
 */


    /*  This is the import modules  */

    //This defines an express router
var router = require('express').Router(),
    //This defines the route for the front end
    entrance = require('./paths/entrance'),
    //this is the redirect for the short URL
    go = require('./paths/go'),
    //this defines a route for interacting with the database and CRUD
    api = require('./paths/api');




router

    .use('/api/v1/url',api)

    .use('/', entrance)

    .use('/go', go)

module.exports = router;