var app = angular.module('scoreApp');

app.controller('HomeController', function($scope, $location) {
	
	$scope.newGame = function() {
		$location.path('/newGame');
	};

	$scope.joinGame = function() {
		$location.path('/joinGame');
	};

});