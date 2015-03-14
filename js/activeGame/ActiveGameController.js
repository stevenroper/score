var app = angular.module('scoreApp');

app.controller('ActiveGameController', function($scope, $routeParams, gameService, $firebaseObject, $firebaseArray) {
	$scope.gameId = $routeParams.gameId;
	var gameRef = $firebaseObject(new Firebase('https://myscore.firebaseio.com/scoreApp/games/' + $scope.gameId));

	gameRef.$loaded().then(function(game) {
		gameRef.$bindTo($scope, 'game');
	});
	
});