angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // angular.extend($scope, Links);
  $scope.data = {};
  $scope.signout = Auth.signout;

  $scope.getLinks = function(){
    Links.getLinks()
      .then(function(data) {
        $scope.data.links = data;
      })
      .catch(function(err) {
        console.error(err);
      });
  };
  $scope.getLinks();
  $scope.name = "LinksController";
});

// .factory('retrieveLinks', function($http){
//   var getData = function(){
//     return $http({
//       method: 'GET',
//       url: "/api/links"
//     })
//     .then(function(response){
//       return response.data;
//     });
//   };
//   return {
//     getData: getData
//   };
// });