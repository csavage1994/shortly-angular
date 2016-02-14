angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.link = {};
  $scope.signout = Auth.signout;

  console.log($scope.url);

  $scope.addLink = function(){
    //console.log($scope.link);
    $scope.loading = true;
    Links.addLink($scope.link)
      .then(function() {
        $scope.loading = false;
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