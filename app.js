var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var jsonParser = bodyParser.json();

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(4002, function() {
    console.log('Example app listening on port 3000!');
});