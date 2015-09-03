var app = angular.module('scoreApp');

app.controller('JoinGameController', function($scope, joinGameService, $location) {
	
	$scope.joinGame = function() {
		joinGameService.checkAccessCode($scope.joinGameForm.accessCode.toLowerCase()).then(function(canFindGame) {
			if(canFindGame) {
				joinGameService.addPlayer($scope.joinGameForm.accessCode.toLowerCase(), $scope.joinGameForm.name);
				$location.path('/games/' + $scope.joinGameForm.accessCode.toLowerCase());
			} else {
				$('.error').slideDown(1000);
				setTimeout(function() {
					$('.error').slideUp(1000);
				}, 5000);
			}	
		});
	};

});