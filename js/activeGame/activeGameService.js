var app = angular.module('scoreApp');

app.service('activeGameService', function($window) {

	this.updateScore = function(newScore) {
		var playerRef = new Firebase($window.sessionStorage.getItem('playerId'));
		playerRef.update({
			score: newScore
		});
	};

});