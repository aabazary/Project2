const router = require('express').Router();
const {
  User,
  Post,
  Comment,
  Game

} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    const gameData = await Game.findAll({
      attributes: [
        'id',
        'title',
        'type',
        'image'
      ],
      
    });

    const games = gameData.map((project) => project.get({
      plain: true
    }));

    res.render('homepage', {
      games
    })
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  res.render('login');
});

router.get('/signup', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  res.render('signup');
});


module.exports = router;