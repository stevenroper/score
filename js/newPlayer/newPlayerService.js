var app = angular.module('scoreApp');

app.service('newPlayerService', function($window) {

	this.createNewPlayer = function(playerName, gameId) {
		// var firebaseRef = new Firebase('https://myscore.firebaseio.com');
		var gameRef = new Firebase('https://myscore.firebaseio.com/scoreApp/games/' + gameId);
		
		// firebaseRef.authAnonymously(function(error, authData) {
		//   if (error) {
		//     console.log("Login Failed!", error);
		//   } else {
		//     var playersRef = gameRef.child('players');
		// 		var newPlayerRef = playersRef.push({
		// 			name: playerName,
		// 			score: 0
		// 		});

		// 		$window.sessionStorage.setItem('playerId', newPlayerRef);
		//   }
		// }, {
		// 	remember: 'sessionOnly'
		// });

		var playersRef = gameRef.child('players');
		var newPlayerRef = playersRef.push({
			name: playerName,
			score: 0
		});

		$window.sessionStorage.setItem('playerId', newPlayerRef);

	};

});