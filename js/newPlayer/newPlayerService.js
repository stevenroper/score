var app = angular.module('scoreApp');

app.service('newPlayerService', function($firebaseObject) {

	var currentGames = $firebaseObject(new Firebase('https://myscore.firebaseio.com/scoreApp/games/'));

	this.createNewPlayer = function(playerName, gameId) {
		console.log('Name: ' + playerName);
		console.log('Game ID: ' + gameId);
		console.log(currentGames);
	};

});