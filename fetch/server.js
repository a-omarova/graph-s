const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.get('/hello', function(req, res){

  res.header({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE',
    'Access-Control-Max-Age': '600'
  });

  res.send({ some: 'json' });
});

app.post('/index-post.html', function (req, res, next) {

	const options = {
		headers: {
			'x-timestamp': Date.now(),
			'x-sent': true
		}
	};

	const fileName = req.params.name;
	res.sendFile(fileName, options, function (err) {
		if (err) {
			next(err);
		} else {
			console.log('Sent:', fileName);
		}
	});

});

app.post('/post', function(req, res){

  res.header({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE',
    'Access-Control-Max-Age': '600'
  });

	console.log('Cookies: ', req.cookies)

	// Cookies that have been signed
	console.log('Signed Cookies: ', req.signedCookies)

	console.log(req.body);

	res.json({status: 'OK', ...req.body})
});

app.listen(3001, '127.0.0.1');
app.listen(3002, '127.0.0.1');
