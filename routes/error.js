const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(404).send("No Page Found");
});

module.exports = router;
