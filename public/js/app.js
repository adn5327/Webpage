var mainApp = angular.module('mainApp', ['ngRoute', 'mainControllers']);

mainApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/overview', {
    templateUrl: 'partials/overview.html',
    controller: 'OverviewController'
  }).
  when('/mp', {
    templateUrl: 'partials/mp.html',
    controller: 'MPController'
  }).
  when('/lab', {
    templateUrl: 'partials/lab.html',
    controller: 'LabController'
  }).
  when('/staff', {
    templateUrl: 'partials/staff.html',
    controller: 'StaffController'
  }).
  otherwise({
    redirectTo: '/overview'
  });
}]);