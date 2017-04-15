/**
 * Created by JuddHome on 4/15/17.
 */
const fs = require('fs');

exports.debug = (data, status, date)=>{
    // This is the constiable for timestamp
    const time = new Date() + '\n';

    // these are colour constiables (RGB)
    const red = '\x1B[31m';
    const green = '\x1b[32m';
    const blue = '\x1b[34m';