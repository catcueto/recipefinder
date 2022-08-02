const User = require("./User");
const Recipe = require("./newRecipe");

User.hasMany(Recipe, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Recipe.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Recipe };
