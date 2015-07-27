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
  console.log("hi!");
  $http.get('./data/schedule.json').success(function(data) {
    $scope.schedule = data;
    var table = $("#scheduleTable");
    table.addClass("responsive");
    switched = false;
    updateTables();
  });
}]);
