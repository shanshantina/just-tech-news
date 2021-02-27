// collecing the packaged group of API endpoints and prefixing them with the path /api

const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

// if we request any endpoint doesn't exist, this error message will throw out
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;