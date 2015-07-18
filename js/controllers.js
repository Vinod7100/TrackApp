'use strict';
/* Controllers */
var phonecatControllers = angular.module('phonecatControllers', []);

/****** Login Page controller *****/
phonecatControllers.controller('loginPageCtrl', ['$scope', '$http', '$location',
	function($scope, $http, $location) { 
		$scope.showPage = function(pathurl){
			console.log(pathurl);
			$location.path(pathurl)
		}
		$scope.submit = function(){
			$scope.loading = true;
		}
	}
]);

/****** Registration Page controller *****/
phonecatControllers.controller('registrationPageCtrl', ['$scope', '$http', '$location',
	function($scope, $http, $location) {  
		$scope.showPage = function(pathurl){
			console.log(pathurl);
			$location.path(pathurl)
		}
		$scope.submit = function(){
			$scope.loading = true;
		}
	}
]);
	
/****** Forgot Password Page controller *****/
phonecatControllers.controller('forgotPasswordPageCtrl', ['$scope', '$http', '$location',
	function($scope, $http, $location) {  
		$scope.showPage = function(pathurl){
			console.log(pathurl);
			$location.path(pathurl)
		}
		$scope.submit = function(){
			$scope.loading = true;
		}
	}
]);