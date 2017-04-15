/**
 * Created by JuddHome on 4/2/17.
 * This is the URL model
 */

// This is require database
var db = require('./db');


// This creates
exports.create = (payload, err, success) => {
    db.url.create(payload).then(success).catch(err);
};



// This is find All
exports.findAll = (err, success) => {
    db.url.findAll().then(success).catch(err);
};
