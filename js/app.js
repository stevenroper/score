var app = angular.module('scoreApp', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
	.when('/', {
		template: '{{test}}',
		controller: 'MainController'
	})
	.otherwise({
		redirectTo: '/'
	});


});