const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2],
        },
    },
    developer: {
        type: DataTypes.STRING,
    },
    publisher: {
        type: DataTypes.STRING,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(1234),
        allowNull: false
    },
    cost: {
        type: DataTypes.STRING,
    },
    release: {
        type: DataTypes.STRING,
    },
    url: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    },
     {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'game',
});

module.exports = Game;
