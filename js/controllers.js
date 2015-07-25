'use strict';
/* Controllers */
var phonecatControllers = angular.module('phonecatControllers', []);

/****** Login Page controller *****/
phonecatControllers.controller('loginPageCtrl', ['$scope', '$http', '$location',
	function($scope, $http, $location) { 
	
	if (localStorage.getItem("trackUsername") !== "") {
		$scope.trackUsername = localStorage.getItem("trackUsername");
		$scope.trackPassword = localStorage.getItem("trackPassword");
		$scope.loading = true;
		$http.get('http://parssv.com/trackapp_php/?action=login&username='+ $scope.trackUsername +'&password='+ $scope.trackPassword).success(function(data) {
			$scope.userData = data;
			$scope.loading = false;
			if($scope.userData.status == 'verified'){
				var pathurl = "/home";
				console.log(pathurl);
				$location.path(pathurl);
			}
		});
	}
	
	
	$scope.username = "";
	$scope.password = "";
	
		$scope.submit = function(){
			$scope.loading = true;
			$http.get('http://parssv.com/trackapp_php/?action=login&username='+ $scope.username +'&password='+ $scope.password).success(function(data) {
			$scope.userDetails = data;
			$scope.loading = false;
			console.log($scope.userDetails);
			if($scope.userDetails.status == 'verified'){
				var pathurl = "/home";
				console.log(pathurl);
				
				// Check browser support
				if (typeof(Storage) != "undefined") {
					// set localstorage username and password variables
					localStorage.setItem("trackUsername", $scope.username);
					localStorage.setItem("trackPassword", $scope.password);
					//saving username and password to localstoarge.
					$scope.trackUsername = localStorage.getItem("trackUsername");
					$scope.trackPassword = localStorage.getItem("trackPassword");
					
					$location.path(pathurl)  //uncomment to redirect to the profile page
				} 
				else {
					document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
				}
				
			}
		});
		}
	}
]);

/****** Registration Page controller *****/
phonecatControllers.controller('registrationPageCtrl', ['$scope', '$http', '$location',
	function($scope, $http, $location) {  
		
	$scope.username = "";
	$scope.email = "";
	$scope.password = "";
	
	$scope.submit = function() {
		$scope.loading = true;
		$http.get('http://parssv.com/trackapp_php/?action=register&username='+ $scope.username +'&email='+ $scope.email +'&password='+ $scope.password +'&type='+ $scope.type).success(function(data) {
			$scope.userDetails = data;
			$scope.loading = false;
			console.log($scope.userDetails);
			if($scope.userDetails.success == 'true'){
				$scope.userID = $scope.userDetails.id;
				var pathurl = "/verify";
				console.log(pathurl);
				$location.path(pathurl);
			}
		});
	};
	}
]);

/****** Verify User Page controller *****/
phonecatControllers.controller('verifyPageCtrl', ['$scope', '$http', '$location',
	function($scope, $http, $location) {  
		$scope.submit = function(){
			$scope.loading = true;
			$http.get('http://parssv.com/trackapp_php/?action=verify&tocken='+ $scope.tocken).success(function(data) {
			$scope.userDetails = data;
			$scope.loading = false;
			console.log($scope.userDetails);
		});
		}
	}
]);
	
/****** Forgot Password Page controller *****/
phonecatControllers.controller('forgotPasswordPageCtrl', ['$scope', '$http', '$location',
	function($scope, $http, $location) {  
		$scope.submit = function(){
			$scope.loading = true;
			$http.get('http://parssv.com/trackapp_php/?action=recover&email='+ $scope.email).success(function(data) {
			$scope.userDetails = data;
			$scope.loading = false;
		});
	}
}]);

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
