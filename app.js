var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/home', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/registration', {
    templateUrl : 'pages/registration.html',
    controller  : 'RegController'
  })
  .when('/last', {
    templateUrl : 'pages/last.html',
    controller  : 'LastController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
 
});

app.controller('RegController', function($scope) {
  $scope.message = 'Hello from RegisterController';
  $scope.s1=0;
    $scope.s2=0;
    $scope.s3=0;
    $scope.s4=0;
  $scope.avg = $scope.s1+$scope.s2+$scope.s3+$scope.s4;
  
});

app.controller('LastController', function($scope) {
  $scope.message = 'Hello from LastController';
 
});