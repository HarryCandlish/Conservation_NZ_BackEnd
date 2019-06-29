const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./public")));

app.use("/api/products", require("./routes/products"));
app.use("/api/events", require("./routes/events"));
app.use("/api/sampleproduct", require("./routes/sampleProduct"));
app.use("/api/philosophy", require("./routes/philosophy"));
app.use("/api/store", require("./routes/store"));

module.exports = app;
