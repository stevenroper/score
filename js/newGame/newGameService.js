var app = angular.module('scoreApp');

app.service('newGameService', function($firebaseObject, $firebaseArray) {

	var baseFirebaseURL = 'https://myscore.firebaseio.com/scoreApp/games';

	var makeGameId = function() {
		var gameIdArray = [];
		var charSet = 'abcdefghijklmnopqrstuvwxyz';

		for(var i = 0; i < 6; i++) {
			gameIdArray.push(charSet.charAt(Math.floor(Math.random() * charSet.length)));
		}

		return gameIdArray.join('');
	};

	this.createNewGame = function(pointsGood, endingScore) {
		var newGameId = makeGameId();
		var newGameRef = new Firebase(baseFirebaseURL + "/" + newGameId);
		
		newGameRef.set({
			pointsGood: pointsGood,
			endingScore: endingScore,
			gameId: newGameId
		});
	
		return newGameId;
	};

});