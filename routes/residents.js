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
	console.log("####  HOBBIES  #####");
	const { residentId, names } = req.body;

	console.log("residentId: ", residentId);
	console.log("name", names);

	const hobbies = [];
	for (const name of names) {
		hobbies.push({ residentId, name });
	}

	try {
		const result = await Hobby.bulkCreate(hobbies);
		res.json(result);
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

router.get("/residents", async (req, res) => {
	try {
		const residents = await Resident.findAll({
			attributes: ["firstName", ["lastName", "Last Name"]],
			include: [
				{
					model: Hobby,
					attributes: ["residentId", ["name", "game"]],
				},
			],
		});
		res.json(residents);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
