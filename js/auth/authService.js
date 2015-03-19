var app = angular.module('scoreApp');

app.service('authService', function() {
	var firebaseRef = new Firebase('https://myscore.firebaseio.com');
	
	this.authNewPlayer = function() {
		if(!firebaseRef.getAuth()) {
			firebaseRef.authAnonymously(function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    console.log("Success!", authData);
			  }
			}, {
				remember: 'sessionOnly'
			});	
		}
	};
	

});