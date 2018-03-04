const express = require("express");
const path = require("path");
const app = express();
const routes = require("./route/index");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const config = require("./config/congif");
const PORT = config.PORT || 3000;

// use pug as template engine, server-side rendering
app.set("view engine", "pug");

// set views directory for pug to convert pug file to HTML
app.set("views", path.join(__dirname, "views"));

// set static file path 
app.use(express.static(path.join(__dirname, "public")));

// parse json from request
app.use(bodyParser.json());

// logging all requests
app.use(morgan('tiny'));

// pass google map api key
app.use(function(req, res, next) {
  res.locals.GOOGLE_MAP_API_KEY = config.GOOGLE_MAP_API_KEY;
  next();
});



app.use("/" , routes);

app.listen(process.env.PORT || PORT, function(){
	console.log("server running!! :D");
});
