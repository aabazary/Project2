const sequelize = require('../config/connection');

// const userSeeds = require('./users-seeds');
const gameSeeds = require('./game-seeds')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

//   await userSeeds();
  await gameSeeds();


  process.exit(0);
};

seedDatabase();
