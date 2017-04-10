/**
 * Created by JuddHome on 4/9/17.
 */

// this uses the file sytem module for creating files
const fs = require('fs');

// this is the cache log object for exporting later
const log = {};

// this configs the logging object
log.debug = (debugState) => {
    //this checks the process variable
    if (debugState) {
        //this consol.logs myLog function
        console.log = function myLog(message) {
            // this uses the file system module to create and or add a log file
            fs.appendFile('./logs/logs.md', message, (err) => {
                //this checks for errors
                if (err) throw err;
        });
    };
}
};

// this is the function for unit testing
log.test = (debugState) => {

    // this checks for the debug state
    if (debugState) {

        return true;

    } else {

        return false;

    };

};

// this exports the module
module.exports = log;
