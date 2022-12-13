var app = angular.module('regionApp', []);

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

app.controller('regionController', function($scope, $http, $window) {
  $scope.target = new URL(location.href).searchParams.get('key');
  $scope.link = new URL(location.href).searchParams.get('link');
  $scope.response = { };
  var x = 'https://localhost:7064/Region/GetParksData?token='+ $scope.target +'&parkLink='+$scope.link;
  $http({
      method: 'Get',
      url: 'https://localhost:7064/Region/GetParksData?token='+ $scope.target +'&parkLink='+$scope.link
  }).then(function (response) {
        if(response.data == "unknownUser"){
                    $window.location.href = '/index.html'

        }
        else {
        $scope.response = response.data;

        }
        return false;
  });
});
