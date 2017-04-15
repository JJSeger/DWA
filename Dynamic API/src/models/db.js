/**
 * Created by JuddHome on 4/15/17.
 */


//  This requires

var Sequelize = require('sequelize');
require('dotenv').config();

//  This connects to the database
var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_SCHEMA,
    port: process.env.DB_PORT,
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
    logging: false,
});


// This creates the tables
var url = sequelize.define('url', {
    create_url: {
        type: Sequelize.STRING,
    },
    main_url: {
        type: Sequelize.STRING,
    },
});

sequelize.sync();
// This exports sequelize

exports.sequelize = sequelize;
exports.url = url;
