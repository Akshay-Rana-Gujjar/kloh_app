const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();

const app = express();

// use pug as template engine
app.set("view engine", "pug");

// set views directory for pug to convert pug file to HTML
app.set("views", path.join(__dirname, "views"));

// set static file path 
app.set(express.static(path.join(__dirname, "public")));

// set local variables
app.locals.API_GET = process.env.KLOH_API_GET_URL;
app.locals.POST_API = process.env.KLOH_API_POST_URL;



app.get("/", function(req, res){
	
	res.render("lists", {name : "akshay"});
});
app.listen("3000", function(){
	console.log("server running!! :D");
});
