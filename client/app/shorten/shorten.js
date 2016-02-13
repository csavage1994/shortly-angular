angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  console.log($scope.url);

  $scope.addLink = function(){
    //console.log($scope.link);
    Links.addLink($scope.link)
      .then(function() {
        $location.path('/links');
      })
      .catch(function(error){
        console.log(error);
      });
      // .then(function(data) {
      //   $scope.data.links = data;
      // })
      // .catch(function(err) {
      //   console.error(err);
      // });
  };
});