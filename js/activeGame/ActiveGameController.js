var app = angular.module('scoreApp');

app.controller('ActiveGameController', function($scope, $routeParams, $firebaseObject, $firebaseArray, $window, activeGameService) {
	$scope.gameId = $routeParams.gameId;
	var gameRef = $firebaseObject(new Firebase('https://myscore.firebaseio.com/scoreApp/games/' + $scope.gameId));

	gameRef.$loaded().then(function(game) {
		gameRef.$bindTo($scope, 'game');
	});
	
	$scope.updateScore = function() {
		//var newScore = $window.prompt('What is your new score?');
		activeGameService.updateScore($scope.newScore);
		$scope.newScore = '';
	};

});