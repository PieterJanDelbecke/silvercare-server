const express = require("express");
const router = express.Router();

const { Hobby } = require("../models");

router.get("/", async (req, res) => {
	try {
		const hobbies = await Hobby.findAll();
		console.log("HOBBIES", hobbies);
		res.json(hobbies);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
