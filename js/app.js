'use strict';

/* App Module */

var phonecatApp = angular.module('trackingApp', [
  'ngRoute',
  'ngSanitize',
  'phonecatControllers',
  'ui.bootstrap',
  'shoppinpal.mobile-menu'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
	  when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginPageCtrl'
      }).
	  when('/registration', {
        templateUrl: 'partials/registration.html',
        controller: 'registrationPageCtrl'
      }).
	  when('/forgot_password', {
        templateUrl: 'partials/forgot_password.html',
        controller: 'forgotPasswordPageCtrl'
      }).
	  when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'homePageCtrl'
      }).
	  when('/verify', {
        templateUrl: 'partials/verify.html',
        controller: 'verifyPageCtrl'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }]);

  
 phonecatApp.directive('loading', function () {
      return {
        restrict: 'E',
        replace:true,
        template: '<div class="loading" style="position:absolute; top:0px; left:0px; width:100%; height:100vh; display:block; background:rgba(0,0,0,0.7); z-index:999"><img src="img/loader.gif" width="100%" height="50" style="margin: auto; position: absolute;top: 0; left: 0; bottom: 0; right: 0;"/></div></div>',
        link: function (scope, element, attr) {
              scope.$watch('loading', function (val) {
                  if (val)
                      $(element).show();
                  else
                      $(element).hide();
              });
        }
      }
  });