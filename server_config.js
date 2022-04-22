"use strict";
const express = require("express");
const path = require("path");
const port = 3000;
const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname + `/views/${name}`)); //zwraca plik o który jest request /public
  };
  next();
});

app.use("/public", express.static(path.join(__dirname + "/public"))); //folder z plikami udostępnionymi na zewnątrz

app.get("/", (req, res) => {
  res.show("/index.html");
});

app.get("/kategoria", (req, res) => {
  res.show("/kategoria.html");
});

app.get("/rowery", (req, res) => {
  res.show("/rowery.html");
});

app.get("/produkt", (req, res) => {
  res.show("/produkt.html");
});

const PORT = process.env.PORT || port;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
