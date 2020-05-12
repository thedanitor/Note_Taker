var express = require("express");
var path = require("path");
var notes = [];

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../../index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../../notes.html"));
});

app.get("/api/notes", function (req, res) {
  res.json(notes);
})



app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
