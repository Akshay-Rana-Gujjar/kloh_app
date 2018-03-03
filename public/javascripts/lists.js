app.controller("listsController", ["$scope", "$http", function ($scope, $http) {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("position :", position);
    });
  };

  function getActivityByLocation(lat, lon) {
    if (!lat || !lon) {
      return Materialize.toast('Something went Wrong', 4000, "red")
    }

    var latAndLongObject = {lat: lat, lon : lon}

    $http({
      url: "/activity",
      method: "POST",
      data: latAndLongObject
    }).then(function (res) {
      console.log(res);
      $scope.activities = res.data.response.results;
      $scope.totalActivites = res.data.response.pagination.count;
    }, function (err) {
      console.log("err",err)
    })
  };

  getActivityByLocation(12.971599, 77.594563);


}])

