const User = require("./user");
const Recipe = require("./recipe");

User.hasMany(Recipe, {
	foreignKey: "user_id",
	onDelete: "CASCADE",
});

Recipe.belongsTo(User, {
	foreignKey: "user_id",
	onDelete: "CASCADE",
});

module.exports = { User, Recipe };
