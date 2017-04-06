/**
 * Created by JuddHome on 4/6/17.
 */



//This file takes care of the logging and creating of log files while in debug mode


var fs = require('fs'),
    path = require('path'),
    log = {}

log.debug = debugState)=> {

    if(debugState){

        console.log = function(message){

            fs.appendFile('./logs/logs.md', message, (err)=>{
                //
                if (err) throw err;

            })

        }

    }

}

module.exports = log