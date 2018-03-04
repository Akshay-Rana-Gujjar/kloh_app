app.controller("activityController", ["$scope", "$http" , "NgMap", function($scope, $http, NgMap){

  $('.carousel.carousel-slider').carousel({fullWidth: true});

  $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBvjaXCUG0sgZjwlDBH3NtN5WwB2ef-I0A";

  NgMap.getMap().then(function(map) {
    console.log(map);
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
 

}]);