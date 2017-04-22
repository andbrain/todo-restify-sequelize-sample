var server = require('./server');
var env    = process.env.NODE_ENV || 'dev';
var config = require('./config')[env];

var port   = config.server_port;

server.listen(port, function () {
	console.log('API listening %j', server.address());
});