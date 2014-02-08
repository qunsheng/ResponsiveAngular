/************************************************************** 
 * 
 * This is main JavaScript file using Angular.js
 * 
 **************************************************************/ 


/************************************************************** 
 * 
 * Define an angular module for our app
 * 
 **************************************************************/ 
var sampleApp = angular.module('sampleApp', ['sampleApp.services']);


/************************************************************** 
 * 
 * Define Routing for app
 * 
 **************************************************************/ 
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
    }).
    when('/read', {
        templateUrl: 'partials/read.html',
        controller: 'ReadCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);


/************************************************************** 
 * 
 * Main controller
 * 
 **************************************************************/ 
sampleApp.controller('MainCtrl', function($scope, NavFactory) {

	    console.log("main controller... ");

        // callback for ng-click 'read':
        $scope.read = function () {
        	console.log("read clicked");
            NavFactory.read();
        };
        
});


/************************************************************** 
 * 
 * Read controller
 * 
 **************************************************************/ 
sampleApp.controller('ReadCtrl', function($scope, NavFactory) {

	    console.log("read controller... ");
	    
        // callback for ng-click 'home':
        $scope.home = function () {
        	console.log("home clicked");
            NavFactory.home();
        };
        
});


 