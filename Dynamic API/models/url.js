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


// This finds the created URL
exports.findShortURL = (data, error, success) => {
    // This finds url based on the shortened url
    db.url.find({
        where: {
            short_url: data.shortenedUrl,
        },
    })
        .then(success)
        .catch(error);
};

// This finds a single URL
exports.find = (payload, err, success) => {
    db.url.find({
        where: {
            id: payload.id,
        },
    }).then(success).catch(err);
};
