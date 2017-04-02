/**
 * Created by JuddHome on 4/2/17.
 * This is the URL model
 */



/*  The code below defines the connection to the database
and to a table to store and access the urls that are created
*/

var Sequelize = require('sequelize'),

    cred = require('../development'),

    database = new Sequelize('urlshortener', cred.sqlUser, cred.sqlPassword, { host: cred.sqlLocation }),
