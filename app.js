const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("GET");
  res.send({ firstName: Bart, lastName: Delbecke });
});

app.post("/", (req, res) => {
  console.log("POST");
  console.log("req.body");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
