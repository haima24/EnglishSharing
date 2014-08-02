var config = require('./server_resourses/global');

var app = config.app;
var connectionpool = config.connectionpool;
var express = config.express;
var server=config.server;
var routing = require('./server_resourses/routing');

var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

