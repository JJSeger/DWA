/**
 * Created by JuddHome on 4/15/17.
 */

// This is required for models/url

var url = require('../models/url');

// This exports express
module.exports = (express) => {
    var router = express.Router();

    // This is a router
    router.get('/', (req, res) => {
        res.json({ main: 'hit' });
});