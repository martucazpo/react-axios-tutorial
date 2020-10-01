const router = require('express').Router();
const myRoutes = require('./myRoutes');

router.use('/', myRoutes);

module.exports = router;