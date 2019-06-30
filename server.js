const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passport = require("passport");

const app = express();

server.use(cors("*"));

server.use(passport.initialize());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./public")));

app.use("/api/products", require("./routes/products"));
app.use("/api/events", require("./routes/events"));
app.use("/api/sampleproduct", require("./routes/sampleProduct"));
app.use("/api/philosophy", require("./routes/philosophy"));
app.use("/api/store", require("./routes/store"));

server.use("/api/auth", require("./routes/auth"));

module.exports = app;
