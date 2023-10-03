const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const userRouter = require("./routes/users");
const residentRouter = require("./routes/residents");
const hobbyRouter = require("./routes/hobbies");

app.use("/users", userRouter);
app.use("/resident", residentRouter);
app.use("/hobby", hobbyRouter);

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});
