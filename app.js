const express = require("express");
const morgan = require("morgan");
const {
  blockedMiddleware,
  pageLogged,
  logged,
} = require("./middleware/blockedMiddleware");

const app = express();

const middleware = [pageLogged, logged];

app.use(morgan("dev"), middleware);

app.get("/", (req, res) => {
  res.send("<h1> Home </h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1> About </h1>");
});

app.get("/help", (req, res) => {
  res.send("<h1> Help </h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1> Contact </h1>");
});

app.get("/blog", blockedMiddleware, (req, res) => {
  res.send("<h1> Block </h1>");
});

app.get("*", (req, res) => {
  res.send("<h1> 404 Not Found </h1>");
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
