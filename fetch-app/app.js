const express = require('express');
const app = express();

// app.get('/', function (req, res) {
// 	res.send('Hello World!');
// });
//
// app.listen(3000, function () {
// 	console.log('Example app listening on port 3000!');
// });

app.get('/hello', function(req, res){

	res.header({
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE',
		'Access-Control-Max-Age': '600'
	});

	res.send('hello world!');
});

app.post('/', function(req, res){

	res.header({
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE',
		'Access-Control-Max-Age': '600'
	});

	console.log(req.body);

	res.json({status: 'OK', ...req.body});
});

app.listen(3000, '127.0.0.1');
app.listen(3001, '127.0.0.1');

