const express = require("express");
const router = express.Router();

const { sequelize, User } = require("../models");

router.get("/", (req, res) => {
	console.log("#### GET All Users ####");

	res.json({ message: "GET ALL Users" });
});

router.post("/signup", async (req, res) => {
	console.log("#### POST New User SignUp #######");

	const { firstName, lastName } = req.body;

	console.log("firstName", firstName);
	console.log("lastName", lastName);

	try {
		const user = await User.create({ firstName, lastName });
		res.json(user);
	} catch (error) {
		console.error(error);
		res.res.status(500).json({ error: "Something went wrong" });
	}
});

module.exports = router;
