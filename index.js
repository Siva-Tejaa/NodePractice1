const express = require("express");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const home = require("./routes/home");
const date = require("./routes/date");
const file = require("./routes/file");
const error = require("./routes/error");
const data = require("./routes/data");
const crud = require("./routes/crud");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

app.use("/", home);
app.use("/date", date);
app.use("/file", file);
app.use("/data", data);
app.use("/crud", crud);
app.use("*", error);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
