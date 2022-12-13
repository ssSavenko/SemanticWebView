var app = angular.module('authApp', []);

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

app.controller('authController',  function($scope, $http, $window)
{

  $scope.loginName = "";
  $scope.password = "";


  var a = "";
  $scope.loginFunction = function() {
      return $http({
          method: 'POST',
          url: 'https://localhost:7064/Auth/login',
          data: {
            login:$scope.loginName,
            password: $scope.password
          }
      }).then(function (response) {
          var string  = response.data.toString();
          $window.location.href = '/regionList.html?key='+string;
      });
  };


});
