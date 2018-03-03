const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const app = express();
const routes = require("./route/index");
const bodyParser = require("body-parser");

// use pug as template engine, server-side rendering
app.set("view engine", "pug");

// set views directory for pug to convert pug file to HTML
app.set("views", path.join(__dirname, "views"));

// set static file path 
app.use(express.static(path.join(__dirname, "public")));

// parse json from request
app.use(bodyParser.json())

app.use("/" , routes);

app.listen("3000", function(){
	console.log("server running!! :D");
});
