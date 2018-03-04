app.controller("activityController", ["$scope", "$http" , "NgMap", function($scope, $http, NgMap){


  NgMap.getMap().then(function(map) {
    console.log(map);
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
 
  $('.carousel.carousel-slider').carousel({fullWidth: true});
}]);