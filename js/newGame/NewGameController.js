var app = angular.module('scoreApp');

app.controller('NewGameController', function($scope, newGameService) {
	
	//create player
	
	//create new game
	$scope.createNewGame = function() {
		newGameService.createNewGame();
	};

});