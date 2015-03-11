var app = angular.module('scoreApp', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: '/js/home/homeTemplate.html',
		controller: 'HomeController'
	})
	.otherwise({
		redirectTo: '/'
	});
	
});