const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const forumRoutes = require('./forum-routes.js');

router.use('/forum', forumRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;