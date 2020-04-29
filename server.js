const express = require("express");
const app = expres();
const path = require("path");
app.us(express.static(__dirname + "/dist"));

//PathLocationStradegy
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});
