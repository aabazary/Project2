const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const forumRoutes = require('./forum-routes.js');
const commentRoutes = require('./comment-routes.js');

router.use('/users', userRoutes);
router.use('/forum', forumRoutes);
router.use('/comment', commentRoutes);
module.exports = router;