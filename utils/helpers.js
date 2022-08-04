module.exports = {
	loop: (array, options) => {
		for (i = 0; i < array.length; i++) {
			options.fn(this);
		}
		// return latestRecipe;
	},
};

//     ifEquals: (string1, string2, options) => {
//         if (string1 == string2) {
//             console.log("this", this);
//             console.log("options",options);
//             return options.fn(this); 
//         }
//     }