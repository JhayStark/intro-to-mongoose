const express = require("express");
const userRouter = require("./routes/users.routes");
const { dbConnect } = require("./config/dbConnect");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.use("/users", userRouter);

async function start() {
  await dbConnect();
}

app.listen(4000, () => {
  console.log("Server is running on port 4000 ");
});

start();
