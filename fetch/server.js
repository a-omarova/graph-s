const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

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

app.listen(3001, '127.0.0.1');
app.listen(3002, '127.0.0.1');
