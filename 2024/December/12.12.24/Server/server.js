const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

const userRouter = require("./routes/users");
const jokeRouter = require("./routes/jokes.js");
app.use("/users", userRouter);
app.use("/jokes", jokeRouter);

app.listen(3000, () => {
  console.log("Server is running");
});
