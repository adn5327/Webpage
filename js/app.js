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
  when('/oh', {
    templateUrl: 'partials/oh.html',
    controller: 'OHController'
  }).
  when('/schedule', {
    templateUrl: 'partials/schedule.html',
    controller: 'ScheduleController'
  }).
  when('/staff', {
    templateUrl: 'partials/staff.html',
    controller: 'StaffController'
  }).
  otherwise({
    redirectTo: '/overview'
  });
}]);

var labApp = angular.module('labApp', ['ngRoute', 'mainControllers']);

labApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/schedule', {
    templateUrl: 'partials/labs/schedule.html',
    controller: 'ScheduleController'
  }).
  when('/lab1', {
    templateUrl: 'partials/labs/lab1.html',
    controller: 'Lab1Controller'
  }).
  when('/lab2', {
    templateUrl: 'partials/labs/lab2.html',
    controller: 'Lab2Controller'
  }).
  when('/lab3', {
    templateUrl: 'partials/labs/lab3.html',
    controller: 'Lab3Controller'
  }).
  when('/lab4', {
    templateUrl: 'partials/labs/lab4.html',
    controller: 'Lab4Controller'
  }).
  otherwise({
    redirectTo: '/schedule'
  });
}]);
