(function() {
	var config = require('./global');
	var app = config.app;

	var main = require('./main/serverapi');	
	app.get('/', main.index);
	app.get('/index', main.index);
	
	var topic = require('./topic/topics');
	app.get('/topic', topic.index);
	app.get('/api/topics', topic.topics);
	
	var chat = require('./chatroom/chatroom');
	app.get('/chatroom',chat.index);
})();