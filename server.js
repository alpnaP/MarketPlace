const express = require("express");
const app = express();
const path = require("path");
// app.use(express.static(__dirname + "/dist"));

//PathLocationStradegy
app.listen(process.env.PORT || 3000, function () {
  console.log("Express server listening on port %d in %s mode");
});
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/zero/index.html"));
});
