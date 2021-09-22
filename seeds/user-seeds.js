const { User } = require('../models');

const sampleUser = [{

        id: 1,


        username: 'mike',
        password: '1234',
        avatar:''
        

    },
    {

        id: 2,
        username: 'joe',
        password: '1234',
        avatar:''
        
    },
    {

        id: 3,
        username: 'ron',
        password: '1234',
        avatar:''
        
    }
];

const userSeeds = () => User.bulkCreate(sampleUser).then().catch((err) => { console.log(err) });

module.exports = userSeeds;
