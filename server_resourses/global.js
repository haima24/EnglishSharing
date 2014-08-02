var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var connectionpool = mysql.createPool({

	host : 'localhost',
	user : 'root',
	password : '0913950737',
	database : 'englishsharing'
});
var fget = function(req, res, command) {
	if (req && res && command) {
		connectionpool.getConnection(function(err, connection) {
			if (err) {
				console.error('CONNECTION error message: ', err);
				res.statusCode = 503;
				res.send({
					result : 'error',
					err : err.code
				});
			} else {
				connection.query(command, function(err, rows, fields) {
					if (err) {
						console.error(err);
						res.statusCode = 500;
						res.send({
							result : 'error',
							err : err.code
						});
					}
					res.send({
						result : 'success',
						err : '',
						fields : fields,
						json : rows,
						length : rows.length
					});
					connection.release();
				});
			}
		});
	}
};
exports.app = app;
exports.connectionpool = connectionpool;
exports.express = express;
exports.fget = fget;
exports.server = server;
exports.io = io;