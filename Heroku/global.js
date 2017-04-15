/**
 * Created by JuddHome on 4/15/17.
 */
// This is a require
var shortUrl = require('../modules/main_url');

module.exports = (express) => {
    var router = express.Router();

    router.get('/status', (req, res) => {
        console.log("connect");
    res.json({
        healthy: true,
    });
});

//get the url
router.post('/api/v1/url/', function ( req, res ) {
    res.json('short url: ' + 'http://www.' + shortUrl.shortUrl() + '.com');
});

return router;

};
