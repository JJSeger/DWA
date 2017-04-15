/**
 * Created by JuddHome on 4/15/17.
 */
const fs = require('fs');

exports.debug = (data, status, date)=>{
    // This is the constiable for timestamp
    const time = new Date() + '\n';