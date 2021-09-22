const sequelize = require('../config/connection');

// const userSeeds = require('./users-seeds');
const gameSeeds = require('./game-seeds')
const commentSeeds = require('./comment-seeds')
const postSeeds = require('./post-seeds')
const userSeeds = require('./user-seeds')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

//   await userSeeds();
  await userSeeds();

//   await gameSeeds();
  await gameSeeds();

//   await postSeeds();
  await postSeeds();

//   await commentSeeds();
  await commentSeeds();

  process.exit(0);
};

seedDatabase();

module.exports = seedDatabase;
