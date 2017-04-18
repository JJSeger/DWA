/**
 * Created by JuddHome on 4/17/17.
 */
const colors = require('colors');

exports.debug = (data, type) => {

const time = new Date() + '\n';

// setting my colors to RGB
colors.setTheme({
    error: 'red',
    warn: 'blue',
    success: 'green',
});

if (process.env.DEBUG === 'true') {
    // colours
    if (type == 'warn') {
        // Warnings
        console.warn(colors.warn(data));
        } else if (type == 'error') {
            // Errors
            console.error(colors.error(data));
        } else {
            // Success
            console.log(colors.success(data));
        }
    }
};


exports.verBump = (currVer, bump) => {
    // Major index is verArr [0]
    // Minor index is verArr[1]
    // Patch index is verArr[2]
    const verArr = currVer.split('.');