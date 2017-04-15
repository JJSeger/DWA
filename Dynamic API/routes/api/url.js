/**
 * Created by JuddHome on 4/15/17.
 */
// This is require URL
var url = require('../../models/url');
var shortUrl = require('../../modules/main_url');

module.exports = (express) => {
    // This is the express router
    var router = express.Router();