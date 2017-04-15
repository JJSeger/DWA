/**
 * Created by JuddHome on 4/15/17.
 */
// This is require URL
const url = require('../../models/url');
const shortUrl = require('../../modules/main_url');
const debug = require('nx-debugtool');

module.exports = (express) => {
    // This is the express router
    const router = express.Router();

    // This creates
    router.post('/url', (req, res) => {
        req.body.shortened_url = shortUrl.shortUrl();
        url.create(req.body, (err) => {
            res.status(500).json(err);
            debug.debug('The Debugging process has been activated!' + err, 'Error!' );
        }, (data) => {
            res.status(200).json(data);
            debug.debug('Yay! The shortened URL has been successfully created.' , 'yup, this was successful');
        });
    });

// This GETs All
    router.get('/url', (req, res) => {
        url.findAll((err) => {
            res.status(500).json(err);
            debug.debug('I am sincerely sorry. None of the URLs were successfully read because of the following errors: ' + err, 'Error! ');
        }, (data) => {
            res.status(200).json(data);
            debug.debug('Congrats. ALL The URLs were successfully read.');
        })
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
