var app = angular.module('scoreApp');

app.controller('JoinGameController', function($scope, joinGameService, $location) {
	
	$scope.joinGame = function() {
		joinGameService.checkAccessCode($scope.joinGameForm.accessCode).then(function(canFindGame) {
			if(canFindGame) {
				joinGameService.addPlayer($scope.joinGameForm.accessCode, $scope.joinGameForm.name);
				$location.path('/games/' + $scope.joinGameForm.accessCode);
			} else {
				$('.error').fadeIn(500).fadeOut(5000);
			}	
		});
	};

});