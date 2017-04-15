/**
 * Created by JuddHome on 4/15/17.
 */
// This is require URL
var url = require('../../models/url');
var shortUrl = require('../../modules/main_url');

module.exports = (express) => {
    // This is the express router
    var router = express.Router();

    // This creates
    router.post('/url', (req, res) => {
        req.body.shortened_url = shortUrl.shortUrl();
    url.create(req.body, (err) => {
        res.status(500).json(err);
}, (data) => {
    res.status(200).json(data);
});
});

// This GETs All
router.get('/url', (req, res) => {
    url.findAll((err) => {
    res.status(500).json(err);
}, (data) => {
    res.status(200).json(data);
});
});

// This GETs by ID
router.get('/url/:id', (req, res) => {
    req.body.id = req.params.id;
url.find(req.body, (err) => {
    res.status(500).json(err);
}, (data) => {
    res.status(200).json(data);
});
});

// This updates
router.get('/url/:id', (req, res) => {
    req.body.id = req.params.id;
url.update(req.body, (err) => {
    res.status(500).json(err);
}, (data) => {
    res.status(200).json(data);
});
});

// This deletes
router.delete('/url/:id', (req, res) => {
    req.body.id = req.params.id;
url.destroy(req.body, (err) => {
    res.status(500).json(err);
}, (data) => {
    res.status(200).json(data);
});
});

// This returns
return router;
};
