(function() {
	var topic = angular.module('topic', []);
	topic.controller("TopicController", [ '$http', function($http) {
		var obj = this;
		obj.topics = [];
		$http.get('/api/topics').success(function(data) {
			obj.topics = data.json;
			obj.pathimage='images/sources/topics/'
		}).error(function(data) {
			console.log('Error: ' + data);
		});
	} ]);
})();