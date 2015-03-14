var app = angular.module('scoreApp');

app.controller('NewGameController', function($scope, $location, newGameService, newPlayerService) {

	$scope.createNewGame = function() {
		var gameId = newGameService.createNewGame($scope.newGame.pointsGood, $scope.newGame.endingScore);
		newPlayerService.createNewPlayer($scope.newPlayer.name, gameId);
		$location.path('/games/' + gameId);
	};

});