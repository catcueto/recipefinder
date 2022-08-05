const router = require("express").Router();
const Recipe = require("../../models/Recipe");


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
		const newRecipe = await Recipe.create({
			name: req.body.name,
			description: req.body.description,
			ingredients: req.body.ingredients,
			instructions: req.body.instructions,
			mealtime: req.body.mealtime,
			file_name: req.body.file_name,
			user_id: 1,
			time_created: new Date(),
			
		});

		res.status(200).json(newRecipe);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
});

module.exports = router;