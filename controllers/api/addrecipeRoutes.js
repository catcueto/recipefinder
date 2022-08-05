const router = require("express").Router();
const Recipe = require("../../models/Recipe");
const generateUniqueId = require("generate-unique-id");
// router.post("/addrecipe", async (req, res) => {
//   const recipeData = await recipe.create(req.body);
//   return res.json(recipeData);
// });



// This route takes users to the addrecipe page
router.get("/", (req, res) => {
	try {
		// if (req.session.logged_in) {
		//render Addrecipe page
		res.render("addrecipe");
		// } else {
		//   res.redirect("/login");
		// }
	} catch (err) {
		res.status(500).json(err);
	}
});

// POST - lets user to post a new recipe
router.post("/", async (req, res) => {
	try {

		console.log("meow");

		const newRecipe = await Recipe.create({
			// id
			// id: generateUniqueId({
			// 	length: 10
			//   }),
			// id: 10,
			name: req.body.name,
			description: req.body.description,
			ingredients: req.body.ingredients,
			instructions: req.body.instructions,
			mealtime: req.body.mealtime,
			file_name: req.body.file_name,
			user_id: 1,
			time_created: new Date(),
			
		});

		// console.log(recipeData);


		// const recipeData = await Recipe.create({
		// 	// id
		// 	// id: generateUniqueId({
		// 	// 	length: 10
		// 	//   }),
		// 	id: 10,
		// 	name: req.body.dish_name,
		// 	ingredients: req.body.ingredients,
		// 	instructions: req.body.instructions,
		// 	mealtime: req.body.mealtime,
		// 	file_name: req.body.file_name,
		// 	user_id: req.body.user_id,
		// 	time_created: new Date().toDateString(),
			
		// });
		res.status(200).json(newRecipe);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
});

module.exports = router;