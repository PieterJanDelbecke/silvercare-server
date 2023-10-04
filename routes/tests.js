const express = require("express");
const router = express.Router();

const { Test } = require("../models");

router.post("/", async (req, res) => {
	try {
		const hobby = await Test.create({
			name: "Pieter-Jan",
			age: 42,
		});
		console.log("HOBBIES", hobby);
		res.json(hobby);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
