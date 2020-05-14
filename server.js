var express = require("express");
var apiRoutes = require("./routes/apiRoute.js");
var htmlRoutes =  require("./routes/htmlRoute.js");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);





app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
