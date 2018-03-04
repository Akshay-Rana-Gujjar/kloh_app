
const axios = require("axios");
const urlTemplate = require("url-template");
const async = require("async");
const KLOH_API_POST = process.env.KLOH_API_POST_URL;
const KLOH_API_GET = process.env.KLOH_API_GET_URL;

module.exports = {
  index(req, res){
    res.render("lists");
  },

  getAllActivity(req, res){
    let data = req.body;

    axios.post(KLOH_API_POST,data)
    .then(function(response){
      let resData = response.data;
      return res.send(resData);
    })
    .catch(function(err){
      let errorCode = err.response.status || 500, 
      errorText = err.response.statusText || "api error";
      return res.status(errorCode).send(errorText);
    });

  },

  getActivity(req, res){
    let data = req.body;
    let activityId = req.params.activity_id;

    let GET_URL = urlTemplate.parse(KLOH_API_GET).expand({ActivityId : activityId});


    console.log("GET_URL =",GET_URL);

    axios.get(GET_URL)
    .then(function(response){
      let resData = response.data;
      console.log("resDate =",resData);

      return res.render("activity",{result : resData});
    })
    .catch(function(err){
      console.log("err =",err);
    })


  }

}