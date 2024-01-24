/**
 * @swagger
 * /api/route:
 *   get:
 *     description: Get data from the server
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful operation
 *         schema:
 *           $ref: '#/definitions/ResponseModel'
 */

const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

router.use(express.json());

router.get("/", (req, res) => {
  try {
    const filePath = path.resolve(__dirname, "./DB.json");
    const data = fs.readFileSync(filePath, "utf-8");
    res.status(200).send(JSON.parse(data));
  } catch (error) {
    console.error("Error reading the file:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", (req, res) => {
  const filePath = path.resolve(__dirname, "./DB.json");
  let data = fs.readFileSync(filePath, "utf-8");
  data = JSON.parse(data);
  let max = 0;
  data.forEach((obj) => {
    if (obj.id > max) {
      max = obj.id;
    }
  });
  let body = req.body;
  body.id = max + 1;
  data.push(body);
  fs.writeFileSync(filePath, JSON.stringify(data));
  res.end();
});

module.exports = router;
