const { Comment } = require('../models');

const sampleComments = [
    {
        id: 1,
        body: 'One thing people are not mentioning is you either need to bait out his 3, or (depending on the state of the game) have full health and make sure you beads the 3. If you do not do these or are unable to kill him out right it turns into a circus of chasing him around his turret. that most likely leads to your death',
        post_id: 1,
    },
    {
        id: 2,
        body: 'This^',
        post_id: 1,
    },
    {
        id: 3,
        body: 'Dive him, his only mobility is the very small movement he gets on his 1.',
        post_id: 1,
    },
        {
        id: 4,
        body: 'Spoopy',
        post_id: 2,
    },
    {
        id: 5,
        body: 'Booty hunter',
        post_id: 2
    },
    {
        id: 6,
        body: 'Cat lover',
        post_id: 2
    },
    {
        id: 7,
        body: 'I run a discord where we teach players the conquest game mode, we have Mentors that are Masters level that can give you solid advice and do 1 on 1 sessions or training if needed. Anyone is welcome to join. I can dm you the link',
        post_id: 3
    },
    {
        id: 8,
        body: 'Play > Co-Op > Conquest. There is nothing wrong with playing against bots to learn. There is also Jungle Practice so you can practice other builds and gods.',
        post_id: 3
    },
    {
        id: 9,
        body: 'Been playing a week and in the same boat. I recommend watching dole specific videos and figuring out where your supposed to be at various points in a game. Also helpful is looking up God Builds and putting them (and alternative item options) into the god builder. Makes buying super easy and quick',
        post_id: 3
    },
]


const commentSeeds = () => Comment.bulkCreate(sampleComments);

module.exports = commentSeeds;