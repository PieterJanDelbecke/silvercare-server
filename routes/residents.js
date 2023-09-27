const express = require("express");
const router = express.Router();

const { Resident } = require("../models");

router.post("/new", async (req, res) => {
	console.log("REQ: ", req.body);
	const { firstName, lastName } = req.body;
	try {
		const resident = await Resident.create({ firstName, lastName });
		res.json(resident);
	} catch (error) {
		console.error(error);
	}
});

module.exports = router;
