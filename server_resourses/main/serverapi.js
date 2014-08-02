(function() {
	var global = require('../global');
	//var connectionpool = global.connectionpool;
	exports.index = function(req, res) {
		res.sendfile('./public/View/index.html');
	};
})();