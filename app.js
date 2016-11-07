var app = require('./config/express')();
var produtos = require('./routes/produtos')(app);
app.listen(3000);
console.log("servidor rodando");
