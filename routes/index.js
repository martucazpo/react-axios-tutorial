const router = require('express').Router();
const myRoutes = require('./myRoutes');
const addDataRoute = require('./addDataRoute');

router.use('/', myRoutes);
router.use('/addData', addDataRoute);

module.exports = router;