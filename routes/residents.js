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
	const { residentId, name } = req.body;

	console.log("residentId: ", residentId);
	console.log("name", name);

	try {
		const hobby = await Hobby.create({ residentId, name });
		res.json(hobby);
	} catch (error) {
		console.log(error);
	}
});

router.get("/resident", async (req, res) => {
	try {
		const resident = await Resident.findOne({
			where: {
				firstName: "Alice",
			},
			include: [
				{
					model: Hobby,
				},
			],
		});
		res.json(resident);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
