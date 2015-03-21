var app = angular.module('scoreApp');

app.controller('ActiveGameController', function($scope, $routeParams, $firebaseObject, $firebaseArray, activeGameService) {
	$scope.gameId = $routeParams.gameId;
	var pointsGoodRef = new Firebase('https://myscore.firebaseio.com/scoreApp/games/' + $scope.gameId + "/pointsGood");
	var players = $firebaseArray(new Firebase('https://myscore.firebaseio.com/scoreApp/games/' + $scope.gameId + "/players"));
	
	$scope.calcFunc = 'add';
	$scope.buttons = 'option 1';

	pointsGoodRef.on('value', function(snapshot) {
		if(snapshot.val() === 'true') {
			$scope.order = true;
		} else if(snapshot.val() === 'false') {
			$scope.order = false;
		}
		
	});

	players.$loaded().then(function(game) {
		$scope.players = players;
	});

	$scope.updateScore = function() {
		activeGameService.updateScore($scope.newPoints, $scope.calcFunc);
		$scope.newPoints = '';
		$scope.calcFunc = 'add';
	};

});