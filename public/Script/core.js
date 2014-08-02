(function() {
	var mainApp = angular.module('mainApp', []);
	mainApp.controller("HomeController", [ '$http', function($http) {
		var obj = this;
		obj.words = [];
		$http.get('/api/word').success(function(data) {
			obj.words = data.json;
			console.log(data);
		}).error(function(data) {
			console.log('Error: ' + data);
		});
	} ]);
})();