'use restrict';

var currentPath = process.cwd();
var restify 	= require('restify');
var models 		= require(currentPath + '/models');


module.exports = function listList (req, res, next) {
	
	res.send({});


	return next();
}