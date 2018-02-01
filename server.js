// declaring dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// server set up 

var app = express();

// determining which port to use
var PORT = process.env.PORT || 8080;


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// setting static dir
app.use(express.static(path.join(__dirname,"/app/public")));


// routing
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

// the following starts the server
app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
});

