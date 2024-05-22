const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const home = require("./route/home");
const ejs = require("ejs");

app.set("views", path.join(__dirname, "app1"));
app.set("view engine", "ejs");

app.use("/", home);
app.listen(3000, "127.0.0.1", () => {
  console.log("server running now");
});
