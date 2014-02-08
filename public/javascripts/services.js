
/************************************************************** 
 * 
 * This is reusable service module 
 * 
 **************************************************************/ 
var services = angular.module('sampleApp.services', []);

// Factory
sampleApp.factory('NavFactory', function($location){

    return {
        home: function(id){
        	console.log("home");
            return $location.path('/');
        } ,
        read: function() {
        	console.log("read");
        	return $location.path('/read');
		}
    }              
});
