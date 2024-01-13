const express = require("express");
const app = express();

const home = require("./routes/home");
const date = require("./routes/date");
const file = require("./routes/file");
const error = require("./routes/error");

app.use("/", home);

app.use("/date", date);

app.use("/file", file);

app.use("*", error);

const port = 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
