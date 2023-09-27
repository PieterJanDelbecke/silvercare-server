const express = require("express");
const router = express.Router();

const { Resident, Hobby } = require("../models");

router.post("/new", async (req, res) => {
	const { firstName, lastName } = req.body;
	try {
		const resident = await Resident.create({ firstName, lastName });
		res.json(resident);
	} catch (error) {
		console.error(error);
	}
});

router.post("/hobbies", async (req, res) => {
	const { userId, name } = req.body;

	console.log("userId: ", userId);
	console.log("name", name);

	try {
		const hobby = await Hobby.create({ userId, name });
		res.json(hobby);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
