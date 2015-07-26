var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('OverviewController', ['$scope', function($scope) {

}]);

mainControllers.controller('MPController', ['$scope', function($scope) {

}]);

mainControllers.controller('LabController', ['$scope', function($scope) {

}]);

mainControllers.controller('StaffController', ['$scope', function($scope) {

}]);

mainControllers.controller('ScheduleController', ['$scope', '$http', function($scope, $http) {
  $http.get('./data/schedule.json').success(function(data) {
    $scope.schedule = data;
  });
}]);
