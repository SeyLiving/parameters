const express = require("express");
const postRouter = require("./routes/posts.route");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("My first Post");
});

app.get("/", (req, res) => {
  res.status(200).send("Welcome to my Server");
});

app.use("/posts", postRouter);

app.listen(4005, (err) => {
  console.log("🌍 Server listening on http://localhost 4005");
});
