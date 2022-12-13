var app = angular.module('regionApp', []);

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

app.controller('regionController', function($scope, $http, $window) {
  $scope.target = new URL(location.href).searchParams.get('key');
  $scope.regionLink = new URL(location.href).searchParams.get('regionLink');
  $scope.response = { };
  $http({
      method: 'Get',
      url: 'https://localhost:7064/Region/GetParksInRegion?token='+ $scope.target+"&regionLink="+$scope.regionLink
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
