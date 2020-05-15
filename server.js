var express = require("express");
// var apiRoutes = require("./routes/apiRoute.js");
// var htmlRoutes =  require("./routes/htmlRoute.js");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
//Router points server to route files
// These routes give out server a "map" of how to respond when users visit or request data from various URLS
require('./routes/apiRoute')(app);
require('./routes/htmlRoute')(app);





app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
