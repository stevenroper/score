var app = angular.module('scoreApp');

app.controller('HomeController', function($scope, $location, authService) {
	
	$scope.newGame = function() {
		authService.authNewPlayer();
		$location.path('/newGame');
	};

	$scope.joinGame = function() {
		authService.authNewPlayer();
		$location.path('/joinGame');
	};

});