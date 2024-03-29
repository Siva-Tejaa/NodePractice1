// swagger.js
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Your Express API",
      version: "1.0.0",
      description:
        "API documentation for your Express.js application using Swagger",
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
