// collecing the packaged group of API endpoints and prefixing them with the path /api

const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// if we request any endpoint doesn't exist, this error message will throw out
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;