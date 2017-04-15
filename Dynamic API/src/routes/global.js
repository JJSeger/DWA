/**
 * Created by JuddHome on 4/15/17.
 */

// This is required for models/url

const url = require('../models/url');

// This requires modules/debug
const debug = require('nx-debugtool');


// This exports express
module.exports = (express) => {
    const router = express.Router();

    // This is a router
    router.get('/', (req, res) => {
        res.json({ main: 'hit' });
        debug.debug("The main route responded with success.");
    });


//this is for the shortUrl
    router.get('/go/:shortenedUrl', (req, res) => {
        const request = req;
        const response = res;
        request.body.shortenedUrl = request.params.shortenedUrl;
        url.findShortURL(request.body, (err) => {
            response.status(500).json(err);
        }, (data) => {
            // This redirects to the original url
            response.redirect(data.first_url);
        });
    });

    router.use('/api/v1', require('./api/url')(express));

// This returns the express router

    return router;
};
