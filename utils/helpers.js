module.exports = {
	// loop: (start, end) => {
	// 	// Loops the latest 3 recipes
	// 	var latestRecipe = [];
	// 	for (i = start; i < end; i++) {
	// 		var data = recipeData.length - i;
	// 		latestRecipe.push(data);
	// 	}
	// 	return latestRecipe;
	// },
    ifEquals: (string1, string2, options) => {
        if (string1 == string2) {
            console.log("this", this);
            console.log("options",options);
            return options.fn(this); 
        }
    }
};
