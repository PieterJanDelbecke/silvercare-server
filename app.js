const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
