var server 		= require('./server');
var resources 	= require('./resources');

//Lists
server.get({
	path: '/lists'
},resources.lists.list);

server.get('/lists/:listId', resources.lists.listOne);

server.post('/lists', resources.lists.create);

server.put('/lists/:listId', resources.lists.update);

server.del('/lists/:listId', resources.lists.delete);
