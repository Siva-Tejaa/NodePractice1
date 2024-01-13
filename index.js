const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello NodeJS");
});

app.get("/date", (request, response) => {
  const date = new Date();
  response.send(`Todays date is ${date}`);
});

app.get("/file", (request, response) => {
  response.sendFile("./sample.html", { root: __dirname });
});

app.get("*", (request, response) => {
  response.status(404).send("No Page Found");
});

const port = 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
