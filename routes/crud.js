const express = require("express");
const router = express.Router();

const fs = require("fs");

router.get("/", (req, res) => {
  try {
    let dbData = fs.readFileSync(__dirname + "/crudDB.json", "utf-8");
    res.send(JSON.parse(dbData));
  } catch (err) {
    console.error("Error reading file:", err);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/post", (req, res) => {
  try {
    let dbData = fs.readFileSync(__dirname + "/crudDB.json", "utf-8");
    let updatedData = JSON.parse(dbData);
    updatedData.push(req.body);
    console.log(updatedData);
    fs.writeFileSync(__dirname + "/crudDB.json", JSON.stringify(updatedData));
    res.send("Iam from Post Page");
  } catch (err) {
    console.error("Error reading file:", err);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/put/:id", (req, res) => {
  try {
    let paramId = req.params.id;
    let putData = req.body;
    putData.id = paramId;

    //Reading the JSON File
    let dbData = fs.readFileSync(__dirname + "/crudDB.json", "utf-8");

    dbData = JSON.parse(dbData);
    dbData.forEach((obj, index) => {
      if (obj.id === paramId) {
        dbData[index] = putData;
      }
    });

    //Updating the JSON File
    fs.writeFileSync(__dirname + "/crudDB.json", JSON.stringify(dbData));
    res.status(200).send({ message: "Record Updated Successfully" });
  } catch (err) {
    console.error("Error reading file:", err);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/delete/:id", (req, res) => {
  let paramId = req.params.id;

  //Reading the JSON File
  let dbData = fs.readFileSync(__dirname + "/crudDB.json", "utf-8");
  dbData = JSON.parse(dbData);

  dbData.forEach((obj, index) => {
    if (obj.id === paramId) {
      dbData.splice(index, 1);
    }
  });

  //Updating the File JSON File
  fs.writeFileSync(__dirname + "/crudDB.json", JSON.stringify(dbData));
  res.send("Record is Deleted Successfully");
});

router.get("/get/:id", (req, res) => {
  let paramId = req.params.id;
  let dbData = fs.readFileSync(__dirname + "/crudDB.json", "utf-8");
  dbData = JSON.parse(dbData);
  let finalData;
  dbData.forEach((obj, index) => {
    if (obj.id === parseInt(paramId)) {
      finalData = obj;
    }
  });
  if (finalData) {
    res.json(finalData);
  } else {
    res.status(404).send("Item not found");
  }
});

module.exports = router;
