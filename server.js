var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var fs = require('fs');
var app = express();

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

/*app.get('/endpoint', function(req, res){
	var obj = {};
	obj.title = 'title';
	obj.data = 'data';
	
	console.log('params: ' + JSON.stringify(req.params));
	console.log('body: ' + JSON.stringify(req.body));
	console.log('query: ' + JSON.stringify(req.query));
	
	res.header('Content-type','application/json');
	res.header('Charset','utf8');
	res.send(req.query.callback + '('+ JSON.stringify(obj) + ');');
});*/

app.post('/endpoint', function(req, res){
	var obj = {};
	console.log('body: ' + JSON.stringify(req.body));
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write("hello ");
	//res.write(req.body);
	//var jsonobj = JSON.parse(req.body);
	var name = req.body.name;
	console.log(req.body.name);
	var jsonstr = JSON.stringify(req.body.name);
	console.log(jsonstr);
	var trimm = jsonstr.slice(1, jsonstr.length-1);
	console.log(trimm);
	res.write(trimm);
	res.end();
});

app.get('/',function(req,resp) {
	fs.readFile("client.html", function (error, pgResp) {
			resp.writeHead(200, { 'Content-Type': 'text/html' });
			resp.write(pgResp);
			resp.end();
	});
});

app.listen(3000, function() {
	console.log('Server running at http://127.0.0.1:8080/');
});
