const express = require("express");
const router = express.Router();

const { sequelize, User } = require("../models");

router.get("/", (req, res) => {
  res.send("GET user");
});

router.post("/new", async (req, res) => {
  res.send("##### POST User #####");
  console.log(req.body);
  const { firstName, lastName } = req.body;

  try {
    const user = await User.create({ firstName, lastName });
    console.log("USER", user);
    res.end();
    // res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
