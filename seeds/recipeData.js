const { Recipe } = require('../models');

const recipeData = [{

        name: '',
        user_id: '',
        description: ' ',
        mealtime: '',
        ingredients: '',
        instructions: '',
        filename: '',
    },


];

const seedrecipe = () => Recipe.bulkCreate(recipedata);

module.exports = seedrecipe;