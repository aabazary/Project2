const router = require('express').Router();
const { User, Comment, Post } = require('../../models');

// Create new Comment
router.post('/', async (req, res) => {
    console.log('trying to create new comment')
    console.log(JSON.stringify(req.body))


    // try {
        const newComment = await Comment.create({
            body: req.body.body,
            post_id: req.body.id,
            user_id: req.session.user_id,
        }).then( (newComment) => {
        console.log(newComment)
        console.log('Comment Created')
        res.render('post-comment-section', {
            newComment
        });
        console.log("is this working?")
    }).catch ( (err) => {
        res.status(500).json(err);
    })
})

// Delete comment
router.delete('/delete', async (req, res) => {
    console.log('comment is deleted')
    // try {
    const deletedComment = await Comment.destroy({
        where: {
            id: req.body.id
        }
    }).then((deletedComment) => {
        console.log('Deleted the comment ' + deletedComment)
    }).catch((err) => {
        res.status(500).json(err)
    });
})


module.exports = router;