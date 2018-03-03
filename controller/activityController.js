
const axios = require("axios");
const KOHL_API_POST = process.env.KLOH_API_POST_URL;

module.exports = {
  index(req, res){
    res.render("lists");
  },

  getAllActivity(req, res){
    let data = req.body;

    axios.post(KOHL_API_POST,data)
    .then(function(response){
      let resData = response.data;
      return res.send(resData);
    })
    .catch(function(err){
      let errorCode = err.response.status || 500, 
      errorText = err.response.statusText || "api error";
      return res.status(errorCode).send(errorText);
    });

  }

}