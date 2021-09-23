const router = require('express').Router();
const {
  User,
  Post,
  Comment,
  Game

} = require('../models');
const withAuth = require('../utils/auth');

router.get('/forum', async (req, res) => {
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


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});


module.exports = router;
