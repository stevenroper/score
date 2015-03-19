var app = angular.module('scoreApp');

app.service('newPlayerService', function($window) {

	this.createNewPlayer = function(playerName, gameId) {
		var gameRef = new Firebase('https://myscore.firebaseio.com/scoreApp/games/' + gameId);

		var playersRef = gameRef.child('players');
		var newPlayerRef = playersRef.push({
			name: playerName,
			score: 0
		});

		$window.sessionStorage.setItem('playerId', newPlayerRef);

	};

});