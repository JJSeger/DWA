/**
 * Created by JuddHome on 4/2/17.
 */



// this defines the express router
const go = require('express').Router();
// this imports the database connection
const db = require('../../models/url');

// this defines the path for redirect using url id
go.get('/:id', (req, res) => {

    //  this is to search the data base for url with mathching id
    db.find({where: { urlId:req.params.id }, attributes: ['originalUrl'] }).then((data) => {

        // this is a 200 status and redirect
        res.status(200).redirect(data.originalUrl);

        // this console.logs route access
        console.log('###### Redirect route has been accessesed.\n---');

    });

});

// this exports the module
module.exports = go;