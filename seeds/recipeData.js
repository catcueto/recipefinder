const { Recipe } = require('../models');

const recipeData = [
  {
    id: '1',
    name: 'Cookies',
    description: 'It has chocolate chips',
    mealtime: 'lunch',
    ingredients: '1 cup water',
    instructions: 'Put the cookies in the oven',
    image: 'AAAAAAAA',
    user_id: 11
  },
  {
    id: '2',
    name: 'Potato Chips',
    description: 'Super crunchy',
    mealtime: 'lunch',
    ingredients: '1 pound potato',
    instructions: 'Baked',
    image: 'AAAAAAAA',
    user_id: 12
  },
  {
    id: '3',
    name: 'Tea',
    description: 'Soothing',
    mealtime: 'dinner',
    ingredients: '1 cup water',
    instructions: 'Let it sit there',
    image: 'AAAAAAAA',
    user_id: 13
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
