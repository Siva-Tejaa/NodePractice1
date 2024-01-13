const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.sendFile("./sample.html", { root: __dirname });
});

router.get("/new", (request, response) => {
  response.send("Hello iam the sub page in file route");
});

module.exports = router;
