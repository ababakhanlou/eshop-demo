const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.options("*", cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  req.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  if (req.method === "OPTIONS") {
    req.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.get("/", (_, res) => {
  res.send("we are on home");
});

const getStock = require("./stock");
app.use("/stock", getStock);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, dbName: "shoppingstock" },
  (_) => {
    console.log("connected to db");
  }
);

app.listen(process.env.PORT || 3001);
