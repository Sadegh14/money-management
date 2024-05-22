const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());
router
  .get("/", (req, res) => {
    if (req.cookies.username) {
      let username = req.cookies.username;
      let money = req.cookies.money;
      let select = req.cookies.select;
      res.render(path.join(__dirname, "homePG.ejs"), {
        username,
        money,
        select,
      });
    } else {
      res.sendFile(path.join(__dirname, "submit.html"));
    }
  })
  .post("/", (req, res) => {
    let username = req.body.username;
    let money = req.body.money;
    let select = req.body.select;
    res.cookie("username", username, { httpOnly: true });
    res.cookie("money", money, { httpOnly: true });
    res.cookie("select", select, { httpOnly: true });
    res.render(path.join(__dirname, "homePG.ejs"), { username, money, select });
  });

module.exports = router;
