const addon = require('./build/Release/dbaddon');
var http = require('http');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 

var http = require("http");



app.post('/id', function(req, res) {
	//webaddon.printname(req.body.name);
	console.log("going to insert");
	addon.printname(req.body.id);
	console.log("inserted");
	res.end();
});

app.get('/',function(req,resp) {
	fs.readFile("db_page.html", function (error, pgResp) {
			resp.writeHead(200, { 'Content-Type': 'text/html' });
			resp.write("test");
			resp.write(pgResp);
			resp.end();
	});
});

app.listen(8080, function() {
	console.log('Server running at http://127.0.0.1:8080/');
});

// Console will print the message
// Prints: 'world'