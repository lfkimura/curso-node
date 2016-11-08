var produtoBanco = function(connection) {
	this.lista = function ( callback ) {
		return	connection.query('select * from livros', callback);
	}
	return this;
}
module.exports = function(connection){
	return produtoBanco;
}

