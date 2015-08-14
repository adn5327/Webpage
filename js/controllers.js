var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('OverviewController', ['$scope', function($scope) {

}]);

mainControllers.controller('MPController', ['$scope', function($scope) {

}]);

mainControllers.controller('LabController', ['$scope', function($scope) {

}]);

mainControllers.controller('StaffController', ['$scope', '$http', function($scope, $http) {
  $http.get('./data/staff.json').success(function(data) {
    $scope.staff = data;
  });
}]);

mainControllers.controller('ScheduleController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
  $http.get('./data/schedule.json').success(function(data) {
    $scope.schedule = data;
    $scope.days = ["Monday", "Wednesday", "Thursday Lab", "Friday"];
    $scope.dontEscapeHtml = function(html) {
      return $sce.trustAsHtml(html);
    };
  });
}]);
