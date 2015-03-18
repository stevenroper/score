var app = angular.module('scoreApp');

app.controller('ActiveGameController', function($scope, $routeParams, $firebaseObject, $firebaseArray, activeGameService) {
	$scope.gameId = $routeParams.gameId;
	var gameRef = $firebaseArray(new Firebase('https://myscore.firebaseio.com/scoreApp/games/' + $scope.gameId));

	gameRef.$loaded().then(function(game) {
		$scope.game = gameRef.$getRecord('players');
		//console.log(gameRef);
	});
	
	$scope.updateScore = function() {
		activeGameService.updateScore($scope.newScore);
		$scope.newScore = '';
	};

});