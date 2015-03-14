var app = angular.module('scoreApp');

app.controller('JoinGameController', function($scope, joinGameService) {
	
	$scope.joinGame = function() {
		joinGameService.checkAccessCode($scope.joinGameForm.accessCode).then(function(canFindGame) {
			if(canFindGame) {
				console.log('Woop! Found your game. Let\'s play!');
				joinGameService.addPlayer($scope.joinGameForm.accessCode, $scope.joinGameForm.name);
			} else {
				console.log('Access code is invald. Try again, or create a new game.');
			}	
		});
	};

});