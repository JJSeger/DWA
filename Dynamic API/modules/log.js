/**
 * Created by JuddHome on 4/6/17.
 */



//This file takes care of the logging and creating of log files while in debug mode

const fs = require('fs');

//this caches log object for later exporting
const log = {};


//this configures the logging object
log.debug = debugState)=> {

    //this checks the process variable
    if(debugState){

        console.log = function myLog(message){

            fs.appendFile('./logs/logs.md', message, (err)=>{
                // this checkes for errors
                if (err) throw err;

            });

        };

    }

};


//this exports the module
module.exports = log;