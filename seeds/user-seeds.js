const { User } = require('../models');

const sampleUser = [
{
    id: 1,
    username: 'sbeltier',
    password: 'password'
}
]

const userSeeds = () => User.bulkCreate(sampleUser).then().catch((err) => { console.log(err) });

module.exports = userSeeds;