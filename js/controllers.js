'use strict';
/* Controllers */
var phonecatControllers = angular.module('phonecatControllers', []);

/****** Login Page controller *****/
phonecatControllers.controller('loginPageCtrl', ['$scope', '$http', '$location',
	function($scope, $http, $location) { 
		$scope.submit = function(){
			$scope.loading = true;
			var pathurl = "/home";
			$location.path(pathurl);
		}
	}
]);

/****** Registration Page controller *****/
phonecatControllers.controller('registrationPageCtrl', ['$scope', '$http', '$location',
	function($scope, $http, $location) {  
		$scope.submit = function(){
			$scope.loading = true;
		}
	}
]);
	
/****** Forgot Password Page controller *****/
phonecatControllers.controller('forgotPasswordPageCtrl', ['$scope', '$http', '$location',
	function($scope, $http, $location) {  
		$scope.submit = function(){
			$scope.loading = true;
		}
	}
]);

/****** Home Page controller *****/
phonecatControllers.controller('homePageCtrl', ['$scope', '$http', '$modal', '$location',
	function($scope, $http, $modal, $location) {  
		$scope.submit = function(){
			$scope.loading = true;
		}
		$scope.items = ['item1', 'item2', 'item3'];
		$scope.animationsEnabled = true;
		$scope.open = function (size) {

			var modalInstance = $modal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'add_number.html',
				controller: 'ModalInstanceCtrl',
				size: size,
				resolve: {
					items: function () {
						return $scope.items;
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				$scope.selected = selectedItem;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};
	}
]);
phonecatControllers.controller('ModalInstanceCtrl', ['$scope', '$http', 'items', '$modalInstance', '$location',
	function($scope, $http, items, $modalInstance, $location) {  
		$scope.submit = function(){
			$scope.loading = true;
		}
		$scope.items = items;
		$scope.selected = {
			item: $scope.items[0]
		};
		$scope.ok = function () {
			$modalInstance.close($scope.selected.item);
		};
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	}
]);
