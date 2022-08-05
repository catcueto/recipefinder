const router = require("express").Router();
const { User } = require("../../models");

router.get("/", async (req, res) => {
	let userData = await User.findAll();
	let user = userData.map((user) => user.get({ plain: true }));
	res.json(user);
});

// This route will create a new user
router.post("/", async (req, res) => {
	try {
		const userData = await User.create(req.body);
		console.log(userData);

		req.session.save(() => {
			req.session.user_id = userData.id;
			req.session.username = userData.username;
			req.session.logged_in = true;

			res.status(200).json(userData);
		});
	} catch (err) {
		res.status(400).json(err);
	}
});

// This route creates users login
router.post("/login", async (req, res) => {
	try {
		// Finding the user that matches the posted username
		const userData = await User.findOne({
			where: {
				username: req.body.username,
			},
		});

		if (!userData) {
			res.status(400).json({ message: "Incorrect username or password" });
			return;
		}
		// Verifying that entered password matches password stored in db
		const validPassword = await userData.checkPassword(req.body.password);

<<<<<<< HEAD
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or pasword, please try again." });
      return;
    }
    // Creating session variables
    req.session.save(() => {
      req.session.user_id = userData.id;
      // req.session.username = userData.username;
      req.session.logged_in = true;
      S;
      res.json({ user: userData, message: "You have succesfully logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
=======
		if (!validPassword) {
			res.status(400).json({
				message: "Incorrect username or pasword, please try again.",
			});
			return;
		}
		// Creating session variables
		req.session.save(() => {
			req.session.user_id = userData.id;
			// req.session.username = userData.username;
			req.session.logged_in = true;

			res.json({
				user: userData,
				message: "You have succesfully logged in!",
			});
		});
	} catch (err) {
		res.status(400).json(err);
	}
>>>>>>> 535e8e84d292a50d942d393d0e9a93e848289401
});

// This route will log users out
router.post("/logout", (req, res) => {
	if (req.session.logged_in) {
		// Removing session variables
		req.session.destroy(() => {
			res.status(202).end();
		});
	} else {
		res.status(404).end();
	}
});

module.exports = router;