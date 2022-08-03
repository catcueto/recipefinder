const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./user');
class Recipe extends Model {}

Recipe.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,

        },
        mealtime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        instructions: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        filename: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        user_id: DataTypes.INT,
        references: {
            model: "user",
            key: "id",
        },

    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipes',
    });

module.exports = Recipe;