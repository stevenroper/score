var app = angular.module('scoreApp');

app.controller('ActiveGameController', function($scope, $routeParams) {
	console.log($routeParams.gameId);
});