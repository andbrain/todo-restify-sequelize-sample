'use restrict';

module.exports = function itemModel (queryInterface, Sequelize) {
	
	var item = queryInterface.define('item', {
		nome: Sequelize.STRING,
		quantidade: Sequelize.INTEGER 
	});

	return item;
};