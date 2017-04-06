/**
 * Created by JuddHome on 4/2/17.
 */


// this defines the express router
var entrance = require('express').Router(),
// this it the import path module for absolute paths
    path = require('path');

// This defines path on the initial app route
entrance.get('/', (req, res) => {

    //sends back response
    res
        // this defines the response
        .status(200)
        // sending the index file
        .sendFile(path.join(__dirname + '/../../../public/index.html'))
        .then((err)=>{
        // this console.log the entrace path
        console.log('###### Entrance Path has been accessed and successfully executed\n---') })


});

// this exports path as module
module.exports = entrance;