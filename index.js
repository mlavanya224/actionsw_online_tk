var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var mysql = require('mysql')
var connection = mysql.createConnection({
        user: 'root',
        password: '',
        server: 'localhost', 
        database: 'actionsw'
})

connection.connect((error)=>{
	if(error) throw error;
	console.log('sucess')
})



app.post('/auth', function(request, response) {
	console.log(request.body.username)
	var username = request.body.username;
	var password = request.body.password;
	var email = request.body.email;
		connection.query('INSERT INTO users(username, email, password ) VALUES(?, ?, ?)', [username, email, password], function(error, results, fields) {
			if (error) throw err;
			response.send("sucess")
		});
		response.end();
});

var server = app.listen(8000, function(){
	console.log('server running')
})