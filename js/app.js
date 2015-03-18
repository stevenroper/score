var app = angular.module('scoreApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: './js/home/homeTemplate.html',
		controller: 'HomeController'
	})
	.when('/newGame', {
		templateUrl: './js/newGame/newGameTemplate.html',
		controller: 'NewGameController'
	})
	.when('/joinGame', {
		templateUrl: './js/joinGame/JoinGameTemplate.html',
		controller: 'JoinGameController'
	})
	.when('/games/:gameId', {
		templateUrl: './js/activeGame/activeGameTemplate.html',
		controller: 'ActiveGameController'
	})
	.otherwise({
		redirectTo: '/'
	});

});