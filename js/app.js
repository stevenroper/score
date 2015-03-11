var app = angular.module('scoreApp', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: '/js/home/homeTemplate.html',
		controller: 'HomeController'
	})
	.when('/newGame', {
		template: '<h1>New Game Page</h1>'
	})
	.when('/joinGame', {
		template: '<h1>Join Game Page</h1>'
	})
	.otherwise({
		redirectTo: '/'
	});

});