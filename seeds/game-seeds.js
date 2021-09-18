const { Game } = require('../models');

const sampleGames = [{
        title: 'Smite',
        type: 'MOBA',
        image:'https://i.ytimg.com/vi/xAPsmI_zDZs/maxresdefault.jpg'
        

    },
    {
        title: 'League of Legends',
        type: 'MOBA',
        image:'https://cdn1.dotesports.com/wp-content/uploads/2019/09/12195522/league-of-legends.jpg'
        
    },
    {
        title: 'Diablo 3',
        type: 'ARPG',
        image:'https://cdn.slashgear.com/wp-content/uploads/2021/08/Diablo-2-Resurrected-open-beta-now-live-How-to-join-on-Xbox-PlayStation-PC-1280x720.jpg'
        
    }
];

const gameSeeds = () => Game.bulkCreate(sampleGames);

module.exports = gameSeeds;