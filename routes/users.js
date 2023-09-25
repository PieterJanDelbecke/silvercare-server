const express = require("express");
const router = express.Router();

const { sequelize, User } = require("../models");

router.get("/", (req, res) => {
	console.log("#### GET All Users ####");

	res.json({ message: "GET ALL Users" });
});

router.post("/signup", async (req, res) => {
	const { firstName, lastName, email, password } = req.body;

	try {
		const check = await User.findOne({
			where: {
				email: email,
			},
		});
		if (!check) {
			const user = await User.create({ firstName, lastName, email, password });
			res.json(user);
		} else {
			res.json({ message: "email already in use" });
		}
	} catch (error) {
		console.error(error);
		res.res.status(500).json({ error: "Something went wrong" });
	}
});

router.post("/signin", async (req, res) => {
	console.log("############## SIGN IN ################");
	const { email, password } = req.body;

	console.log("Email", email);
	console.log("Password", password);

	try {
		const user = await User.findOne({
			where: {
				email: email,
			},
		});
		console.log("USER:", user);
		if (user) {
			if (password === user.dataValues.password) {
				res.json({ ...user.dataValues, correct: true });
			} else {
				res.json({ message: "incorrect password" });
			}
		} else {
			res.json({ message: "user doesn't exist" });
		}
	} catch (error) {
		console.error(error);
	}
});

module.exports = router;
