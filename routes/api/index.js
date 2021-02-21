// collect all of the API routes and package and prefixing them with the path /users

const router = require('express').Router();
const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

module.exports = router;