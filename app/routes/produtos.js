var produtos = function (app){

app.get('/produtos', function(req,res){
	var connection = app.infra.connectionFactory();
	var produtosBanco = new app.infra.ProdutoDAO(connection);
	produtosBanco.lista( function(err,results){
		res.render('produtos/lista', { lista: results});
	});
	connection.end();
	});
app.get('/produtos/form', function (req,res){
	console.log('cheguei aqui');
	res.render('produtos/form');
	});

app.post('produtos/salva', function(req,res) {
	console.log("posting form");
	var connection = app.infra.connectionFactory();
	var produtosBanco = new app.infra.ProdutoDAO(connection);
	produtosBanco.salva(function(err,results) {
		res.render('produtos/lista', { lista: results});
	});
	});

}


module.exports = function (app){
	return produtos(app);
}
