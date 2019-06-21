const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./public")));

app.use("/api/products", require("./routes/products"));
app.use("/api/events", require("./routes/events"));

module.exports = app;
