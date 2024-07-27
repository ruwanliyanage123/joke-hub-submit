const express = require("express");
const bodyParser = require("body-parser");
const jokeRoutes = require("../routes/jokes");
const databaseConnection = require("../database/database");
const PORT = process.env.PORT || 3000;
const app = express();

databaseConnection();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(jokeRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
