'use restrict';

var restify = require('restify');
var models = require('./models');
var server = restify.createServer();
module.exports = server;

var sequelize = models.sequelize;
sequelize.sync()
.then(() => {

})
.catch((err) => {
	console.log(err);
});

require('./routes');