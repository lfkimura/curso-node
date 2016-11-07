var mysql = require('mysql');
var connectionFactory = function() {

	var connection = mysql.createConnection({
	 host: "localhost",
            user: "root",
            password : "root",
            database: "nodejs"
	});
	return connection;
}

module.exports = function(){
	return connectionFactory;
}
