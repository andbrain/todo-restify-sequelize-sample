'use restrict';

module.exports = function listModel (queryInterface, Sequelize) {
	
	var list = queryInterface.define('list', {
		nome: Sequelize.STRING,
		descricao: Sequelize.TEXT 
	});

	return list;
};