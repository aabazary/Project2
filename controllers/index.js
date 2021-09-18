const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const forumRoutes = require('./home-routes.js');

router.use('/forum', apiRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;