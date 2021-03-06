const router = require('express').Router();
const { User, Comment, Post } = require('../../models');
const withAuth = require('../../utils/auth');



// Post Comment
router.post('/new', withAuth, async (req, res) => {

    console.log('trying to create new post')
    console.log(JSON.stringify(req.body))


    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            game_id: req.body.game_id,
            user_id: (req.session) ? req.session.user_id : 1,
        }).then(newPost)
        console.log(newPost)
        console.log('New Post Created')
        res.render('homepage-post-sections', {
            newPost
        });
        console.log("is this working?")
    } catch (err) {
        res.status(500).json(err);
    }
})


// GET all posts per game
router.get('/:id', withAuth,  async (req, res) => {
    console.log(JSON.stringify(req.params))
    try {


        const postData = await Post.findAll(
            {
                where: {
                    game_id: req.params.id
                },
                include: [
                    {
                        model: Comment,
                        attributes: [
                            'body'
                        ]
                    },
                    {
                        model: User,
                        attributes: [
                            'id',
                            'username',

                        ]
                    }]
            },
        );
        const posts = postData.map((postInfo) =>
            postInfo.get({ plain: true })

        )
        console.log("======================================")
        console.log("======================================")
        console.log(posts)


        res.render('forum-landing-page-main', {
            posts: posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})


// GET all comments per post
router.get('/post/:id', withAuth, async (req, res) => {
    console.log(JSON.stringify(req.params))
    try {

        const postData = await Post.findAll(
            {
                where: {
                    id: req.params.id
                },
                include: [
                    {
                        model: Comment,
                        attributes: [
                            'id',
                            'body'
                        ]
                    },
                    {
                        model: User,
                        attributes: [
                            'id',
                            'username',

                        ]
                    },
                    
                ]
            }
        );
        const posts = postData[0].get({ plain: true })
        console.log("======================================")
        console.log(posts)


        res.render('post-page', {
            posts: posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports = router;