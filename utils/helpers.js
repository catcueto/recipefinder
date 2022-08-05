module.exports = {
	loop: (array, options) => {
		for (i = 0; i < array.length; i++) {
			options.fn(this);
		}
		// return latestRecipe;
	},
};