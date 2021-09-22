const router = require('express').Router();
const {
    User,
    Post,
    Comment,
    Game

} = require('../models');


// router.get('/', (req, res) => {
//     Game.findAll({
//             attributes: ['id',
//                 'title',
//                 'type',
//                 'image'
//             ],
//         })
//         .then(gameData => res.json(gameData.reverse()))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });


router.get('/games/:id', (req, res) => {
    Game.findOne({
            where: {
                id: req.params.id
            },
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
        })
        .then(gameData => res.json(gameData))
       
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});




module.exports = router;