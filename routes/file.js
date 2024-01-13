const express = require("express");
const router = express.Router();

router.use("/", (request, response) => {
  response.sendFile("./sample.html", { root: __dirname });
});

module.exports = router;
