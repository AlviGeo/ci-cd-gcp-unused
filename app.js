const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");

const dataRoutes = require("./src/routes/data");
const errorHandler = require("./src/middleware/errorHandler");


const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(cors());
app.use(bodyParser.json());


app.use('/', dataRoutes);

app.get("/", (req, res) => {
  res.json({ message: "The server has started." });
});

app.use(errorHandler);


module.exports = app;
