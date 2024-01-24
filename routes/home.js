const express = require("express");
const router = express.Router();

// app.use("/", home);
router.get("/", (request, response) => {
  response.send("Hello NodeJS");
});

module.exports = router;
