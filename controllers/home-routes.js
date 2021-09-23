const router = require('express').Router();
const {
  User,
  Post,
  Comment,
  Game

} = require('../models');
const withAuth = require('../utils/auth');

//route for the forum page
router.get('/forum',withAuth, async (req, res) => {
  try {
    const gameData = await Game.findAll({
      attributes: ['id',
      'title',
      'developer',
      'publisher',
      'type',
      'image',
      'cost',
      'release',
      'url',
      'description'
      ],
      
    });

    const games = gameData.map((project) => project.get({
      plain: true
    }));
    
    res.render('forum', {
    
      games, 
      loggedIn: req.session.loggedIn
    })
  } catch (err) {
    res.status(500).json(err);
  }
})

//route for home page
router.get('/', async (req, res) => {
  try {
    const gameData = await Game.findAll({
      attributes: ['id',
      'title',
      'developer',
      'publisher',
      'type',
      'image',
      'cost',
      'release',
      'url',
      'description'
      ],
      
    });

    const games = gameData.map((project) => project.get({
      plain: true
    }));
    
    res.render('homepage', {
    
      games, 
      loggedIn: req.session.loggedIn
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

//route for individual game
router.get('/games/:id', async (req, res) => {
  try {
    const gameData = await Game.findByPk(req.params.id, {
      attributes: ['id',
      'title',
      'developer',
      'publisher',
      'type',
      'image',
      'cost',
      'release',
      'url',
      'description'
      ],

    });

    const games = gameData.get({
      plain: true
    });

    res.render('games', {
      games, loggedIn: req.session.loggedIn
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

//attempting to import users, include is giving errors
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: [
        'id',
        'username',
        'avatar'
      ], 
      
    });

    const users = userData.map((project) => project.get({
      plain: true
    }));
    
    res.render('homepage', {
      games: games,
      users: users, 
      loggedIn: req.session.loggedIn
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

//login page route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

//signup page route
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});


module.exports = router;
