const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const forumRoutes = require('./api/forum-routes.js');
const gameRoutes = require('./game-routes.js');

router.use('/games', gameRoutes);
router.use('/forum', forumRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;
