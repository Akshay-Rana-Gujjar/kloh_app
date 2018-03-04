const express = require("express");
const route = express();
const activityController = require("../controller/activityController");



route.get("/", activityController.index);

route.get("/activity/:activity_id", activityController.getActivity);

route.post("/activity", activityController.getAllActivity);



 module.exports = route;