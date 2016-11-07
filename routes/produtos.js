var produtos = function (app){

app.get('/produtos', function(req,res){
	var mysql = require('mysql');
	var connection = mysql.createConnection({
	 host: "localhost",
            user: "root",
            password : "root",
            database: "nodejs"
	});

	connection.query('select * from livros ', function(err,results){
		res.render('produtos/lista', { lista: results});
	});
	connection.end();
	});
}

module.exports = function (app){
	return produtos(app);
}
