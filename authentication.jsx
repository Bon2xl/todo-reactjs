var Firebase = require('firebase/app');
require('firebase/auth');

var authFBURL = function() {
	// Authentication
	var auth = firebase.auth();
	auth.signInAnonymously().catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		console.err(errCode);
		console.err(errorMessage);
	});

	auth.onAuthStateChanged(function(user) {
		if (user) {
			// User is signed in.
			var isAnonymous = user.isAnonymous;
			var uid = user.uid;
			// ...
			// console.log(user.uid);
			// console.log(user.isAnonymous);
		} else {
			// Signout
			auth.signOut().then(function() {
				console.log("signout success");
			}, function(error) {
				console.log(error);
			});
		}
	});
};

module.exports = authFBURL;
