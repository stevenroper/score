var app = angular.module('scoreApp');

app.controller('NewGameController', function($scope, newGameService, $firebaseArray) {
	
	$scope.games = $firebaseArray(new Firebase('https://myscore.firebaseio.com/scoreApp/games'));
	//create player
	
	//create new game
	$scope.createNewGame = function() {
		newGameService.createNewGame($scope.newGame.pointsGood, $scope.newGame.endingScore);
		
	};

});