const express = require("express");
const router = express.Router();

// app.use("/date", date);
router.get("/", (request, response) => {
  const date = new Date();
  response.send(`Todays date is ${date}`);
});

module.exports = router;
