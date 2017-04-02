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


    Url = database.define('urls', {

        
    }













