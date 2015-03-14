var app = angular.module('scoreApp');

app.service('joinGameService', function($firebaseArray, $q) {

	this.checkAccessCode = function(code) {
		var gamesRef = $firebaseArray(new Firebase('https://myscore.firebaseio.com/scoreApp/games'));
		var deferred = $q.defer();

		gamesRef.$loaded().then(function(data) {
			if(gamesRef.$getRecord(code)) {
				deferred.resolve(true);
			} else {
				deferred.resolve(false);
			}
		}, function(error) {
			deferred.refect(error);
		});

		return deferred.promise;
	};

});