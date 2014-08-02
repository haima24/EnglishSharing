(function() {
	var global = require('../global');
	 var io = global.io;
	 io.on('connection', function(socket) {
		 socket.on('new message', function(data) {
			 socket.broadcast.emit('new message', {
			       message: data
			     });
		 });
	 });
	exports.index = function(req, res) {
		res.sendfile('./public/View/chat.html');
	};
})();