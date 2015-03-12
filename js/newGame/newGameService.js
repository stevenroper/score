var app = angular.module('scoreApp');

app.service('newGameService', function($firebaseObject, $firebaseArray) {

	var baseFirebaseURL = 'https://myscore.firebaseio.com/scoreApp/games';

	var makeGameId = function() {
		var currentActiveGames = $firebaseArray(new Firebase(baseFirebaseURL));
		
		//Generate random 6 letter game ID
		var createRandomId = function() {
			var gameIdArray = [];
			var charSet = 'abcdefghijklmnopqrstuvwxyz';

			for(var i = 0; i < 6; i++) {
				gameIdArray.push(charSet.charAt(Math.floor(Math.random() * charSet.length)));
			}

			return gameIdArray.join('');
		};
	
		//Check that game ID already doesn't exist and rerun if it does
		var currentGameId = createRandomId();
		

		// for(var j = 0; j < currentActiveGames.length; j++) {
		// 	if('wdwdwd' === currentActiveGames) {
		// 		console.log("FAIL!!!!");
		// 	} else {
		// 		console.log("SUCCESS!!!!");
		// 	}
		// }

		//Return game ID once verified it's original
	};

	this.createNewGame = function() {
		makeGameId();
	};

});