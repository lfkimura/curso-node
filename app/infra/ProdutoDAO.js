var ProdutoDAO = function(connection) {
	this._connection = connection;
	
}

ProdutoDAO.prototype.lista =  function ( callback ) {
		return	this._connection.query('select * from livros', callback);
	}

module.exports = function(){
	return ProdutoDAO;
}

