const express = require("express");
const router = express.Router();

router.use("/", (req, res) => {
  res.status(404).send("No Page Found");
});

module.exports = router;
