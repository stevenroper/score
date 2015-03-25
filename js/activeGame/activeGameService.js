var app = angular.module('scoreApp');

app.service('activeGameService', function($window) {

	this.updateScore = function(newPoints, calcFunc) {
		var playerRef = new Firebase($window.localStorage.getItem('playerId'));
		var newScore = 0;

		playerRef.once('value', function(dataSnapshot) {
			if(calcFunc === 'add') {
				newScore = dataSnapshot.val().score + newPoints;
			} else if(calcFunc === 'minus') {
				newScore = dataSnapshot.val().score - newPoints;
			}
		});

		playerRef.update({
			score: newScore
		});
	};

});