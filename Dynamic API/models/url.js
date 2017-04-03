/**
 * Created by JuddHome on 4/2/17.
 * This is the URL model
 */



/*  The code below defines the connection to the database
        and to a table to store and access the urls that are created
*/

    //Importing Sequelize
var Sequelize = require('sequelize'),
    //importing environmental variables
    cred = require('../development'),
    //This defines the database connection string
    database = new Sequelize('urlshortener', cred.sqlUser, cred.sqlPassword, { host: cred.sqlLocation }),

    // This defines the model and database
    Url = database.define('urls', {
        //This is for the original URL
        originalUrl: {
            type: Sequelize.STRING,
            required: true

        },
        //This is the redirected url that is generated
        shortUrl: {
            type: Sequelize.STRING,
            required: true
        },

        //The url id is used to search the urls and generate short urls
        urlId: {
            type: Sequelize.STRING,
            required: true

        }
    })


//syncing the database
database.sync()

//expoprting the databse defintion  as a model for interacting
module.exports = Url









