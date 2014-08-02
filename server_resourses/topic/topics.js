(function() {
	var global = require('../global');
	var connectionpool = global.connectionpool;
	var fget = global.fget;
	exports.topics = function(req, res) {
		fget(req, res, 'SELECT * FROM topic');
	};
	exports.index = function(req, res) {		
		res.sendfile('./public/View/topic.html');
	};
})();