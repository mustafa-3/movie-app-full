const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("../db/index");

app.use(bodyParser.json());
app.use(cors());
app.use("/api", require("./api"));

// const Movie = require("../db/models/movie");

sequelize
  .sync()
  .then((result) => {
    const port = 5000;
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
