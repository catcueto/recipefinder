const sequelize = require('../config/connection');
const seedRecipes = require('./recipeData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedRecipes();

  process.exit(0);
};

seedAll();
