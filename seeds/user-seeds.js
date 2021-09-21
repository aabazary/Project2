const { User } = require('../models');

const sampleUser = [{
        username: 'mike',
        password: '1234',
        avatar:''
        

    },
    {
        username: 'joe',
        password: '1234',
        avatar:''
        
    },
    {
        username: 'ron',
        password: '1234',
        avatar:''
        
    }
];

const userSeeds = () => User.bulkCreate(sampleUser);

module.exports = userSeeds;