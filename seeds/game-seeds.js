const { Game } = require('../models');

const sampleGames = [{
        title: 'Smite',
        developer: 'Titan Forge Games',
        publisher: 'Hi-Rez Studios',
        type: 'MOBA (Multiplayer Online Battle Arena)',
        image:'https://i.ytimg.com/vi/xAPsmI_zDZs/maxresdefault.jpg',
        cost: 'Free to Play($29.99 for all Gods)',
        release: 'March 25, 2014',
        url: 'https://www.smitegame.com/',
        //apparently 216 limit on characters, not counting spaces
        description: 'Smite is a Pantheon oriented game that allows the player to choose from over 100 gods/mythological figures, to battle in several game modes: Arena, Assault, Duel, Joust, Siege, Clash and most predominantly Conquest.'
    },
    {
        title: 'League of Legends',
        developer:'Riot Games',
        publisher: 'Riot Games',
        type: 'MOBA (Multiplayer Online Battle Arena)',
        image:'https://cdn1.dotesports.com/wp-content/uploads/2019/09/12195522/league-of-legends.jpg',
        cost: 'Free to Play(Champions may be purchased)',
        release:'October 27, 2009',
        url: 'https://www.leagueoflegends.com/en-us/',
        description: 'League of Legos'
    },
    {
        title: 'Diablo 2 Resurrected',
        developer:'	Blizzard Entertainment',
        publisher: '	Blizzard Entertainment',
        type: 'ARPG (Action Role-Playing Game)',
        image:'https://cdn.slashgear.com/wp-content/uploads/2021/08/Diablo-2-Resurrected-open-beta-now-live-How-to-join-on-Xbox-PlayStation-PC-1280x720.jpg',
        cost: '39.99',
        release:'September 23, 2021',
        url: 'https://us.shop.battle.net/en-us/product/diablo_ii_resurrected?p=168305',
        description: 'Diabloic'
        
    }
];

const gameSeeds = () => Game.bulkCreate(sampleGames);

module.exports = gameSeeds;