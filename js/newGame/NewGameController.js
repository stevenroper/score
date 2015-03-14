var app = angular.module('scoreApp');

app.controller('NewGameController', function($scope, newGameService, $firebaseArray, $firebaseObject, newPlayerService) {
	
	$scope.games = $firebaseArray(new Firebase('https://myscore.firebaseio.com/scoreApp/games/'));

	$scope.games.$loaded().then(function(data) {
		console.log(data.$getRecord("otmwxg"));
	});

	//create new game
	$scope.createNewGame = function() {
		var gameId = newGameService.createNewGame($scope.newGame.pointsGood, $scope.newGame.endingScore);
		newPlayerService.createNewPlayer($scope.newPlayer.name, gameId);
	};

	//create player

});